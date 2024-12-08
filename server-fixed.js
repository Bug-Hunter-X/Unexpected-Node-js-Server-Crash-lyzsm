const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup or graceful shutdown
  server.close(() => {
    console.log('Server closed due to uncaught exception.');
    process.exit(1);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform cleanup or graceful shutdown
  server.close(() => {
    console.log('Server closed due to unhandled rejection.');
    process.exit(1);
  });
});

server.listen(8080);
console.log('Server started on port 8080');