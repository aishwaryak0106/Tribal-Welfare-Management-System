$(function(){
    $('#myForm').submit(function(e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "login" }
            $.post('Model/adminLoginModel.py', data, function(dt) {
                //console.log(dt)
                dt = JSON.parse(dt)
               if (dt.length == 0) {
                    $('#msg').addClass('alert-danger')
                    $('#msg').html("Invalid User !!!!")
                    alert("invalid user")
                    
                } else {
                    name1=$('#uname').val()
                    //alert(name1)
                    localStorage.setItem("uname",name1)
                    $.each(dt,function(k,v){
                        aid=v.aid

                    })
                    localStorage.setItem("aid",aid)
                    alert("valid user")
                    location.href = "index_admin1.py?id=adminHome" 
                }
            })
        }
    })
})