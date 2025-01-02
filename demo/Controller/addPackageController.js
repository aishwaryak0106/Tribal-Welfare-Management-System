$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "pack1" }
            $.post('Model/addPackageModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Package Added Sucessfully");
                     console.log(dt);
                     window.location.href="?id=viewPackage"
                 }
            })
        }
    })

    
})