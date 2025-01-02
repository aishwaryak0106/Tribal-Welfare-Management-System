#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm
import datetime

cgitb.enable()
Current_Date = datetime.datetime.today()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewproduct":
    sql = "select * from productdetails where pid = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "bookproduct":
    data = json.loads(form.getvalue("data"))
    vuser=form.getvalue("id")
    sql ="insert into booking(bid,bookdate,cid,pid,quantity,price,status) values(%s,%s,%s,%s,%s,%s,%s)"
    vals =(None,Current_Date,vuser,data['pid'],data['quantity'],data['oprice'],0)
    res = conn.db.setValues(sql, vals)
    sql1 = "update productdetails set stock=stock-%s where pid=%s"
    vals1 = (data['quantity'],data['pid'])
    res = conn.db.setValues(sql1, vals1)
    print('{"success": 1}')

    


        
  






    

         

