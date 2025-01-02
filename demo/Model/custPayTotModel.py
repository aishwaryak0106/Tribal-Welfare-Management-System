#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")

from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewPrice":
    vuser=form.getvalue("id")
    sql = "select price,quantity from booking where status=0 and cid =%s"%vuser
    res = conn.db.getJSON(sql)
    print(res)

        

         

