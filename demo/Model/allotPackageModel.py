#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
import datetime
print("Content-type: text/html\n\n")
cgitb.enable()
Current_Date = datetime.datetime.today()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="addpack":
    data=json.loads(form.getvalue("data"))
    sql="insert into allotpackage values(%s,%s,%s,%s)"
    vals=(None,data['pname'],data['dist'],Current_Date)
    result=c.db.setValues(sql,vals)
    print(result)
