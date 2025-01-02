$(function () {
    GetBooking()
    
    $("#pay").click(function () { 
        window.location = "index_cust2.py?id=custPayment";
    });
    $("#add").click(function () { 
        window.location = "index_cust2.py?id=view_category";
    });
})

function deleteitem(id)
{
    if (confirm("Delete This item ? ")) {
        v =id
        //alert(id)

        data = { "data": data, "action": "getqty", "id":v }
        //alert("hai");
        //alert(data);
        $.post('Model/getQuantityModel.py', data, function (dt) {
            dt= JSON.parse(dt)
            $.each(dt, function (k, v) {
                //alert("hai")
                qty=v.quantity
                id1=v.pid
                //alert(qty);
                //alert(id1);
            })
            
            data = { "action": "delproduct","id":v, "id1":qty, "id2":id1} 
            //alert("hai");
            $.post('Model/editProductDeleteModel.py', data, function (dt) {
                //alert(dt);          
                GetBooking()
            })
        })
    }
}

function GetBooking() {
    user=localStorage.getItem("cid")
    
    data = { "action": "getdetails","id":user }
    console.log(data)
    
    $.post("Model/custViewBooking.py", data, function (res) {
        //alert(data)
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
                    '<td>' + '<input type="button" onclick="deleteitem('+v.bid+')" value="delete" class="btn  btn-sm btn-outline-danger del">'+'</td></tr>'                    
                $("#stds").append(s)
            }) 
        } else {
                     
        }
        
      
    })
}