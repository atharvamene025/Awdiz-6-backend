const EventEmitter =require("events");

const event =new EventEmitter();


const handlerFunction = () => {
    console.log("Used Event Handler succesfully");
};

const byeEventhandlerFunction = () =>{

    console.log("Bye Event Handler Function");
}
// create Event
event.on("HelloEvent", handlerFunction);

// emit (call) event
event.emit("HelloEvent");

event.on("byeEvent", byeEventhandlerFunction);

event.emit("byeEvent");

