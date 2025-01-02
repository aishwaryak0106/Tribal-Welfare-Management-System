#!c:\python\python
import cgi, cgitb, json, os
print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm
import datetime

cgitb.enable()
Current_Date = datetime.datetime.today()
form = cgi.FieldStorage()
action = form.getvalue("action")
if action == "shippment":
    data = json.loads(form.getvalue("data"))
    sql ="update booking set status=%s,shipdate=%s where bid= %s"
    vals =(3,Current_Date,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}') 
elif action == "delivery":
    data = json.loads(form.getvalue("data"))
    sql ="update booking set status=%s,deliverydate=%s where bid= %s"
    vals =(4,Current_Date,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')          