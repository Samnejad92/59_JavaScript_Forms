(function() {
"use strict";
	document.getElementById('cart-hplus')
    .addEventListener('submit',function(event){
        event.preventDefault();
        if(document.getElementById('s-state').value===''){
            alert('Choose state');
            document.getElementById('s-state').focus();
        }
    })();
	
	
})();
