#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")

from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "selectAll":
    sql = "select pid,pname,img,stock from productdetails where status=1"
    res = conn.db.getJSON(sql)
    print(res)

        

         

