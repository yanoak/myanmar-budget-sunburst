var chart1 = c3.generate({
bindto: "#chart1",
    data: {
        columns: [
            ['Incomes', 5120963, 10052574, 13214310, 16538398, 17000051, 16975988],
            ['Expenditures', 8476914, 14414391, 17611236, 20995251, 22520310, 20733496]
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2012', '2013', '2014', '2015', '2016', '2017']
        },
y : {

            tick: {
            format: function (x) { 
            var numFormat = d3.format(",f");
            return numFormat(x); } }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
                // inner-top : default
                // inner-middle
                // inner-bottom
                // outer-top
                // outer-middle
                // outer-bottom
            }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

var chart2 = c3.generate({
bindto: "#chart2",
    data: {
        columns: [
["I - Central Bank",0, 0, 0, 0, 388852.614, 435051.972],
["I - Ministries and Departments",5116451.97925, 2872750.718, 4155202.216, 6990968.833, 8682605.501, 8463036.992],
["I - SEEs",0, 7174142.489, 9039021.15, 9528935.242, 7874870.554, 6832560.77],
["I - SEEs out of Union Funds",0, 0, 0, 0, 0, 1153169.807],
["I - Others",4511.161, 5681.262, 20086.768, 18493.72, 53721.871, 92168.737],
["E - Central Bank",0, 0, 0, 0, 343468.925, 308183.833],
["E - Ministries and Departments",7758401.59136, 6701586.732, 7581525.775, 9343035.76700001, 11060507.124, 10323097.913],
["E - SEEs",0, 6704385.34, 9046650.699, 9749576.478, 9054023.012, 7083821.291],
["E - SEEs out of Union Funds",0, 0, 0, 0, 0, 1138934.558],
["E - Union Institutions",554174.25628, 524602.162, 152192.896, 128747.251, 117731.223, 93649.738],
["E - Union Transfers to States and Regions",160201.551, 477675.123, 658208.576, 1632908.231, 1821695.907, 1720419],
["E - Others",4136.534, 6141.381, 172657.636, 140983.648, 122883.628, 65389.936]     ],
        type: 'bar',
groups: [ [
"I - Central Bank",
"I - Ministries and Departments",
"I - SEEs",
"I - SEEs out of Union Funds",
"I - Others"],
[
"E - Central Bank",
"E - Ministries and Departments",
"E - SEEs",
"E - SEEs out of Union Funds",
"E - Union Institutions",
"E - Union Transfers to States and Regions",
"E - Others"]
]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2012', '2013', '2014', '2015', '2016', '2017']
        },
y : {

        tick: {
        format: function (x) { 
        var numFormat = d3.format(",f");
        return numFormat(x); } }
        },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
                // inner-top : default
                // inner-middle
                // inner-bottom
                // outer-top
                // outer-middle
                // outer-bottom
            }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

var chart3_energy = c3.generate({
bindto: "#chart3_energy",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 3158427.974, 4341112.341, 4070670.052, 3635188.483, 3111710.848],
            ['Expenditures', 2211632.78, 3631376.441, 3373078.556, 3396135.63, 2693292.25]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 5000000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});


// ##### Ministry of Electrical Power

// <div id="chart3_electrical"></div>
var chart3_electrical = c3.generate({
bindto: "#chart3_electrical",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 0, 1318591.343, 2086222.19, 2072284.383, 1702263.501],
            ['Expenditures', 355023.321, 1845480.436, 2423717.364, 2686266.324, 2075047.885]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 3000000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 4,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Finance and Revenue

// <div id="chart3_finane"></div>
var chart3_finance = c3.generate({
bindto: "#chart3_finance",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 645160.665, 707321.962, 327225.752, 382897.123, 419517.148],
            ['Expenditures', 876174.516, 722008.848, 494011.881, 474318.877, 485890.023]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 1000000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Communication and IT

// <div id="chart3_com"></div>
var chart3_com = c3.generate({
bindto: "#chart3_com",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 914000, 622997, 772030.8, 448862.982, 410222.228],
            ['Expenditures', 567896.582, 568083.889, 786371.779, 506567.695, 377446.01]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 1000000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Industry

// <div id="chart3_industry"></div>
var chart3_industry = c3.generate({
bindto: "#chart3_industry",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 303282.52, 609884.835, 443925.144, 212693.907, 318818.632],
            ['Expenditures', 831859.874, 858914.863, 734767.168, 660094.067, 618976.771]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 1000000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Mines

// <div id="chart3_mines"></div>
var chart3_mines = c3.generate({
bindto: "#chart3_mines",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 283537.498, 303107.288, 317680.572, 320340.889, 278208.058],
            ['Expenditures', 210502.53, 163971.771, 190776.811, 172180.87, 135089.158]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 500000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Environmental Conservation and Forestry

// <div id="chart3_env"></div>
var chart3_env = c3.generate({
bindto: "#chart3_env",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 287357.48, 384880.98, 173816.67, 251277.219, 267989.53],
            ['Expenditures', 384420.272, 329457.497, 278810.954, 427806.591, 226670.993]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 500000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Rail Transportation

// <div id="chart3_rail"></div>
var chart3_rail = c3.generate({
bindto: "#chart3_rail",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 185085.093, 212478.316, 129819.973, 179569.825, 247231.352],
            ['Expenditures', 324034.542, 341855.603, 306014.157, 350503.241, 400583.135]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 500000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Construction

// <div id="chart3_construction"></div>
var chart3_construction = c3.generate({
bindto: "#chart3_construction",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 226925.188, 352001.562, 308843.015],
            ['Expenditures', 142656.229, 374048.64, 315077.015]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 500000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Transportation

// <div id="chart3_transportation"></div>
var chart3_transportation = c3.generate({
bindto: "#chart3_transportation",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 78832.72, 99228.743, 376623.18, 301050.64],
            ['Expenditures', 68335.174, 101130.202, 407605.496, 295447.273]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 500000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

// ##### Ministry of Agriculture and Irrigation

// <div id="chart3_agri"></div>
var chart3_agri = c3.generate({
bindto: "#chart3_agri",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 41200, 32200, 57500, 39000, 48910],
            ['Expenditures', 41594.76, 48604.726, 45748.361, 45864.774, 40885.745]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 60000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 7,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});
// ##### Ministry of Information

// <div id="chart3_info"></div>

var chart3_info = c3.generate({
bindto: "#chart3_info",
size: {
        height: 200
    },
    data: {
        columns: [
            ['Incomes', 23436.792, 25323.454, 21922.884, 31705.103, 27689.473],
            ['Expenditures', 18940.208, 34441.596, 32585.429, 34958.579, 29939.32]
        ]
    },
    axis: {
        x: {
            type: 'categories',
            categories: ['2013', '2014', '2015', '2016', '2017']
        },
        y : {
            max: 50000,
            min: 0,
            padding: {top:0, bottom:0},
            tick: {
                count: 6,
                format: function (x) { 
                var numFormat = d3.format(",f");
                return numFormat(x); }
            },
            label: {
                text: 'million Kyats',
                position: 'outer-middle'
            }
        }
    }
});

d3.selectAll("path").attr("fill","none");
d3.selectAll("text").attr("font-size",".7em");