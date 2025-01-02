$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        
        $(this).validate()
        if ($(this).valid()) {
            data1=new FormData()
            data1.append('cname',$('#name').val())
            data1.append('cimg', $('#cimg')[0].files[0]);
            data1.append("action","category");
            
            $.ajax({
                url:"Model/addCategoryModel.py",data:data1,type:'POST',contentType: false,
                cache: false,
                processData: false,
                success: function(dt) {
                    
                    alert("Data Inserted Sucessfully");
                    window.location.href="?id=viewCategory"

                   console.log(dt);
                        
                    
                }
            })
        }
    })

})