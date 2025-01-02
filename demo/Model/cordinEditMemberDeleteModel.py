#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "deletemember":
    data = json.loads(form.getvalue("data"))
    sql ="update tribalmembers set status=%s where mid= %s"
    vals =(0,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')



        

         

