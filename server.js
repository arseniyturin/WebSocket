'use strict';

const express = require('express');
const websocket = require('ws');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
let clients = {};

// Start Express Server
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

// Start Websocket server
const wss = new websocket.Server({server});

wss.on('connection', handlingClients);

function handlingClients(ws) {

    console.log('Client connected');

    ws.on('message', (data) => {
      if (typeof data == 'string') {
        //handling text data
      } else {
        ws.send(data);
        //let x = (message[1] << 8) + message[0];
        //let y = (message[3] << 8) + message[2];
      }
    });

    ws.on('close', () => {
      console.log('Client Disconnected');
    });

}
