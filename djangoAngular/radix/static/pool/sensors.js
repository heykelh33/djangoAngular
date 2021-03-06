$(function() {
    // When we're using HTTPS, use WSS too.
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://' + window.location.host + "/radix/");

    chatsock.onopen = function() {
           console.log("Connectado con WebSocket! ");
           $('#sensor').text("Connected!");
           chatsock.send("Connected!");
    };

    chatsock.onmessage = function(message) {
        console.log("sensor.js: Received Sock message! "+ message.data);
        //console.log(message.data);
        $('#sensor').text(message.data);
    };

    if (chatsock.readyState == WebSocket.OPEN) {
      chatsock.onopen();
    }

    
});
