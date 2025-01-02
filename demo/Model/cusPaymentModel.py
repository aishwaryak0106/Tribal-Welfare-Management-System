#!c:\python\python
import cgi, cgitb, json, os
print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm
#import datetime

cgitb.enable()
#Current_Date = datetime.datetime.today()
form = cgi.FieldStorage()
action = form.getvalue("action")
if action == "payment":
    vuser=form.getvalue("id") 
    data = json.loads(form.getvalue("data"))
    sql ="update booking set status=1 where cid= %s"%vuser
    #vals =(3,Current_Date,data["id"])
    res = conn.db.setValues(sql)
    print('{"success": 1}')      