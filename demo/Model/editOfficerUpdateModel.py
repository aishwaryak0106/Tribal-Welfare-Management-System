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
    sql = "select oname,oaddress,oemail,omobile,ousername,opassword,district from officerdetails where oid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updateofficer":
    data = json.loads(form.getvalue("data"))
    sql ="update officerdetails set oname=%s,oaddress=%s,oemail=%s,omobile=%s,ousername=%s,opassword=%s,district=%s where oid= %s"
    vals =(data["oname"],data["address"],data["email"],data["mob"],data["uname"],data["cpw"],data["dist"],data["oid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

