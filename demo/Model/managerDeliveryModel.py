#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getbooking":
    sql = "select left(booking.bookdate,10) bookdate,customerdetails.cname,productdetails.pname,booking.bid,booking.quantity,booking.price,left(booking.shipdate,10) shipdate from customerdetails INNER JOIN (booking INNER JOIN productdetails ON productdetails.pid=booking.pid) ON customerdetails.cid=booking.cid where booking.status=3"
    res = c.db.getJSON(sql)
    print(res)


  