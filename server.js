const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});








// const io = require('socket.io')(3000)
//////
// const express = require(express); 
// const app = express();
// const http = require('http');
// const server = http.createServer(app); 
// const { Server } = require("socket.io");
// const io = new Server(server);


// const users = {}


// app.get('/', (req, res) => {
//   res.sendFile('/index.html');
// });


// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

//////////////////////////

// io.on('connection', socket => {
//   socket.on('new-user', name => {
//     users[socket.id] = name
//     socket.broadcast.emit('user-connected', name)
   
//   })
//   socket.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       io.emit('chat message', msg);
//     });
//   });

//   socket.on('disconnect', () => {
//     socket.broadcast.emit('user-disconnected', users[socket.id])
//     delete users[socket.id]
//   })

// console.log(msg); 
 

// })


// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

/////////////////////////////////////////////
// io.on('connection', socket => {
//   socket.on('new-user', name => {
//     users[socket.id] = name
//     socket.broadcast.emit('user-connected', name)
//   })
//   socket.on('send-chat-message', message => {
//     socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
//   })
//   socket.on('disconnect', () => {
//     socket.broadcast.emit('user-disconnected', users[socket.id])
//     delete users[socket.id]
//   })
// })

// let app = express() 

// let httpServer = http.Server()

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     // log where we can go to test our GQL API
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });

// // app.use(cors())
// // GraphQLServer.applyMiddleware({ app, path: '/graphql' })

// httpServer.listen(port, async () => { // I don't see your `port`
//   if (process.env.NODE_ENV !== 'production') {
//     console.log('Listening on port ' + port)
//   }
// })


// export default app


