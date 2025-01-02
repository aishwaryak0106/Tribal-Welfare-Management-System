$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            //alert(data);
            data = { "data": data, "action": "addcouncil" }
            $.post('Model/officerAddCouncillorModel.py', data, function(dt)
             {
                if(dt)
                 {
                    alert("Councillor Addedd Sucessfully");
                    console.log(dt);
                    window.location.href="?id=viewCouncillor"
                //location.reload();
                 }
            })
        }
    })
    
})