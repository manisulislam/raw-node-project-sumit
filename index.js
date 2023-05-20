/*
title: raw node project
description: A restfull api monitoring up and down time user defind link
author: anisul islam
date: 20/5/23

*/

//dependencies
const http = require("http");

//app object = module scafoulding
const app = {};

//configuration
app.config={
    port: 3000
};

// create server
app.createserver=()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening port is ${app.config.port}`)
    })
}
//handle request and response
app.handleReqRes=(req, res)=>{
    //response handle
    res.end("hello world");


}

//start the sever
app.createserver()