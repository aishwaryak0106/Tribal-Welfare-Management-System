$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            //alert(data);
            data = { "data": data, "action": "addcordin" }
            $.post('Model/counAddCordinModel.py', data, function(dt)
             {
                if(dt)
                 {
                    alert("Coodrinator Added Sucessfully");
                    console.log(dt);
                //location.reload();
                 }
                 location.href = "index_counc11.py?id=viewCoordinator"
            })
        }
    })
    
})