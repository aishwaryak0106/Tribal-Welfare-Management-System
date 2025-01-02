#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="emp1":
    data=json.loads(form.getvalue("data"))
    sql="insert into employee values(%s,%s,%s,%s,%s)"
    vals=(None,data['ename'],data['eage'],data['eaddress'],data['esalary'])
    result=c.db.setValues(sql,vals)
    print(result)
