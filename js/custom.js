// margin convention: http://bl.ocks.org/mbostock/3019563
var margin = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};

var width = 1600 - margin.left - margin.right,
	height = 1600 - margin.top - margin.bottom;

// calling the projection (mercator) and centering the map in catalunya and the scale
var projection = d3.geo.mercator()
	.center([2.172200, 41.395691])
	.translate([width / 2, height / 2])
	.scale(300000);

// generating the path with d3.geo and it is assigned the projection
var path = d3.geo.path()
	.projection(projection);

// add the map to the div through the id map and than apply the margin
var svg = d3.select('#map').append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g');

// here we call the topojson and it is shown than
var z = 0;
var npoints = 100;
var ptdata = [];

d3.json('./assets/districtes_topo.json', function (error, m) {
	if (error) return console.error(error);

	svg.selectAll('map')
		.data(topojson.feature(m, m.objects.districtes_geo).features) // access to the third layer
		.enter().append('path')
		.attr('d', path)
		.attr('id', function (d) {
			return 'barrio_' + String(d.properties.codi); // assign id barrio_codi
		})
		.attr('class', function (d) {
			return 'districts';
		})
		.attr('z-index', function (d) {
			return z++;
		});
});

var filler = '#BD4932';
var timer = 1500;
var fadeoutDuration = 4000;
var fadeInDuration = 500;
var fadeoutStroke = 1000;

var tTip = false;


//================ BUTTON 01 ======================		
var butt01 = d3.select('#butt01')
	.on('mouseover', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('JxSi' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.style('opacity', (parseInt(d[i].percentage) * 0.01))
						.duration(fadeInDuration)
						.style('fill', filler)
						.style('stroke-width', '3px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 1)
						.duration(fadeInDuration)
						.text(d[i].percentage);
				}
			}
		})
	})
	.on('mouseout', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('JxSi' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.delay(1000)
						.duration(fadeInDuration)
						.style('opacity', 0)
						.style('fill', 'transparent')
						.style('stroke-width', '1.5px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 0)
						.duration(fadeInDuration)
				}
			}
		})
	});

//================ BUTTON 02 ======================	
var butt02 = d3.select('#butt02')
	.on('mouseover', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('Cs' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.style('opacity', (parseInt(d[i].percentage) * 0.01))
						.duration(fadeInDuration)
						.style('fill', filler)
						.style('stroke-width', '3px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 1)
						.duration(fadeInDuration)
						.text(d[i].percentage);
				}
			}
		})
	})
	.on('mouseout', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('Cs' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.delay(1000)
						.duration(fadeInDuration)
						.style('opacity', 0)
						.style('fill', 'transparent')
						.style('stroke-width', '1.5px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 0)
						.duration(fadeInDuration);
				}
			}
		})
	});
//================ BUTTON 03 ======================	
var butt03 = d3.select('#butt03')
	.on('mouseover', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('PSC' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.style('opacity', (parseInt(d[i].percentage) * 0.01))
						.duration(fadeInDuration)
						.style('fill', filler)
						.style('stroke-width', '3px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 1)
						.duration(fadeInDuration)
						.text(d[i].percentage);
				}
			}
		})
	})
	.on('mouseout', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('PSC' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.delay(1000)
						.duration(fadeInDuration)
						.style('opacity', 0)
						.style('fill', 'transparent')
						.style('stroke-width', '1.5px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 0)
						.duration(fadeInDuration)
				}
			}
		})
	});

//================ BUTTON 04 ======================	
var butt04 = d3.select('#butt04')
	.on('mouseover', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('CSQP' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.style('opacity', (parseInt(d[i].percentage) * 0.01))
						.duration(fadeInDuration)
						.style('fill', filler)
						.style('stroke-width', '3px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 1)
						.duration(fadeInDuration)
						.text(d[i].percentage);
				}
			}
		})
	})
	.on('mouseout', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('CSQP' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.delay(1000)
						.duration(fadeInDuration)
						.style('opacity', 0)
						.style('fill', 'transparent')
						.style('stroke-width', '1.5px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 0)
						.duration(fadeInDuration);
				}
			}
		})
	});


//================ BUTTON 05 ======================	
var butt05 = d3.select('#butt05')
	.on('mouseover', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('PP' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.style('opacity', (parseInt(d[i].percentage) * 0.01))
						.duration(fadeInDuration)
						.style('fill', filler)
						.style('stroke-width', '3px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 1)
						.duration(fadeInDuration)
						.text(d[i].percentage);
				}
			}
		})
	})
	.on('mouseout', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('PP' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.delay(1000)
						.duration(fadeInDuration)
						.style('opacity', 0)
						.style('fill', 'transparent')
						.style('stroke-width', '1.5px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 0)
						.duration(fadeInDuration);
				}
			}
		})
	});

//================ BUTTON 06 ======================	
var butt06 = d3.select('#butt06')
	.on('mouseover', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('CUP' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.style('opacity', (parseInt(d[i].percentage) * 0.01))
						.duration(fadeInDuration)
						.style('fill', filler)
						.style('stroke-width', '3px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 1)
						.duration(fadeInDuration)
						.text(d[i].percentage);
				}
			}
		})
	})
	.on('mouseout', function () {
		d3.json('./assets/results.json', function (d) {
			for (var i in d) {
				if ('CUP' === d[i].party) {
					d3.select('#barrio_' + d[i].codi)
						.transition()
						.delay(1000)
						.duration(fadeInDuration)
						.style('opacity', 0)
						.style('fill', 'transparent')
						.style('stroke-width', '1.5px');

					d3.select('#mouseTips__holder')
						.transition()
						.style('opacity', 0)
						.duration(fadeInDuration);
				}
			}
		})
	});


//==========================================================
function getVisualResult(partyName) {
	d3.json('./assets/results.json', function (d) {
		for (var i in d) {
			if (partyName === d[i].party) {
				d3.selectAll('#barrio_' + d[i].codi).style('opacity', (parseInt(d[i].percentage) / 100));
				console.log('districte: ' + d[i].districte);
				console.log('result: ' + d[i].percentage);
			}
		}
	});
}