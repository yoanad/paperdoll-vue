webpackJsonp([0],{"/8fb":function(t,s){},IPjw:function(t,s,a){t.exports=a.p+"static/jeans-generic.f13ec00.png"},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i=a("HJCm"),r=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#00D9E9","#FF66C3"],n=[{y:2230,quarters:[{x:"China",y:1009},{x:"USA",y:1125},{x:"India",y:4331},{x:"Pakistan",y:2457}]},{y:4014,quarters:[{x:"China",y:1816},{x:"USA",y:2024},{x:"India",y:7796},{x:"Pakistan",y:4422}]},{y:6692,quarters:[{x:"China",y:3027},{x:"USA",y:3373},{x:"India",y:12993},{x:"Pakistan",y:7371}]},{y:5799,quarters:[{x:"China",y:2623},{x:"USA",y:2924},{x:"India",y:11261},{x:"Pakistan",y:6388}]},{y:540,quarters:[{x:"China",y:120},{x:"USA",y:120},{x:"India",y:130},{x:"Pakistan",y:170}]},{y:580,quarters:[{x:"China",y:170},{x:"USA",y:130},{x:"India",y:120},{x:"Pakistan",y:160}]}];function c(){var t=n;return[{x:"T-shirts",y:t[0].y,color:r[0],quarters:t[0].quarters},{x:"Skirt",y:t[1].y,color:r[1],quarters:t[1].quarters},{x:"Jeans",y:t[2].y,color:r[2],quarters:t[2].quarters},{x:"Dress",y:t[3].y,color:r[3],quarters:t[3].quarters}]}function o(t,s){var a=[],e=[];if(t.w.globals.selectedDataPoints[0]){for(var i=t.w.globals.selectedDataPoints,r=0;r<i[0].length;r++){var n=i[0][r],c=t.w.config.series[0];a.push({name:c.data[n].x,data:c.data[n].quarters}),e.push(c.data[n].color)}return 0===a.length&&(a=[{data:[]}]),ApexCharts.exec(s,"updateOptions",{series:a,colors:e,fill:{colors:e}})}}Apex={chart:{toolbar:{show:!0}},tooltip:{shared:!1},legend:{show:!1}};var l={components:{apexchart:a.n(i).a},name:"VueApexCharts",data:function(){return{series:[{data:c()}],chartOptions:{chart:{id:"barItem",height:300,width:"100%",type:"bar",events:{dataPointSelection:function(t,s,a){var e=document.querySelector("#chart-quarter"),i=document.querySelector("#chart-year");1===a.selectedDataPoints[0].length?e.classList.contains("active")?o(s,"barQuarter"):(i&&i.classList.add("chart-quarter-activated"),e&&e.classList.add("active"),o(s,"barQuarter")):o(s,"barQuarter"),0===a.selectedDataPoints[0].length&&(i.classList.remove("chart-quarter-activated"),e.classList.remove("active"))},updated:function(t){o(t,"barQuarter")}}},plotOptions:{bar:{distributed:!0,horizontal:!0,barHeight:"60%",dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"start",style:{colors:["#fff"]},formatter:function(t,s){return s.w.globals.labels[s.dataPointIndex]},offsetX:0,dropShadow:{enabled:!0}},colors:r,states:{normal:{filter:{type:"desaturate"}},active:{allowMultipleDataPointsSelection:!0,filter:{type:"darken",value:1}}},tooltip:{x:{show:!1},y:{title:{formatter:function(t,s){return s.w.globals.labels[s.dataPointIndex]}}}},title:{text:"Your Clothing choice",offsetX:15,margin:10,style:{fontSize:28}},subtitle:{text:"(Click on bar to see details)",offsetX:15,offsetY:50,style:{fontSize:18}},yaxis:{labels:{show:!1}},xaxis:{title:{text:"world average",style:{fontSize:"14px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}}}},seriesQuarter:[{data:[]}],chartOptionsQuarter:{chart:{id:"barQuarter",height:300,width:"100%",type:"bar",stacked:!1},plotOptions:{bar:{columnWidth:"80%",horizontal:!1}},legend:{show:!0},grid:{yaxis:{lines:{show:!1}},xaxis:{lines:{show:!0}}},yaxis:{labels:{show:!1}},title:{text:"Country by country analysing",offsetX:10,style:{fontSize:20}},tooltip:{x:{formatter:function(t,s){return s.w.globals.seriesNames[s.seriesIndex]}},y:{title:{formatter:function(t,s){return s.w.globals.labels[s.dataPointIndex]}}}}},methods:{changeData:function(){this.$refs.chart.updateSeries([{data:c()}])}}}}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"wrap"}},[s("div",{staticClass:"flat-select",attrs:{id:"model"},on:{change:this.changeData}}),this._v(" "),s("div",{attrs:{id:"barItem"}},[s("apexchart",{ref:"chart",attrs:{type:"bar",width:"500",height:"420",options:this.chartOptions,series:this.series}})],1),this._v(" "),s("div",{attrs:{id:"chart-quarter"}},[s("apexchart",{ref:"chartQuarter",attrs:{type:"bar",width:"500",height:"420",options:this.chartOptionsQuarter,series:this.seriesQuarter}})],1)])},staticRenderFns:[]};var p=a("VU/8")(l,d,!1,function(t){a("VnO1")},"data-v-f57b53fa",null).exports;document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".selected-tshirts"),s=document.querySelector(".selected-jeans"),a=document.querySelectorAll(".tshirt-card"),e=document.querySelectorAll(".jeans-card"),i=function(){var a=t.querySelector(".active"),e=s.querySelector(".active"),i=a?75e-5*a.dataset.val:0,n=e?25e-5*e.dataset.val:0,c=parseFloat(i,0)+parseFloat(n,0);document.querySelector("#total-cost").textContent=c+" litres",document.querySelector("#total-cost").dataset.val=c;var o=l(c);document.querySelector("#days").textContent=o+" days",r()},r=function(){var t=document.querySelector(".cup");t.classList.contains("cup-pour")&&t.classList.remove("cup-pour"),setTimeout(function(){t.classList.add("cup-pour")},1e3)},n=function(t,s){t.forEach(function(t){t.classList.contains("active")&&t.classList.remove("active")}),s.classList.add("active")},c=function(s){var e=s.currentTarget.dataset.id,r=t.querySelector("#selected-tshirt-"+e);n(a,s.currentTarget),n(t.querySelectorAll("img"),r),i()},o=function(t){var a=t.currentTarget.dataset.id,r=s.querySelector("#selected-jeans-"+a);n(e,t.currentTarget),n(s.querySelectorAll("img"),r),i()},l=function(t){return parseFloat(t/1.2).toFixed(2)};document.querySelectorAll(".tshirt-card").forEach(function(t){t.addEventListener("click",c)}),document.querySelectorAll(".jeans-card").forEach(function(t){t.addEventListener("click",o)});var d=document.querySelectorAll(".tshirt"),p=document.querySelectorAll(".jeans");d.forEach(function(t){t.src=shirtImgSrc}),p.forEach(function(t){t.src=jeansImgSrc})});var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("Choose your outfit and calculate your water footprint.")])])]),t._v(" "),e("section",{staticClass:"section doll-wrapper"},[e("div",{staticClass:"doll-body"},[e("img",{staticClass:"doll",attrs:{src:a("YmqY")}}),t._v(" "),e("div",{staticClass:"selected-tshirts"},[e("img",{staticClass:"tshirt",attrs:{src:a("fdP4"),"data-val":"8662000",id:"selected-tshirt-0"}}),t._v(" "),e("img",{staticClass:"tshirt",attrs:{src:a("fdP4"),"data-val":"4914000",id:"selected-tshirt-1"}}),t._v(" "),e("img",{staticClass:"tshirt",attrs:{src:a("fdP4"),"data-val":"2018000",id:"selected-tshirt-2"}}),t._v(" "),e("img",{staticClass:"tshirt",attrs:{src:a("fdP4"),"data-val":"2249000",id:"selected-tshirt-3"}})]),t._v(" "),e("div",{staticClass:"selected-jeans"},[e("img",{staticClass:"jeans",attrs:{src:a("IPjw"),"data-val":"8662000",id:"selected-jeans-0"}}),t._v(" "),e("img",{staticClass:"jeans",attrs:{src:a("IPjw"),"data-val":"4914000",id:"selected-jeans-1"}}),t._v(" "),e("img",{staticClass:"jeans",attrs:{src:a("IPjw"),"data-val":"2018000",id:"selected-jeans-2"}}),t._v(" "),e("img",{staticClass:"jeans",attrs:{src:a("IPjw"),"data-val":"2249000",id:"selected-jeans-3"}})])]),t._v(" "),e("div",{staticClass:"clothes-wrapper"},[e("div",{staticClass:"tshirts-wrapper"},[e("div",{staticClass:"card tshirt-card",attrs:{"data-id":"0"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"tshirt tshirt-option",attrs:{src:a("fdP4")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("India")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"})])])]),t._v(" "),e("div",{staticClass:"card tshirt-card",attrs:{"data-id":"1"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"tshirt tshirt-option",attrs:{src:a("fdP4")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("Pakistan")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop-inactive"})])])]),t._v(" "),e("div",{staticClass:"card tshirt-card",attrs:{"data-id":"2"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"tshirt tshirt-option",attrs:{src:a("fdP4")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("China")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop-inactive"}),e("span",{staticClass:"drop-inactive"}),e("span",{staticClass:"drop-inactive"})])])]),t._v(" "),e("div",{staticClass:"card tshirt-card",attrs:{"data-id":"3"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"tshirt tshirt-option",attrs:{src:a("fdP4"),"data-id":"3"}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("USA")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop-inactive"}),e("span",{staticClass:"drop-inactive"})])])])]),t._v(" "),e("div",{staticClass:"jeans-wrapper"},[e("div",{staticClass:"card jeans-card",attrs:{"data-id":"0"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"jeans jeans-option",attrs:{src:a("IPjw")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("India")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"})])])]),t._v(" "),e("div",{staticClass:"card jeans-card",attrs:{"data-id":"1"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"jeans jeans-option",attrs:{src:a("IPjw")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("Pakistan")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop-inactive"})])])]),t._v(" "),e("div",{staticClass:"card jeans-card",attrs:{"data-id":"2"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"jeans jeans-option",attrs:{src:a("IPjw")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("China")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop-inactive"}),e("span",{staticClass:"drop-inactive"}),e("span",{staticClass:"drop-inactive"})])])]),t._v(" "),e("div",{staticClass:"card jeans-card",attrs:{"data-id":"3"}},[e("div",{staticClass:"card-content"},[e("img",{staticClass:"jeans jeans-option",attrs:{src:a("IPjw")}}),t._v(" "),e("p",[e("span",{staticClass:" is-6"},[t._v("Source: ")]),e("span",{staticClass:" is-6 is-bold"},[t._v("USA")])]),t._v(" "),e("p",{staticClass:"is-6"},[t._v("Water usage:")]),t._v(" "),e("div",{staticClass:"drop-container"},[e("span",{staticClass:"drop"}),e("span",{staticClass:"drop"}),e("span",{staticClass:"drop-inactive"}),e("span",{staticClass:"drop-inactive"})])])])])])]),t._v(" "),e("section",{staticClass:"cost-section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[t._v("Your outfit costs*")]),t._v(" "),e("h3",{staticClass:"subtitle is-impressive-headline",attrs:{id:"total-cost","data-val":"0"}},[t._v("\n              0.00 litres\n            ")])])]),t._v(" "),e("section",{staticClass:"cup-section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[t._v("This is enough water for you to drink for**")]),t._v(" "),e("h3",{staticClass:"subtitle is-impressive-headline",attrs:{id:"days"}},[t._v("\n            0 days\n          ")]),t._v(" "),e("div",{staticClass:"cup"})])]),t._v(" "),e("section",[e("p",[t._v("* Assuming t-shirt cost 0.00025t cotton and jeans cost 0.00075t cotton. Source:\n          "),e("a",{attrs:{href:"https://ccgga.org/cotton-information/much-cotton-take/"}},[t._v(" California Cotton Ginners & Growers Association")])]),t._v(" "),e("p",[t._v("** Assuming 1.2 litres per day, as recommended by the NHS.\n          Source:\n          "),e("a",{attrs:{href:"hhttps://www.nhs.uk/news/food-and-diet/six-to-eight-glasses-of-water-still-best/"}},[t._v(" NHS website")])])])])}]};var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"background"},[a("h1",{staticClass:"title is-spaced"},[t._v("Information and background of the project")]),t._v(" "),a("p",{staticClass:"subtitle is-3"},[t._v("Idea")]),t._v(" "),a("p",{},[t._v('\n    This visualizations about raising awareness about the consequences of our shopping habits.\n    Fast-fashion production requires huge amount of cotton and therefore water, therefore the choice you make about buying an outfit has a direct influence on the world.\n    For instance, the origin of your t-shirt makes a big difference, because efficiency of cotton production is varies in different countries.\n    We chose to compare the top 4 of seed cotton producing countries in how much a t-shirt and jeans would "cost" in litres, if the cotton was produced in this country.\n')]),t._v(" "),a("h3",{staticClass:"subtitle is-3"},[t._v("The Data")]),t._v(" "),a("p",{},[t._v("\n    Lorem ipsum\n")]),t._v(" "),a("h3",{staticClass:"subtitle is-3"},[t._v("The Technologies")]),t._v(" "),a("p",{},[t._v("\n    Lorem ipsum\n")]),t._v(" "),a("h3",{staticClass:"subtitle is-3"},[t._v("About us")]),t._v(" "),a("p",{},[t._v("\n    Lorem ipsum\n")])])}]},h={name:"App",components:{VueApexCharts:p,Paperdoll:a("VU/8")({components:{},name:"Paperdoll"},u,!1,function(t){a("qCt9")},"data-v-7a055edf",null).exports,BackgroundInfo:a("VU/8")(null,v,!1,null,null,null).exports}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Paperdoll"),this._v(" "),s("VueApexCharts"),this._v(" "),s("hr"),this._v(" "),s("BackgroundInfo")],1)},staticRenderFns:[]},f=a("VU/8")(h,C,!1,null,null,null).exports;a("uMhA"),a("/8fb");e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:f},template:"<App/>"})},VnO1:function(t,s){},YmqY:function(t,s,a){t.exports=a.p+"static/doll.ed80349.png"},fdP4:function(t,s,a){t.exports=a.p+"static/tshirt-generic.fd8ad45.png"},qCt9:function(t,s){},uMhA:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.16193ecd6603d9d91fa1.js.map