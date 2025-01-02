$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data1=new FormData()
            data1.append('pname',$('#pname').val())
            data1.append('cat',$('#cat').val())
            data1.append('price',$('#price').val())
            data1.append('oprice',$('#oprice').val())
            data1.append('qty',$('#qty').val())
            data1.append('pimg', $('#pimg')[0].files[0]);
            data1.append("action","addproduct")
            $.ajax({
                url:"Model/addProductModel.py",data:data1,type:'POST',contentType: false,
                cache: false,
                processData: false,
                success: function(dt) {
                    
                    
                        alert("Product Added Sucessfully");
                
                        console.log(dt);
                        window.location.href="?id=viewProducts"
                        //location.reload();
                    
                }
            })
        }
    })

    
})