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
    sql = "select cname,caddress,cemail,cmobile,cusername,cpassword from councillordetails where cid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updatecouncillor":
    data = json.loads(form.getvalue("data"))
    sql ="update councillordetails set cname=%s,caddress=%s,cemail=%s,cmobile=%s,cusername=%s,cpassword=%s where cid= %s"
    vals =(data["cname"],data["caddress"],data["cemail"],data["mob"],data["uname"],data["cpw"],data["cid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

