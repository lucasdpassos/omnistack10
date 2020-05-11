const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://Lucas:tatooine@93@cluster0-ge2kk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


app.use(express.json())
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

app.get('/', (request, response) => {
    console.log(request.body)
    return response.json( { message:'hello Omni' } );
});

app.listen(3333);


