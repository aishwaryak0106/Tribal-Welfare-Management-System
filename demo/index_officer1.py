#!c:\python\python
import cgi, cgitb
print("Content-type: text/html\n\n")
cgitb.enable()

form = cgi.FieldStorage()

with open("templates/Officer/header.html", "r") as cfile:
    header = cfile.read()
print(header)

page =""

if form.getvalue("id", 0) == 0:
    page = "officer/index"
else:
    page = form.getvalue("id")
    page = "officer/"+ page


with open("View/" + page +  ".html", "r") as cfile:
    content = cfile.read()
print(content)


# Footer
with open("templates/Officer/footer.html", "r") as cfile:
    footer = cfile.read()
print(footer)
