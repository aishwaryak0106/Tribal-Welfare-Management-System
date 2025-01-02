$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "dist1" }
            $.post('Model/addDistrictModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("District Added Sucessfully");
                     console.log(dt);
                     window.location.href="?id=viewDistrict"
                 }
            })
        }
    })    
})