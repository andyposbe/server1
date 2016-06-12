var express = require('express')
var app = express()
app.use(express.static('static'));

app.get('/', function (req, res) {
	var a = 1;
	var b = calcularGenes(4,5);
	var c = calcularGenes2(4,5,4);

	console.log("Hola "+a);
 	res.send('Buenas Noches');
})

app.get('/about', function (req, res) {
  	res.send('andy')
})

function calcularGenes(a,b){
    return a*b;
}

function calcularGenes2(a,b,c){
    return a/b +c;
}
var port = Number(process.env.PORT || 5000);
app.listen(port)