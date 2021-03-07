document.addEventListener('mouseup',function(event)
{
    
    var sel = window.getSelection().toString();
    var url = window.location.href
    
    if (sel === "") {
        console.log("Text is Empty!");
    }else{
        chrome.extension.sendRequest({"q": sel, "u": url}, function(response){
            console.log('yes');
        });
    }
    // console.log(payload);
    //  var jax = new XMLHttpRequest();
    //      jax.open("POST","https://abdul.in.th/tools/get");
    //      jax.setRequestHeader("Content-Type","text/plain; charset=UTF-8");
    //      var parse = JSON.stringify(payload)
    //      jax.send(parse);

        //  jax.onreadystatechange = function() { if(jax.readyState==4) { alert(jax.responseText);  }}
 
})