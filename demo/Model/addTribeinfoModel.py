#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="tribe1":
    data=json.loads(form.getvalue("data"))
    sql="insert into tribeinfo values(%s,%s,%s,%s)"
    vals=(None,data['tname'],data['tdesc'],1)
    result=c.db.setValues(sql,vals)
    print(result)
