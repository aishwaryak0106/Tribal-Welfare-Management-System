#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewproduct":
    sql = "select * from productdetails where pid = %s and status=1"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)

elif action == "deleteproduct":
    data = json.loads(form.getvalue("data"))
    sql ="update productdetails set status=%s where pid= %s"
    vals =(0,data["id"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')

elif action == "delproduct":
    sql = "delete from booking where bid = %s"% form.getvalue("id")
    res = conn.db.setValues(sql)
    qty=form.getvalue("id1")
    id1=form.getvalue("id2")
    sql1 = "update productdetails set stock=stock+%s where pid=%s"
    vals1 = (qty,id1)
    res = conn.db.setValues(sql1, vals1)
    print('{"success": 1}')
    #print(res) 
