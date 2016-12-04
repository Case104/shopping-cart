var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [ 
	new Product({
		title: 'Love Letter',
		description: 'Quick awesome card game.',
		imagePath: 'https://cf.geekdo-images.com/images/pic1401448.jpg',
		price: 10
	}),
	new Product({
		title: 'Dominare',
		description: 'Long awesome board game.',
		imagePath: 'http://static.wixstatic.com/media/9c2647_8014c12fbd414b1388e6ab7bc6e05e4f.png_srz_180_188_85_22_0.50_1.20_0.00_png_srz',
		price: 35
	}),
	new Product({
		title: 'Mercante',
		description: 'Economics based board game.',
		imagePath: 'https://cf.geekdo-images.com/images/pic1355950_md.jpg',
		price: 25
	}),
	new Product({
		title: 'Patronize',
		description: 'Trick based card game.',
		imagePath: 'https://www.alderac.com/tempest/files/2014/10/Patronize-box-front.jpg',
		price: 15
	}),
	new Product({
		title: 'Courtier',
		description: 'Board game.',
		imagePath: 'http://www.nohighscores.com/wp-content/uploads/2013/01/Courtier.jpg',
		price: 20
	})
]

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
