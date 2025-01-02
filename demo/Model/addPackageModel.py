#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
import datetime
c_d=datetime.datetime.today()
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="pack1":
    data=json.loads(form.getvalue("data"))
    sql="insert into packagedetails values(%s,%s,%s,%s,%s)"
    vals=(None,data['pname'],data['pdesc'],c_d,1)
    result=c.db.setValues(sql,vals)
    print(result)
