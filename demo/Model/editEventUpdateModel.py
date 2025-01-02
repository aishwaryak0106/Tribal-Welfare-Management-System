#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewevent":
    sql = "select left(eventdetails.addedate,10) addedate,ename,edesc from eventdetails where eid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updateevent":
    data = json.loads(form.getvalue("data"))
    eid = form.getvalue("id")
    sql ="update eventdetails set ename=%s,edesc=%s,addedate=%s where eid= %s"
    vals =(data["ename"],data["edesc"],data["edate"],eid)
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

