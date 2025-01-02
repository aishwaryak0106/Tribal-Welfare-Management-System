$(function () {
    GetBooks()
})
function GetBooks() {
    
    data = { "action": "getitem" }
    console.log(data)
    $.post("Model/counViewFamilyModel.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.fid + '</td>'+
                    '<td>' + v.hname + '</td>' +
                    '<td>' + v.tname + '</td>' +
                    '<td>' + v.district + '</td>'
                    
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}