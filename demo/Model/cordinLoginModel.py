#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")
if action == "login":
    data = json.loads(form.getvalue("data"))
    sql = "select coemail from coordinator where coemail = %s and copassword = %s"
    vals = (data["uname"], data["passwd"])
    #res = json.loads(conn.db.getJSON(sql, vals))
    res =conn.db.getJSON(sql, vals)
    print(res)   
    
    
         

