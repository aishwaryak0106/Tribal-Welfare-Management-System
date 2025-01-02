#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getFeedback":
    sql = "select left(booking.feedbackdate,10) feedbackdate,customerdetails.cname,productdetails.pname,booking.bid,booking.price,booking.feedback from customerdetails INNER JOIN (booking INNER JOIN productdetails ON productdetails.pid=booking.pid) ON customerdetails.cid=booking.cid where booking.status=5"
    res = c.db.getJSON(sql)
    print(res)
elif action == "getContact":
    sql = "select * from contact"
    res = c.db.getJSON(sql)
    print(res)


  