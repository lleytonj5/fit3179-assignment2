// var vg_1 = "world_chart.vg.json";
// vegaEmbed("#bar_chart", vg_1).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
//     }).catch(console.error);
var vg_2 = "electricity_consumption_map.vg.json";
vegaEmbed("#electricity_map", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_3 = "electricity_exports_map.vg.json";
vegaEmbed("#electricity_map_2", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_4 = "electricity_imports_map.vg.json";
vegaEmbed("#electricity_map_3", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_5 = "electricity_renewables_map.vg.json";
vegaEmbed("#electricity_map_4", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

// Function to add the % sign to the tooltip in the renewable electricity map
vega.expressionFunction('percentageFormat', function(datum, params) {
    return datum + '%';
    });