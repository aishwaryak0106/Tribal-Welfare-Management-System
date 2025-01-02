$(function(){
    user=localStorage.getItem("cid")
    data = { "action": "viewPrice","id":user}
    $.post('Model/custPayTotModel.py', data, function (dt) 
    {
        //alert(dt)

       dt= JSON.parse(dt)
        //alert(dt)
        s=0;
       $.each(dt, function (k, v) {
       tot=v.price*v.quantity
       s=s+tot;
    })
        $('#amo').val(s)
    })

    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            user=localStorage.getItem("cid")
            data = { "data": data, "action": "payment", "id":user }
            $.post('Model/cusPaymentModel.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Payed Sucessfully");
                     window.location = "index_cust2.py?id=cusMyOrders";
                 }
            })
        }
    })    
})