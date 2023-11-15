// WebSockets provide a full-duplex, bidirectional communication channel over a single TCP connection, enabling real-time communication between clients and servers.

// **Example 1: Connecting to a WebSocket Server**
// Creating a WebSocket client to connect to a server.

const socket = new WebSocket("ws://example.com/socket");

// Handling WebSocket events
socket.addEventListener("open", (event) => {
  console.log("Connected to the server");
});

socket.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});

socket.addEventListener("close", (event) => {
  console.log("Connection closed");
});

// Sending a message to the server
socket.send("Hello, server!");

// Explanation: The client connects to a WebSocket server and handles events like "open," "message," and "close."

// **Example 2: WebSocket Echo Server**
// Creating a simple WebSocket server that echoes messages back to clients.

const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    
    // Echoing the received message back to the client
    socket.send(`Server: ${message}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

// Explanation: This code sets up a WebSocket server that echoes messages sent by clients.

// **Example 3: Real-Time Chat Application**
// Building a real-time chat application using WebSockets.

// Client-side JavaScript
const socket2 = new WebSocket("ws://example.com/chat");

socket2.addEventListener("message", (event) => {
  // Displaying messages in the chat interface
  const message = event.data;
  displayMessage(message);
});

// Handling user input and sending messages
function sendMessage(message) {
  socket2.send(message);
}

// Server-side WebSocket handling (Node.js)
const WebSocket = require("ws");
const server2 = new WebSocket.Server({ port: 8080 });

const clients = new Set();

server2.on("connection", (socket) => {
  console.log("Client connected");
  clients.add(socket);

  socket2.on("message", (message) => {
    // Broadcasting the message to all connected clients
    clients.forEach((client) => {
      if (client !== socket) {
        client.send(message);
      }
    });
  });

  socket2.on("close", () => {
    console.log("Client disconnected");
    clients.delete(socket);
  });
});

// Explanation: This example demonstrates a basic real-time chat application using WebSockets.

// In Summary:
// - WebSockets enable real-time, bidirectional communication between clients and servers.
// - They provide events like "open," "message," and "close" for handling connections and data exchange.
// - WebSockets can be used for various real-time applications, including chat, notifications, and online games.
