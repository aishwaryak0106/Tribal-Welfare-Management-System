#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="addproduct":

  fileitem = form["pimg"]
  pname = form.getvalue("pname")
  cat = form.getvalue("cat")
  price = form.getvalue("price")
  oprice = form.getvalue("oprice")
  qty = form.getvalue("qty")

  sql1 = "select ifnull(max(pid),200)+1 pid1 from productdetails"
  pnid = json.loads(c.db.getJSON(sql1))
  pnid = pnid[0]["pid1"]
  if fileitem.filename:

    fn = os.path.basename(fileitem.filename)
    fn = fn.split(".")
    fn = fn[len(fn)-1]
    sql = "insert into productdetails values(%s,%s,%s,%s,%s,%s,%s,%s)"
    vals = (pnid,pname,cat,price,oprice,qty,fn,1)
    result = c.db.setValues(sql, vals)
    #print(rowCnt)
    print(result)
    fn = "%s.%s" % (pnid,fn)
    open("../uploads/" + fn, "wb").write(fileitem.file.read()) 
     
  
    
