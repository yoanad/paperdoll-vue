
<template>
  <div class="part-2-section container" id="wrap">
    <div class="container">
    <h1 class="title">What, really? Where does this data come from? Explain!</h1>
    <p class="p-chart-explanation">Efficiency of water usage for cotton production varies greatly in different countries.
      We chose to compare the top 4 of seed cotton producing countries in how much a t-shirt and jeans would "cost" in litres, if the cotton was produced in this country.</p>
    </div>
    
    <h4 id="title" class="title is-4">Water consumption for producing different types of clothing</h4>
    <div id="chart-container">
      <div id="model" class="flat-select" @change="changeData"></div>
      <div id="barItem">
        <apexchart
          type="bar"
          width="540"
          height="520"
          ref="chart"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <img src="../assets/arrow.png" class="arrow" />
      <div id="chart-quarter">
        <apexchart
          type="bar"
          width="540"
          height="520"
          ref="chartQuarter"
          :options="chartOptionsQuarter"
          :series="seriesQuarter"
        ></apexchart>
      </div>
    </div>
    <div id="tips">*** Data source: (Chapagain et al., 2006) </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import colors from "../helpers/colors";
import arrayData from "../helpers/arrayData";

Apex = {
  chart: {
    toolbar: {
      show: true
    }
  },
  tooltip: {
    shared: false
  },
  legend: {
    show: false
  }
};

function makeData() {
  var dataSet = arrayData;

  var dataYearSeries = [
    {
      x: "T-shirts",
      y: dataSet[0].y,
      color: colors[0],
      quarters: dataSet[0].quarters
    },
    {
      x: "Skirt",
      y: dataSet[1].y,
      color: colors[1],
      quarters: dataSet[1].quarters
    },
    {
      x: "Jeans",
      y: dataSet[2].y,
      color: colors[2],
      quarters: dataSet[2].quarters
    },
    {
      x: "Dress",
      y: dataSet[3].y,
      color: colors[3],
      quarters: dataSet[3].quarters
    }
  ];

  return dataYearSeries;
}

function updateQuarterChart(sourceChart, destChartIDToUpdate) {
  var series = [];
  var seriesIndex = 0;
  var colors = [];

  if (sourceChart.w.globals.selectedDataPoints[0]) {
    var selectedPoints = sourceChart.w.globals.selectedDataPoints;
    for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
      var selectedIndex = selectedPoints[seriesIndex][i];
      var yearSeries = sourceChart.w.config.series[seriesIndex];
      series.push({
        name: yearSeries.data[selectedIndex].x,
        data: yearSeries.data[selectedIndex].quarters
      });
      colors.push(yearSeries.data[selectedIndex].color);
    }

    if (series.length === 0)
      series = [
        {
          data: []
        }
      ];

    return ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
      series: series,
      colors: colors,
      fill: {
        colors: colors
      }
    });
  }
}

export default {
  components: {
    apexchart: VueApexCharts
  },
  name: "VueApexCharts",
  data: function() {
    return {
      series: [
        {
          data: makeData()
        }
      ],
      chartOptions: {
        chart: {
          id: "barItem",
          height: 400,
          width: "80%",
          type: "bar",
          events: {
            dataPointSelection: function(e, chart, opts) {
              var quarterChartEl = document.querySelector("#chart-quarter");
              var yearChartEl = document.querySelector("#chart-year");

              if (opts.selectedDataPoints[0].length === 1) {
                if (quarterChartEl.classList.contains("active")) {
                  updateQuarterChart(chart, "barQuarter");
                } else {
                  yearChartEl &&
                    yearChartEl.classList.add("chart-quarter-activated");
                  quarterChartEl && quarterChartEl.classList.add("active");
                  updateQuarterChart(chart, "barQuarter");
                }
              } else {
                updateQuarterChart(chart, "barQuarter");
              }

              if (opts.selectedDataPoints[0].length === 0) {
                yearChartEl.classList.remove("chart-quarter-activated");
                quarterChartEl.classList.remove("active");
              }
            },
            updated: function(chart) {
              updateQuarterChart(chart, "barQuarter");
            },
            responsive: [
              {
                breakpoint: 1000,
                options: {
                  plotOptions: {
                    bar: {
                      distributed: true,
                      horizontal: true
                    },
                    chartOptionsQuarter:{
                      bar:{
                        horizontal:false
                      }
                    }
                  },
                }
              }
            ]
          }
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            barHeight: "60%",
            dataLabels: {
              position: "bottom"
            }
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"]
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex];
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },

        colors: colors,

        states: {
          normal: {
            filter: {
              type: "desaturate"
            }
          },
          active: {
            allowMultipleDataPointsSelection: true,
            filter: {
              type: "darken",
              value: 1
            }
          }
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function(val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex];
              }
            }
          },
          style: {
            fontSize: "12px"
          }
        },
        title: {
          text: "Your Clothing choice",
          offsetX: 15,
          offsetY: 15, 
          margin: 20,
          style: {
            fontSize: '1.1em'
          }
        },
        subtitle: {
          text: "(Click on bar to see water-consuming volume for clothes)",
          //margin: 30,
          align: "left",
          floating: true,
          offsetX: 15,
          offsetY: 50,
          style: {
            fontSize: '1em'
          }
        },
        yaxis: {
          labels: {
            show: false
          },
          title: {
            text: "Types of clothes",
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-title"
            }
          }
        },
        xaxis: {
          title: {
            text: "world average water use in producing one item(lbs)",
            style: {
              fontSize: "14px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-title"
            }
          }
        }
      },

      seriesQuarter: [
        {
          data: []
        }
      ],
      chartOptionsQuarter: {
        chart: {
          id: "barQuarter",
          height: 300,
          width: "100%",
          type: "bar",
          stacked: false
        },
        showAlways: false,
        plotOptions: {
          bar: {
            columnWidth: "92%",
            horizontal: false
          }
        },
        legend: {
          show: true,
          margin: 10
          // offsetY: 200
        },

        dataLabels: {
          style: {
            fontSize: "10px"
          }
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          lines: {
            show: true
          },
          title: {
            text: "country",
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-title"
            }
          }
        },
        yaxis: {
          labels: {
            show: true
          },
          title: {
            text: "volume of water consumed(lbs)",
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-title"
            }
          }
        },
        title: {
          text:
            "Country by country comparison of water consumption",
          offsetX: 10,
          offsetY: 15,
          margin: 20,
          style: {
            fontSize: '1.1em'
          }
        },
        tooltip: {
          x: {
            formatter: function(val, opts) {
              return opts.w.globals.seriesNames[opts.seriesIndex];
            }
          },
          y: {
            title: {
              formatter: function(val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex];
              }
            }
          }
        }
      },

      methods: {
        changeData: function() {
          this.$refs.chart.updateSeries([
            {
              data: makeData()
            }
          ]);
        }
      }
    };
  }
};
</script>

<style scoped>
body {
  background: #fff;
}

#title {
  /* text-align: center;
  font-size: 3em; */
  margin-bottom: 50px;
  /* font-family: "Helvetica, Arial, sans-serif"; */
}

.title {
  text-align: center;
}

.subtitle {
  text-align: center;
}
p {
  text-align: center;
}

.p-chart-explanation {
  margin-bottom: 50px;
}

#wrap {
  margin: 45px auto;
  /* display: flex; */
  /* max-width: 800px; */
}

#chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-box {
  padding-left: 0;
}

select#model {
  display: none;
  position: relative;
  top: -40px;
  left: 0;
  z-index: 2;
  cursor: pointer;
  transform: scale(0.8);
}

.barItem {
  /* float: left; */
  position: relative;
  transition: 1s ease transform;
  z-index: 3;
}
.chart-quarter {
  /* float: left; */
  position: relative;
  z-index: -2;
  transition: 1s ease transform;
}

.arrow {
  width: 3%;
  height: 3%;
  margin: 2.5em;
}
</style>
