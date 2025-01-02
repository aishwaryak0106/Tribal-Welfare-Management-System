$(function () {
    GetBooking()
})

function GetBooking() {
    
    data = { "action": "getbooking"}
    console.log(data)
    $.post("Model/managerViewBookingModel.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.bookdate + '</td>' +
                    //'<td>' + v.booking_id + '</td>' +
                    '<td>' + v.cname + '</td>' +
                    '<td>' + v.pname + '</td>' +
                    '<td>' + v.quantity + '</td>' +
                    '<td>' + v.price + '</td>' +
                    '<td>' +  "<a href='#' id='"+v.bid+"' class='btn  btn-sm btn-outline-danger del'>Shippment</a> &nbsp;&nbsp;&nbsp;"
                    //'<td>' +  "<a href='?id=view_payment&id1=" + v.booking_id +"' class='btn btn-success app' id='" + v.product_name+ "'>PAYMENT</a> &nbsp;&nbsp;&nbsp;"+'</td>' 
                $("#stds").append(s)
            })
            $('#mainContent').html(s)
            $('.del').click(function (e) {
                e.preventDefault()
                if (confirm("Ship This Product!!!")) {
                    v = $(this).attr('id')
                    data = { "id": v }
                    data = JSON.stringify(data)
                    data = { "data": data, "action": "shippment" }
                    $.post('Model/managerShippmentModel.py', data, function (dt) {
                        showDetails()
                    })
                }
                window.location = "index_manager1.py?id=managerViewBooking";
            })            
        } else {                     
        }      
    })
}
