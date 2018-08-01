const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');



const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

//Express hbs engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/personal', (req, res) => {
    res.render('personal')
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan'
    })
})

app.get('/about', (req, res) => {
    res.render('about');


});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});


app.get('/accionistas', (req, res) => {
    res.render('accionistas');
})



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

let search = () => {

}