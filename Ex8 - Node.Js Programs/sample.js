/*
Write a Node.js program which fires an event “help”. On firing the event “help”,
the listener “helper” is called which displays a message “Please help me” to the console.
*/

var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("Please help me!");
};

eventEmitter.on("help", connectHandler);

eventEmitter.emit("help");
console.log("Program ends here.");