#!c:\python\python
import cgi, cgitb, json, os
import datetime
c_d=datetime.datetime.today()

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewpackage":
    sql = "select pname,pdesc from packagedetails where pid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updatepackage":
    data = json.loads(form.getvalue("data"))
    sql ="update packagedetails set pname=%s,pdesc=%s,paddedate=%s where pid= %s"
    vals =(data["pname"],data["pdesc"],c_d,data["pid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

