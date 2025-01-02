$(function()
{
    data = { 'action': 'item1' }
    $.post('Model/category.py', data, function(dt) {
    res=JSON.parse(dt)
    cd="<option value='' selected disabled> Select </option>"
    $.each(res,function(k,v){
       cd+='<option value="'+v.cid+'">'+v.cname+'</option>' 
    }) 
    $('#cat').html(cd)   
    })

})