#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="addoff":
    data=json.loads(form.getvalue("data"))
    sql="insert into officerdetails values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    vals=(None,data['oname'],data['address'],data['email'],data['mob'],data['gender'],data['uname'],data['pwd'],data['dist'],1)
    result=c.db.setValues(sql,vals)
    print(result)
