#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewtribeinfo":
    sql = "select tname,tinfo from tribeinfo where tid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updatetribeinfo":
    data = json.loads(form.getvalue("data"))
    sql ="update tribeinfo set tname=%s,tinfo=%s where tid= %s"
    vals =(data["tname"],data["tdesc"],data["tid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

