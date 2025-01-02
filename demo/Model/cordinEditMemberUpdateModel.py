#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewmember":
    sql = "select left(tribalmembers.dob,10) dob,mname,tname,mgender,edu from tribalmembers where mid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)



        

         

