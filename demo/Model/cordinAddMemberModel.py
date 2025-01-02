#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="addmember":
    data=json.loads(form.getvalue("data"))
    sql="insert into tribalmembers values(%s,%s,%s,%s,%s,%s,%s)"
    vals=(None,data['mname'],data['comm'],data['gender'],data['bdate'],data['edu'],1)
    result=c.db.setValues(sql,vals)
    print(result)
