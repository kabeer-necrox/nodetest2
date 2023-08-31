const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Node.js server is running!');
});

// Define the port on which the server will listen
const port = 3003;

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
