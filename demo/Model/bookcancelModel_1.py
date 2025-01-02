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
if action == "cancel":
    #data = json.loads(form.getvalue("data"))
    bid=form.getvalue("id")
    sql ="update booking set status=%s,refamnt=(price*50/100),refdate=%s where bid= %s"
    vals =(2,Current_Date,bid)
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}') 