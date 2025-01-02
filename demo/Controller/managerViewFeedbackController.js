$(function () {
    GetBooking()
})

function GetBooking() {
    
    data = { "action": "getFeedback"}
    console.log(data)
    $.post("Model/managerViewFeedbackModel.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.cname + '</td>' +
                    //'<td>' + v.booking_id + '</td>' +
                    '<td>' + v.pname + '</td>' +
                    '<td>' + v.price + '</td>' +
                    '<td>' + v.feedback + '</td>' +
                    '<td>' + v.feedbackdate + '</td>'
                    //'<td>' +  "<a href='#' id='"+v.bid+"' class='btn  btn-sm btn-outline-danger del'>Shippment</a> &nbsp;&nbsp;&nbsp;"
                    //'<td>' +  "<a href='?id=view_payment&id1=" + v.booking_id +"' class='btn btn-success app' id='" + v.product_name+ "'>PAYMENT</a> &nbsp;&nbsp;&nbsp;"+'</td>' 
                $("#stds").append(s)
            })            
        } else {                     
        }      
    })
}
