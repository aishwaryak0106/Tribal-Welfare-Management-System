#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="dist1":
    data=json.loads(form.getvalue("data"))
    sql="insert into district values(%s,%s)"
    vals=(None,data['dname'])
    result=c.db.setValues(sql,vals)
    print(result)
