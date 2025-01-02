#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="category":

  fileitem = form["cimg"]
  name = form.getvalue("cname")
  
  sql1 = "select ifnull(max(cid),0)+20 cid1 from category"
  cnid = json.loads(c.db.getJSON(sql1))
  cnid = cnid[0]["cid1"]
  if fileitem.filename:

    fn = os.path.basename(fileitem.filename)
    fn = fn.split(".")
    fn = fn[len(fn)-1]
    st = 0
    sql = "insert into category values(%s, %s, %s)"
    vals = (cnid,name,fn)
    result = c.db.setValues(sql, vals)
    #print(rowCnt)
    print(result)
    fn = "%s.%s" % (cnid,fn)
    open("../uploads/" + fn, "wb").write(fileitem.file.read()) 
