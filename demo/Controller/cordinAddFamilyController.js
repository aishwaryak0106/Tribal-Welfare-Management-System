$(function(){
    $('#myForm1').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm1"))
            //alert(data);
            data = { "data": data, "action": "addfamily" }
            $.post('Model/cordinAddFamilyModel.py', data, function(dt)
             {
                if(dt)
                 {
                    alert("Family Added Sucessfully");
                    console.log(dt);
                    window.location.href="?id=viewFamily"
                //location.reload();
                 }
            })
        }
    })
    
})