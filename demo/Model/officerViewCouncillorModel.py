#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")

from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "selectAll":
    sql = "select cid,cname,cmobile from councillordetails where status=1"
    res = conn.db.getJSON(sql)
    print(res)

        

         

