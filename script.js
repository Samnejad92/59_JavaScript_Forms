(function() {
"use strict";
var state=document.getElementById('s-state');
document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('cart-hplus')
    .addEventListener('submit',function(event){
        event.preventDefault();
        if(document.getElementById('s-state').value===''){
            alert('Choose state');
            document.getElementById('s-state').focus();
        }
    });
    var btn=document.getElementById('btn-estimate');
    btn.disabled=true;
    document.getElementById('s-state').addEventListener('change',function(){
        if(document.getElementById('s-state').value===''){
            document.getElementById('btn-estimate').disabled=true;
        }else{
            document.getElementById('btn-estimate').disabled=false;
        }
    });
});
	
	
})();
