#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewmanager":
    sql = "select mname,mnaddress,mnemail,mnmobile,mnusername,mnpassword from managerdetails where mnid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updatemanager":
    data = json.loads(form.getvalue("data"))
    sql ="update managerdetails set mname=%s,mnaddress=%s,mnemail=%s,mnmobile=%s,mnusername=%s,mnpassword=%s where mnid= %s"
    vals =(data["mname"],data["address"],data["email"],data["mob"],data["uname"],data["cpw"],data["mnid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

