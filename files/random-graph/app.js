var data =[];
totalPoints = 300;

function getRandomData() {
	if (data.length > 0)
		data = data.slice(1);

	// do a random walk

	while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 0,
				// add random int between -1 and 1
				y = prev + Math.floor(Math.random() * 3) + -1 ;

			data.push(y);
		}

	// Zip the generated y values with the x values

	var res = [];
	for (var i = 0; i < data.length; ++i) {
		res.push([i, data[i]]);
	}

	return res;
}

var plot = $.plot("#placeholder", [{
	data: getRandomData(),
	color: "rgb(30, 180, 20)",
	threshold: {
		below: 0,
		color: "rgb(200, 20, 30)"
	}}], {
	series: {
		shadowSize: 0	// Drawing is faster without shadows
	},
	xaxis: {
		show: false
}});

function update() {

	$("#current").text(data[data.length - 1].toString());

	plot.setData([{
	data: getRandomData(),
	color: "rgb(30, 180, 20)",
	threshold: {
		below: 0,
		color: "rgb(200, 20, 30)"
	}}]);

	plot.setupGrid();
	plot.draw();
	setTimeout(update, 30);
}

update();

$("#footer").append($.plot.version);
