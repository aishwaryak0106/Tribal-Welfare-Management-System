#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewofficer":
    sql = "select * from officerdetails where oid = %s and status=1"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)

elif action == "deleteofficer":
    data = json.loads(form.getvalue("data"))
    sql ="update officerdetails set status=%s where oid= %s"
    vals =(0,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

