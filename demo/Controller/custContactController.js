$(function(){
    //alert("hai");
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            //alert(data);
            data = { "data": data, "action": "customer" }
            $.post('Model/custContactModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Message Sended Sucessfully");
                     //window.location.href(?id=view_category)
                     console.log(dt);
                //location.reload();
                 }
                 window.location = "index_cust.py";
            })
        }
    })

    
})