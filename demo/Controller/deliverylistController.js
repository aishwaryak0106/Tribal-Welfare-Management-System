$(function () {
    $("#add_div").hide()
    $("#msg").hide()

    $("#myform").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            $("#add_div").hide()
            $("#msg").hide()
            
            data = {"date1":$("#fdate").val(),"date2":$("#todate").val()}
            data = { "action": "report" ,"data":JSON.stringify(data)}
            //data = { "action": "UserFlight" }
            $.post("Model/deliverylistModel.py", data,
                function (res) {
                    res = JSON.parse(res)
                    if(res.length>0){
                        $("#add_div").show()
                        $("#msg").hide()
                    x = 1
                    s = ''
                    $.each(res, function (k, v) {
                        s += '<tr>' +
                            '<td>' + x + '</td>' +
                            '<td>' + v.cname + '</td>' +
                            '<td>' + v.deliverydate + '</td>' +
                            '<td>' + v.pname + '</td>' +
                            '<td>' + v.quantity + '</td>' +
                            '<td>' + v.price + '</td>' 
                        '</tr>'
                        x++
                    });
                    $("#tb").html(s)
                }else{
                    $("#add_div").hide()
                    $('#msg').show()
                }
                }
            );
        }
    });

})