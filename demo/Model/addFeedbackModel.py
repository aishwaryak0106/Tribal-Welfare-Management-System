#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
from lib import SendMail as sm
import datetime
cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")
Current_Date = datetime.datetime.today()
if action == "feedback":
    data = json.loads(form.getvalue("data"))
    vbook=form.getvalue("id")
    sql = "update booking set status=%s, feedback=%s, feedbackdate=%s where bid=%s"
    vals = (5,data["feedb"],Current_Date,vbook)
    res = conn.db.setValues(sql,vals)
    print(res)

elif action == "getFeedback":
    vuser=form.getvalue("id")
    sql = "select left(booking.feedbackdate,10) feedbackdate,booking.bid,customerdetails.cname,productdetails.pname,booking.quantity,booking.price,booking.feedback from customerdetails INNER JOIN (booking INNER JOIN productdetails ON productdetails.pid=booking.pid) ON customerdetails.cid=booking.cid where booking.status=5 and booking.cid=%s"%vuser
    res = conn.db.getJSON(sql)
    print(res)



        

         

