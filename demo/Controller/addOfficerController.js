$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "addoff" }
            $.post('Model/addOfficerModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Officer Added Sucessfully");
                     console.log(dt);
                     window.location.href="?id=viewOfficer"
                 }
            })
        }
    })
    
})