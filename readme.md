# Node.js WebSocket Example

This app creates a persistent connection with the node server. Once you're connected to the server your browser track mouse coordinates and sends them to the server. When server receives coordinates it immediately sends them back to your browser. You can see coordinates in the little window.

## What is WebSocket?

[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) is a technology that makes it possible to create two-way interactive session between user's browser and a server. It's a part of every modern browsers' API.

`const ws = new WebSocket('ws://hostname:port')`

## Ways to Try
### 1. [Click here](https://arseniy-websocket.herokuapp.com)

### 2. Deploy to Heroku
This project could be easily deployed to Heroku. Fork it, create new projects in your Heroku account and deploy it from your GitHub account or just click a button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### 3. Run on Local Machine (macOS)

1. Install Node.js on your machine
2. Open terminal, go to the project directory
3. Type `> npm install ws express`
4. Type `> node server.js`
5. Open [http://localhost:3000](http://localhost:3000)


