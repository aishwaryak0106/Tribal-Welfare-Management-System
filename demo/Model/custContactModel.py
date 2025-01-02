#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="customer":
    data=json.loads(form.getvalue("data"))
    sql="insert into contact values(%s,%s,%s,%s,%s)"
    vals=(None,data['name'],data['email'],data['sub'],data['msgs'])
    result=c.db.setValues(sql,vals)
    print(result)