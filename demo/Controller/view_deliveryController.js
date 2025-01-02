$(function () {
    GetBooking()
    
})

function deleteitem(id)
{
    data = getFormData($("#myForm"))
    
            localStorage.setItem("bid",id)

            alert("Entry Feedback..!")
            location.href = "index_cust2.py?id=addFeedback" 

}

function GetBooking() {
    user=localStorage.getItem("cid")
    
    data = { "action": "getdetails","id":user }
    console.log(data)
    
    $.post("Model/view_deliveryModel.py", data, function (res) {
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
                    '<td>' + v.shipdate + '</td>' +
                    '<td>' + v.deliverydate + '</td>' +
                    '<td>' + '<input type="button" onclick="deleteitem('+v.bid+')" value="ADD FEEDBACK" class="btn btn-success del">'+'</td></tr>'

                $("#stds").append(s)
            }) 
        } else {
                     
        }
        
      
    })
}