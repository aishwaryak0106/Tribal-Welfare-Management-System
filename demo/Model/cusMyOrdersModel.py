#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "mybooking":
    vuser=form.getvalue("id") 
    #sql = "select left(booking.booking_date,10) booking_date,customer.name,product.product_name,booking.quantity,booking.price from customer INNER JOIN (booking INNER JOIN product ON product.product_id=booking.product_id) ON customer.cust_id=booking.cust_id"
    sql = "select left(booking.bookdate,10) bookdate,customerdetails.cname,productdetails.pname,booking.bid,booking.quantity,booking.price from customerdetails INNER JOIN (booking INNER JOIN productdetails ON productdetails.pid=booking.pid) ON customerdetails.cid=booking.cid where booking.status=1 and booking.cid=%s"%vuser 
    res = c.db.getJSON(sql)
    print(res)