var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
}).listen(3000);

var io = socketio.listen(server);

var chat = io.of('/chat').on('connection', (socket) => {
    var room = '';
    var name = '';

    socket.on('client_to_server_join', (data) => {
        room = data.value;
        socket.join(room);
    });

    socket.on('client_to_server', (data) => {
        chat.to(room).emit('server_to_client', {value: data.value});
    });

    socket.on('client_to_server_broadcast', (data) => {
        socket.broadcast.to(room).emit('server_to_client', {value: data.value});
    });

    socket.on('client_to_server_personal', (data) => {
        var id = socket.id;
        name = data.value;
        var personalMessage = "あなたは、" + name + "さんとして入室しました。"
        chat.to(id).emit('server_to_client', {value: personalMessage})
    });

    socket.on('disconnect', () => {
        if (name == '') {
            console.log("未入室のまま、どこかへ去っていきました。");
        } else {
            var endMessage = name + "さんが退出しました。"
            chat.to(room).emit('server_to_client', {value : endMessage})
        }
    });
});

var fortune = io.of('/fortune').on('connection', (socket) => {
    var id = socket.id;
    var fortunes = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
    var seletedFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    var todaysFortune = "今日のあなたの運勢は…" + seletedFortune + " です。";
    fortune.to(id).emit('server_to_client', {value : todaysFortune});
})