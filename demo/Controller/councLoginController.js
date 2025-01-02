$(function(){
    $('#myForm').submit(function(e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "login" }
            $.post('Model/councLoginModel.py', data, function(dt) {
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
                        cid=v.cid

                    })
                    //alert(lid)
                    localStorage.setItem("cid",cid)
                    alert("valid user")
                    location.href = "index_counc1.py?id=councHome" 
                }
            })
        }
    })
})