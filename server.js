const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  //res.send('Hola Mundo');
  let salida = {
    nombre: 'benji',
    edad: 32,
    url: req.url
  };
  //res.send(salida);
  res.render('home',{
    nombre: 'aplicacion nodejs',

  });
})

app.get('/about', (req, res) => {
  res.render('about',{
    anio: new Date().getFullYear()
  });
})

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`);
});
