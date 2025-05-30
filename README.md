# Real-Time Dashboard Advanced

This is an advanced real-time dashboard example using Socket.IO with Redis Adapter.

## Features
- Uses the new `@socket.io/redis-adapter` package (migrated from deprecated `socket.io-redis`)
- Redis v4 client usage with async connect
- Basic Socket.IO connection and message broadcast

## How to run
1. Make sure you have Redis server running locally on port 6379.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.

## Notes
- The project fixes previous vulnerabilities related to the old `debug` package.
- Replace or extend socket event handlers in `server.js` as needed.
