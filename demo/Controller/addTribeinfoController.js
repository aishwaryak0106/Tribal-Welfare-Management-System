$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "tribe1" }
            $.post('Model/addTribeinfoModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Information Added Sucessfully");
                     console.log(dt);
                     window.location.href="?id=viewTribeinfo"
                //location.reload();
                 }
            })
        }
    })

    
})