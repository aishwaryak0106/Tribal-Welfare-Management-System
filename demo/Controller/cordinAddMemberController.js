$(function(){
    $('#myForm1').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm1"))
            //alert(data);
            data = { "data": data, "action": "addmember" }
            $.post('Model/cordinAddMemberModel.py', data, function(dt)
             {
                if(dt)
                 {
                    alert("Member Added Sucessfully");
                    console.log(dt);
                    window.location.href="?id=viewMember"
                //location.reload();
                 }
            })
        }
    })
    
})