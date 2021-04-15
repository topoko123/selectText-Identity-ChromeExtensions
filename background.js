chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
{
    q = request.q
    u = request.u
    chrome.identity.getAuthToken({
        interactive: true
    }, function(token) {
        if (chrome.runtime.lastError) {
            alert(chrome.runtime.lastError.message);
            return;
        }
        var x = new XMLHttpRequest();
        x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
        x.onload = function() {
            let s = JSON.parse(x.response)
            console.log(s)
            let g_id = s.id;
            let email = s.email;
            let payload = {"q": q, "u": u, "gid": g_id, "em": email};
            console.log(payload);
            var jax = new XMLHttpRequest();
            jax.open("POST","https://xxx.xxxxx.xxx");    // <------ api endpoint -- save to database
            jax.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            sen = JSON.stringify(payload);
            jax.send(sen);
        };
        x.send();
    });
});
