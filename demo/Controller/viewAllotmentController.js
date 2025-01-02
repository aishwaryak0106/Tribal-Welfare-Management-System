$(function () {
    GetBooks()
})
function GetBooks() {
    
    data = { "action": "getitem" }
    console.log(data)
    $.post("Model/viewAllotmentModel.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.pdate + '</td>'+
                    '<td>' + v.package + '</td>'+
                    '<td>' + v.district + '</td>'                     
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}