#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="add":

  fileitem = form["img"]
  name = form.getvalue("name")
  edesc = form.getvalue("edesc")
  edate = form.getvalue("edate")

  sql1 = "select ifnull(max(eid),0)+3 eid1 from eventdetails"
  cnid = json.loads(c.db.getJSON(sql1))
  cnid = cnid[0]["eid1"]
  if fileitem.filename:

    fn = os.path.basename(fileitem.filename)
    fn = fn.split(".")
    fn = fn[len(fn)-1]
    sql = "insert into eventdetails values(%s,%s,%s,%s,%s)"
    vals = (cnid,name,edesc,edate,fn)
    result = c.db.setValues(sql, vals)
    #print(rowCnt)
    print(result)
    fn = "%s.%s" % (cnid,fn)
    open("../uploads/" + fn, "wb").write(fileitem.file.read()) 
     
  
    
