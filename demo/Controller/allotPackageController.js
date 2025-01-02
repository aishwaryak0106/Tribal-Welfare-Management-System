$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "addpack" }
            $.post('Model/allotPackageModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Package Alloted Sucessfully");
                     console.log(dt);
                     window.location.href="?id=viewallotment"
                 }
            })
        }
    })
    
})