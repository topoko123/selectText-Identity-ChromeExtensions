document.addEventListener('mouseup', (event) => {       //เข้าถึงหน้า HTML และทำการรับค่าจากเมาส์
    let keys = [];

    if (event.shiftKey){               
        keys.push('shift');
        var txt = window.getSelection().toString();     
        var url = window.location.href;
        if(txt !== ""){
            chrome.extension.sendRequest({"q": txt, "u": url}, (response) => {
                console.table(response)
            })
        }
    }
})