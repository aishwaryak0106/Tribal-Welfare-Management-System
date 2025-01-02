$(function () {
    v = location.href.split("=")[2]
    $('#pid').val(v)

    data = { "action": "viewproduct","id":v }
    $.post('Model/bookProductModel.py', data, function (dt) {
        res = JSON.parse(dt)
        //alert(dt)
        $.each(res, function (k, v) {
            $('#pname').val(v.pname)
            $('#price').val(v.price)
            $('#oprice').val(v.offer)            

        })
    })

    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            //alert(data)

            user=localStorage.getItem("cid")
            //alert(user);
            data = { "data": data, "action": "bookproduct", "id":user }
            //alert(data);
            $.post('Model/bookProductModel.py', data, function (dt) {
                //alert(dt);
                $('#msg').addClass('alert-danger')
                $('#msg').html("Booking Successful !!!!")
                window.location = "index_cust2.py?id=view_booking";
            })
        }
    })

})