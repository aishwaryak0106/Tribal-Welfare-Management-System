$(function () {
    GetBooks()
})
function GetBooks() {
    
    data = { "action": "getitem" }
    console.log(data)
    $.post("Model/viewDistrictModel.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.did + '</td>'+
                    '<td>' + v.dname + '</td>' 
                    
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}