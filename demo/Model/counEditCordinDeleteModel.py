#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewcordin":
    sql = "select * from coordinator where coid = %s and status=1"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)

elif action == "deletecordin":
    data = json.loads(form.getvalue("data"))
    sql ="update coordinator set status=%s where coid= %s"
    vals =(0,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

