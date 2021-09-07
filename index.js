require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('./router')(app);

const port = process.env.PORT || 3300
const user = process.env.USER
const password = process.env.PASSWORD
const db_name = process.env.DB
const uri = `mongodb+srv://${user}:${password}@cluster0.izid1.mongodb.net/${db_name}?retryWrites=true&w=majority`;

async function initDB() {
    const db = mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true} )
                    .then( () => console.log('Database connected'))
                    .catch(error => console.log(error));

    if(db) { initExpress() };
}

function initExpress() {
    console.log("Iniciando instancia de Express...");
    app.listen(port, () => {
        console.log("El servidor Express esta activo.");
    });

    process.on("SIGINT", closeApp);
    process.on("SIGTERM", closeApp);
}

function closeApp() {
    mongoose.disconnect()
        .then( () => process.exit(0));
}

initDB();