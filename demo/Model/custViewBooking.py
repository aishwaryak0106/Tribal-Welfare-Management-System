#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getdetails":  
    vuser=form.getvalue("id")  
    sql="select left(booking.bookdate,10) bookdate,booking.bid,customerdetails.cname,productdetails.pname,booking.quantity,booking.price from customerdetails INNER JOIN (booking INNER JOIN productdetails ON productdetails.pid=booking.pid) ON customerdetails.cid=booking.cid where booking.status=0 and booking.cid=%s"%vuser
    res = c.db.getJSON(sql)
    print(res)  