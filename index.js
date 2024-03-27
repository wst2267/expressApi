const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const helmet = require('helmet')
const functions = require('firebase-functions')
const { LibraryController } = require('./src/controllers/LibraryController.js')

const app = express();
app.use(express.json())
app.use(cors());
app.use(helmet());
const port = 8000
const mongoURL = "mongodb+srv://admin:rmYklf0jAilkPXfl@library.ajuxyud.mongodb.net/Library"

app.get('/Getlibrary', LibraryController.GetLibrary);
app.get('/GetlibraryByName', LibraryController.GetlibraryByName);

app.listen(port, async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("server run at: ", port)
    }
    catch(error) {
        console.log(error)
    }
})
exports.api = functions.https.onRequest(app);