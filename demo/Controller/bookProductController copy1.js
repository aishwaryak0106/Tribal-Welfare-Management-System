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
        data = getFormData($("#myForm"))

        q=document.getElementById("quantity").value
        data = { "data": data, "action": "bookitemcheck" }
        $.post('Model/bookcheckModel.py', data, function (dt) {
            dt = JSON.parse(dt)
            s = ""
            $.each(dt, function (k, v) {
                //alert(v.product_q)    
                if(v.stock<q)
                {
                    alert("Insufficient..!")
                    flag=0
                    window.location="index_cust2.py?id=view_category"
                }
            })
        })
        alert(flag)
        if(flag==1)
        alert(flag)
        {
            if ($(this).valid()) {
                data = getFormData($("#myForm"))
                
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
        }
    })

})