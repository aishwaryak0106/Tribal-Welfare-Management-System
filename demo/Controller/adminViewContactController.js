$(function () {
    GetBooking()
})

function GetBooking() {
    
    data = { "action": "getContact"}
    console.log(data)
    $.post("Model/managerViewFeedbackModel.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.name + '</td>' +
                    //'<td>' + v.booking_id + '</td>' +
                    '<td>' + v.email + '</td>' +
                    '<td>' + v.subject + '</td>' +
                    '<td>' + v.message + '</td>'
                    //'<td>' +  "<a href='#' id='"+v.bid+"' class='btn  btn-sm btn-outline-danger del'>Shippment</a> &nbsp;&nbsp;&nbsp;"
                    //'<td>' +  "<a href='?id=view_payment&id1=" + v.booking_id +"' class='btn btn-success app' id='" + v.product_name+ "'>PAYMENT</a> &nbsp;&nbsp;&nbsp;"+'</td>' 
                $("#stds").append(s)
            })            
        } else {                     
        }      
    })
}
