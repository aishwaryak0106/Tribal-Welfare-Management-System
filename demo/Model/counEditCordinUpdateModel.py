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
    sql = "select coname,coaddress,coemail,comobile,cousername,copassword from coordinator where coid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updatecordin":
    data = json.loads(form.getvalue("data"))
    sql ="update coordinator set coname=%s,coaddress=%s,coemail=%s,comobile=%s,cousername=%s,copassword=%s where coid= %s"
    vals =(data["cname"],data["caddress"],data["cemail"],data["mob"],data["uname"],data["cpw"],data["coid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

