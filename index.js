const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('static'));

app.use(express.urlencoded({
    extended: true
}));

//importing mongoose
const db = require('./config/mongoose');

app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
