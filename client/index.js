var socket = io.connect('http://localhost:9009');
socket.on('news', function (data) {
    console.log(data);
});