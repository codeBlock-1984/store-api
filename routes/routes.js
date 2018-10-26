var products = [
	 { ID: '1', Item: 'iPhone X', Category: 'Phones', Stock:3, Price: 600 },
	{ ID: '2', Item: 'Sony HD TV', Category: 'Electronics', Stock:7, Price: 400 },
	{ ID: '3', Item: 'Dell Alienware', Category: 'Computers', Stock:13, Price: 1000 },
];

var sales = [
	{ ID:'1', Seller:'Mercy', DateOfSale:'19092018', Amount:'4000'},
	{ID:'2', Seller:'Chike', DateOfSale:'23092018', Amount:'12000'}
];

var appRouter = function(app){

	app.get("/", function(req, res){
		res.send("Welcome to Store Manager API! POST and GET requests available for the following endpoints: /api/v1/products, /api/v1/sales. Thank you!");
	});

	app.get("/api/v1/products", function(req, res){
		res.send(products);
	});

	app.get("/api/v1/products/:ID", function(req,res) {
		var specProd = products.filter( function(obj) {return obj.ID ==req.params.ID});
		res.json(specProd);
	});



	app.post("/api/v1/products", function(req, res){
		products[products.length] = {
		ID: req.body.ID,
		Item: req.body.Item,
		Category:req.body.Category,
		Stock:req.body.Stock,
		Price:req.body.Price
	};
		res.send(products);
	});

	app.get("/api/v1/sales", function(req, res){
		res.send(sales);
	});

	app.get("/api/v1/sales/:ID", function(req, res){
		var specRecord = sales.filter( function(obj) {return obj.ID ==req.params.ID});
		res.json(specRecord);
	});


	app.post("/api/v1/sales", function(req, res){
		sales[sales.length] = {
		ID: req.body.ID,
		Seller: req.body.Seller,
		DateOfSale: req.body.DateOfSale,
		Amount: req.body.Amount
	};
		res.send(sales);
	});


};
module.exports = appRouter;