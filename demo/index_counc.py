#!c:\python\python
import cgi, cgitb
print("Content-type: text/html\n\n")
cgitb.enable()

form = cgi.FieldStorage()

with open("templates/Councillor/abheader.html", "r") as cfile:
    header = cfile.read()
print(header)

page =""

if form.getvalue("id", 0) == 0:
    page = "councillor/councLogin"
else:
    page = form.getvalue("id")
    page = "councillor/"+ page


with open("View/" + page +  ".html", "r") as cfile:
    content = cfile.read()
print(content)


# Footer
with open("templates/Councillor/footer.html", "r") as cfile:
    footer = cfile.read()
print(footer)
