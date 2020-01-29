const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

// add the partials here:

// add the routes here:
app.get('/', (req, res) => res.render('index'))

app.get('/beers', (req, res) => {
	punkAPI
  .getBeers()
  .then(beer =>res.render('beers', {beer}))
  .catch(error => res.send('nel'));
})


app.get('/random_beers', (req, res) =>{
	punkAPI
	.getRandom()
	.then(beer =>{
				console.log(beer);
			res.render('random_beers', {beer})}
		)
	.catch(error => res.send('nel'));

} )








app.listen(3000, () => console.log('🏃‍ on port 3000'));
