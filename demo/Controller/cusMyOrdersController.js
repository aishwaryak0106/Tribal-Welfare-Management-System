$(function () {
    GetBooking()
})
function deleteitem(id)
{
    if (confirm("Delete This Order ? You will only get 50% cashback")) {
        v =id
        //alert(id)
        data = { "action": "cancel","id":v }
        $.post('Model/bookcancelModel_1.py', data, function (dt) {
           //alert(data);
           GetBooking()
        })
    }
}

function GetBooking() {
    user=localStorage.getItem("cid")

    data = { "action": "mybooking","id":user }
    console.log(data)

    $.post("Model/cusMyOrdersModel.py", data, function (res) {
        //alert(data);
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#stds").html('')
    
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.bookdate + '</td>' +
                    '<td>' + v.cname + '</td>' +
                    '<td>' + v.pname + '</td>' +
                    '<td>' + v.quantity + '</td>' +
                    '<td>' + v.price + '</td>' +
                    '<td>' + '<input type="button" onclick="deleteitem('+v.bid+')" value="REMOVE FROM ORDERS" class="btn  btn-sm btn-outline-danger del">'+'</td></tr>'
                    $("#stds").append(s)
                }) 
            } else {
                         
        }
    })
}