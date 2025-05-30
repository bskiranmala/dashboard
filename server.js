const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');

app.use(express.static('public'));

const io = new Server(httpServer);

const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (msg) => {
      console.log('Received message:', msg);
      socket.broadcast.emit('message', msg);
    });
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
