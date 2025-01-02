$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data1=new FormData()
            data1.append('name',$('#ename').val())
            data1.append('edesc',$('#edesc').val())
            data1.append('edate',$('#edate').val())
            data1.append('img', $('#eimg')[0].files[0]);
            data1.append("action","add")
            $.ajax({
                url:"Model/addEventModel.py",data:data1,type:'POST',contentType: false,
                cache: false,
                processData: false,
                success: function(dt) {
                    
                    
                        alert("Data Inserted Sucessfully");
                        console.log(dt);
                        window.location.href="?id=viewEvent"
                    
                }
            })
        }
    })

    
})