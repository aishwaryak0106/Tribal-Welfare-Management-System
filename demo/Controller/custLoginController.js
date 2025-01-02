$(function(){
    $('#myForm').submit(function(e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "login" }
            $.post('Model/custLoginModel.py', data, function(dt) {
                dt = JSON.parse(dt)
               
               if (dt.length == 0) {
                    $('#msg').addClass('alert-danger')
                    $('#msg').html("Invalid User !!!!")
                    alert("Invalid User")
                    
                } else {
                    name1=$('#uname').val()
                    //alert(name1)
                    localStorage.setItem("uname",name1)
                    $.each(dt,function(k,v){
                      cid=v.cid

                    })
                    //alert(lid)
                    localStorage.setItem("cid",cid)
                   
                    alert("Valid User")
                    window.location = "index_cust2.py?id=index_1";
                }
            })
        }
    })
})