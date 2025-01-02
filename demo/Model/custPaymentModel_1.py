#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")

from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "payment":
    vuser=form.getvalue("id")
    sql = "update booking set status=1 where  cid=1"
    res = conn.db.getJSON(sql)
    print(res)



        

         

