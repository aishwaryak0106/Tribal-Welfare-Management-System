#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewcouncillor":
    sql = "select * from councillordetails where cid = %s and status=1"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)

elif action == "deletecouncillor":
    data = json.loads(form.getvalue("data"))
    sql ="update councillordetails set status=%s where cid= %s"
    vals =(0,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

