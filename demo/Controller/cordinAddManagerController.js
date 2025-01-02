$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            //alert(data);
            data = { "data": data, "action": "addmanager" }
            $.post('Model/cordinAddManagerModel.py', data, function(dt)
             {
                if(dt)
                 {
                    alert("Manager Added Sucessfully");
                    console.log(dt);
                //location.reload();
                 }
                 window.location.href="?id=viewManager"
            })
        }
    })
    
})