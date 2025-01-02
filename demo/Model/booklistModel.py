#!python
import cgi, cgitb, json, os
print("Content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")
if action == "report":
    data = json.loads(form.getvalue("data"))
    sql = "select left(booking.bookdate,10) bookdate,booking.bid,customerdetails.cname,productdetails.pname,booking.quantity,booking.price from customerdetails INNER JOIN (booking INNER JOIN productdetails ON productdetails.pid=booking.pid) ON customerdetails.cid=booking.cid where booking.bookdate between '%s' and  '%s'" % (data['date1'],data['date2'])
    res = conn.db.getJSON(sql)
    print(res)
