#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="addfamily":
    data=json.loads(form.getvalue("data"))
    sql="insert into tribefamily values(%s,%s,%s,%s)"
    vals=(None,data['hname'],data['comm'],data['dist'])
    result=c.db.setValues(sql,vals)
    print(result)
