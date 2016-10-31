'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route(
  {
    method: ['GET', 'POST'],
    path:'/api/wifi/ap',
    handler: function (request, reply) {
      const method = request.method
      const payload = request.payload
      if (method === "post") {
        console.log(payload)
        let json = {status: 'failed'}
        return reply(JSON.stringify(json));
      }
      else if (method === "get") {
        let json = {'ssid': "THIS IS SSID", 'password': 'THIS IS PASSWORD'}
        return reply(JSON.stringify(json));
      }
      else {
        return replay("not implemented.")
      }
    },
});
server.route(
  {
    method: ['GET', 'POST'],
    path:'/api/wifi/sta',
    handler: function (request, reply) {
        let json = {status: false}
        return reply(JSON.stringify(json));
    },
});
server.route(
  {
    method: ['GET'],
    path:'/api/wifi',
    handler: function (request, reply) {
      let list = [
        [{name: 'Nat1'}, {name: ' ...@Pinn Creative Space 1'}],
        [{name: 'Jaylin Alexis'}, {name: 'Stanley'}],
        [{name: 'Denzel'}, {name: 'Evelyn'}],
        [{name: 'Sigmund Jaylin'}, {name: 'Christopher Clint'}],
        [{name: 'Baxter Windsor'}, {name: 'Windsor Clinton'}],
        [{name: 'Kurtis Barnaby Reginald'}, {name: 'Nevil James Baz'}],
        [{name: 'Bud Jemmy Paulie'}, {name: 'Julian Nigellus Devin'}]
      ]
      let idx = parseInt((Math.random()*100))%list.length
        return reply(JSON.stringify(list[idx]));
    },
});


// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
