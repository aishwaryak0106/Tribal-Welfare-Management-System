#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="addmanager":
    data=json.loads(form.getvalue("data"))
    sql="insert into managerdetails values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    vals=(None,data['mname'],data['address'],data['email'],data['mob'],data['gender'],data['uname'],data['pwd'],'1')
    result=c.db.setValues(sql,vals)
    print(result)
