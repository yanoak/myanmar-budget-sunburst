var categories = {
"A Myo thar Hluttaw": 0,
"Agriculture and Irrigation": 1,
"Aid": 2,
"Aid to State/Regions Constitutional Development Fund": 3,
"Aid to States/Region Government for their deficit": 4,
"Aid/Loans to Bago Region Government": 5,
"Aid/Loans to Chin State Government": 6,
"Aid/Loans to Irrawaddy Region Government": 7,
"Aid/Loans to Kachin State Government": 8,
"Aid/Loans to Kayar State Government": 9,
"Aid/Loans to Kayin State Government": 10,
"Aid/Loans to Magwe Region Government": 11,
"Aid/Loans to Mandalay Region Government": 12,
"Aid/Loans to Mon State Government": 13,
"Aid/Loans to Rakhine State Government": 14,
"Aid/Loans to Sagaing Region Government": 15,
"Aid/Loans to Shan State Government": 16,
"Aid/Loans to Taninthari Region Government": 17,
"Aid/Loans to Yangon State Government": 18,
"Aids to state and regions": 19,
"Border Affairs": 20,
"Borrowing": 21,
"Capital Expenditure": 22,
"Capital Receipts": 23,
"CDC": 24,
"Central Bank": 25,
"Central Bank of Myanmar": 26,
"Co-operative": 27,
"Commerce": 28,
"Commerce ": 29,
"Commerce and Trade": 30,
"Communication and Information Technology": 31,
"Communications, Posts And Telegraphs": 32,
"Construction": 33,
"Culture": 34,
"Customs": 35,
"Defence": 36,
"Education": 37,
"Electric Power": 38,
"Electric Power No.(2)": 39,
"Energy": 40,
"Environmental Conservation and Forestry": 41,
"Excise Tax": 42,
"Expenditure for loans": 43,
"expenditure with own budget": 44,
"expenditure with own budget (tax on trade and income, investment)": 45,
"fees from extracting electric power": 46,
"fees from telephone operators": 47,
"Finance and Revenue": 48,
"Foreign Affairs": 49,
"Foreign Aid": 50,
"Garrison City": 51,
"General Expenditure": 52,
"General expenditure with own budget": 53,
"Grants": 54,
"Health": 55,
"Home Affairs": 56,
"Hotel and Tourism": 57,
"Immigration and Populations": 58,
"Income from Economic Enterprises outside union budget": 59,
"Income from SEEs": 60,
"Industry": 61,
"Information": 62,
"Interest payments": 63,
"Interest receipts": 64,
"Investment in Orgs": 65,
"Labour, Employment and Social Security ": 66,
"Licence fees on imports": 67,
"Livestock and Fisheries": 68,
"Loan drawdown": 69,
"Loan recovery": 70,
"Mandalay Electricity Distribution Cooperation Under Ministry of Electricity": 71,
"Mines": 72,
"Ministries and Departments": 73,
"Ministries and Departments Out of Union Funds": 74,
"Myanmar lottery": 75,
"National Planning and Economic Development": 76,
"NPT": 77,
"NPT Council": 78,
"Other General Revenues": 79,
"Pension and Rewards": 80,
"President": 81,
"President Office": 82,
"Pyithu Hluttaw": 83,
"Rail Transportation": 84,
"Receipts from SEEs": 85,
"Religious Affairs": 86,
"Revenue from Organizations' Investments": 87,
"Revenue from Savings": 88,
"Rewards and Lump Sum Pension": 89,
"Sales on stamps": 90,
"Savings": 91,
"Science and Technology": 92,
"SEEs": 93,
"SEEs out of Union Funds": 94,
"SEEs under the Ministry Communication and Information Technology": 95,
"SEEs under the Ministry of Agriculture and Irrigation": 96,
"SEEs under the Ministry of Co-operative": 97,
"SEEs under the Ministry of Communications, Posts and Telegraphs": 98,
"SEEs under the Ministry of Construction": 99,
"SEEs under the Ministry of Economic and Trade": 100,
"SEEs under the Ministry of Electric Power": 101,
"SEEs under the Ministry of Electricity Power": 102,
"SEEs under the Ministry of Energy": 103,
"SEEs under the Ministry of Environmental Conservation and Forestry": 104,
"SEEs under the Ministry of Finance and Revenue": 105,
"SEEs under the Ministry of Hotels and Tourism": 106,
"SEEs under the Ministry of Industry": 107,
"SEEs under the Ministry of Industry No. (2)": 108,
"SEEs under the Ministry of Information": 109,
"SEEs under the Ministry of Labour": 110,
"SEEs under the Ministry of Livestock and Fisheries": 111,
"SEEs under the Ministry of Mines": 112,
"SEEs under the Ministry of Rail Transportation": 113,
"SEEs under the Ministry of Transportation": 114,
"Social Security Board (MOL)": 115,
"Social welfare under Ministry of Labour, employment and social welfare": 116,
"Social Welfare Under Ministry of Labour, Employment and Social welfare ": 117,
"Social Welfare, Relief and Resettlement": 118,
"SOE under Ministry of Transport": 119,
"Special Fund": 120,
"Sports": 121,
"Tax on cultured pearl and property": 122,
"Tax on extracting from forest": 123,
"Tax on extracting minerals": 124,
"Tax on income and property": 125,
"Tax on lakes": 126,
"Tax on land": 127,
"Tax on minerals and precious gems": 128,
"Tax on oil and natural gas": 129,
"Tax on rubber ": 130,
"Tax on trade": 131,
"Tax on water and irrigations": 132,
"Taxes": 133,
"Taxes on SEEs": 134,
"Taxes on SEEs (2)": 135,
"Transportation": 136,
"Transportation tax": 137,
"Union Attorney General": 138,
"Union Auditor General": 139,
"Union Civil Service Board": 140,
"Union Constitutional Court": 141,
"Union Election Commission": 142,
"Union Government": 143,
"Union Institutions": 144,
"Union Parliament": 145,
"Union Supreme Court": 146,
"Union Transfers to States and Regions": 147,
"Yangon Electricity Distribution Cooperation Under Ministry of Electricity": 148
}


// Dimensions of sunburst.
var width = 400;
var height = 400;
var radius = (Math.min(width, height)-50 )/ 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 380, h: 20, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  "home": "#5687d1",
  "product": "#7b615c",
  "search": "#de783b",
  "account": "#6ab975",
  "other": "#a173d1",
  "end": "#bbbbbb"
};

var colores_g =  

    ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
//"#aaaa11", 

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 
var nestedData = {};

// Format for displaying numbers
var numFormat = d3.format(",.2f");

var vis1 = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container1")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var vis2 = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container2")
    .attr("transform", "translate(" + (width * 0.5) + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("data.csv", function(text) {
  var csv = d3.csv.parseRows(text);
//  console.log(csv);
//  console.log(text);

  nestedData = d3.nest()
    .key(function(d) { return d[0]; })  // nest by financial year
    .key(function(d) { return d[1]; })  // next by income or expenditure
    .map(csv);
  
  delete nestedData["fin_year"];
  
  for (year in nestedData) {
    nestedData[year]['expenditure'].map(function(d) {
      return d.splice(0,2)
    });
    nestedData[year]['income'].map(function(d) {
      return d.splice(0,2)
    });
  }
    
  
  console.log(nestedData);
      
  d3.select("#yearSelector")
  .selectAll("option")
  .data(Object.getOwnPropertyNames(nestedData))
  .enter().append("option")
  .attr("value", function (d) { return d; })
  .text(function (d) { return d; });
  
  var e = document.getElementById("yearSelector");
  var strYear = e.options[e.selectedIndex].value;

//  buildYear(strYear);
  
  var jsonIncome = buildHierarchy(
    nestedData[strYear]["income"]
  );
  var jsonExpenditure = buildHierarchy(
    nestedData[strYear]["expenditure"]
  );
  
  createVisualization(jsonIncome,vis1);
  createVisualization(jsonExpenditure,vis2);
  
  d3.select('#yearSelector')
  .on('change', function() {
    return buildYear(d3.select(this).property('value'));
  });
  
});

function buildYear(year) {
  var jsonIncome = buildHierarchy(
    nestedData[year]["income"]
  );
  var jsonExpenditure = buildHierarchy(
    nestedData[year]["expenditure"]
  );

  console.log(nestedData);
  console.log(jsonIncome);
  updateVisualization(jsonIncome,vis1);
  updateVisualization(jsonExpenditure,vis2);
}



// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json,viz) {

  var firstVis = viz === vis1 ? true : false;
  
  // Basic setup of page elements.
  if (firstVis) initializeBreadcrumbTrail("trail1");
  else initializeBreadcrumbTrail("trail2"); 
//  drawLegend();
//  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  viz.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = viz.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { 
        return colores_g[categories[d.name] % (colores_g.length)];
      })
//      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", function(d) { 
//        console.log("Calling mouseover from createVisualization");  
        if (firstVis)
          return mouseover(d,"#container1")
        else 
          return mouseover(d,"#container2");
      });

  // Add the mouseleave handler to the bounding circle.
//  if (viz === vis1)
    d3.select("#container1")
      .on("mouseleave", function(d) {
//        console.log("Calling mouseover from createVisualization");  
        return mouseleave(d,"#container1")
      });
//  else 
    d3.select("#container2")
      .on("mouseleave", function(d) {
//        console.log("Calling mouseover from createVisualization"); 
        return mouseleave(d,"#container2")
      });

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

function updateVisualization(json,viz) {

  console.log(json);
  
  var firstVis = viz === vis1 ? true : false;
  
  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });
  
  viz.data([json]).selectAll("path").remove();
  
  var path = viz.data([json]).selectAll("path")
      .data(nodes)
  
  path.enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { 
        return colores_g[categories[d.name] % (colores_g.length)];
      })
//      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", function(d) { 
//        console.log("Calling mouseover from createVisualization");  
        if (firstVis)
          return mouseover(d,"#container1")
        else 
          return mouseover(d,"#container2");
      });
  
//  path.exit().remove();

  // Add the mouseleave handler to the bounding circle.
//  if (viz === vis1)
    d3.select("#container1")
      .on("mouseleave", function(d) {
        console.log("Calling mouseover from createVisualization");  
        return mouseleave(d,"#container1")
      });
//  else 
    d3.select("#container2")
      .on("mouseleave", function(d) {
        console.log("Calling mouseover from createVisualization"); 
        return mouseleave(d,"#container2")
      });

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d,container) {

  var trail = (container == "#container1") ? "#trail1" : "#trail2";
  var percentageContainer = (container == "#container1") ? "#percentage1" : "#percentage2";
  var explanation = (container == "#container1") ? "#explanation1" : "#explanation2";
  
//  console.log("over " + container);
  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.selectAll(percentageContainer)
      .text(percentageString);

  d3.select(explanation)
      .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString, d.value, trail);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  d3.select(container)
    .selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d,container) {
  
//  console.log("leave " + container);
  
  var trail = (container == "#container1") ? "#trail1" : "#trail2";
  var explanation = (container == "#container1") ? "#explanation1" : "#explanation2";
//  console.log(trail);

  // Hide the breadcrumb trail
  d3.selectAll(trail)
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.select("#container1")
    .selectAll("path")
    .transition()
    .duration(500)
    .style("opacity", 1)
    .each("end", function() {
        d3.select(this).on("mouseover", function(d) { return mouseover(d,"#container1");});
      });
  
  d3.select("#container2")
    .selectAll("path")
    .transition()
    .duration(500)
    .style("opacity", 1)
    .each("end", function() {
        d3.select(this).on("mouseover", function(d) { return mouseover(d,"#container2");});
      });
  

  d3.select(explanation)
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail(trail) {
  
  var titlesText = trail == "trail1" ? "Expenditures" : "Incomes";
  
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 200)
      .attr("id", trail);
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
//  console.log(points);
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString, value, trail) {
  
  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.selectAll(trail)
      .selectAll("g")
      .data(nodeArray, function(d) { 
//        console.log(d.name);
        return d.name + d.depth; 
      });

//  console.log(g);
  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
//      .style("fill", function(d) { return colors[d.name]; });
      .style("fill", function(d) { 
        return colores_g[categories[d.name] % (colores_g.length)];
//        return colors[d.name]; 
      });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
//    return "translate(" + i * (b.w + b.s) + ", 0)";
    return "translate(0, " + i * (b.h + b.s) + ")";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.selectAll(trail).select("#endlabel")
      .attr("x", 0.5 * (b.w + b.s))
      .attr("y", (nodeArray.length + 0.5) * (b.h + b.s))
//      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
//      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text("K " + numFormat(value) + " million = " + percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.selectAll(trail)
      .style("visibility", "");

}


// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
//  console.log(csv);
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var seqLength = csv[i].length;
//    var sequence = csv[i][0];
    var size = +csv[i][seqLength-1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
//    var parts = sequence.split("-");
  
  var parts = csv[i].slice(0,seqLength-1);
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};