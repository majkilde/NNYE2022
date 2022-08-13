function Draw(numberOfRolls) {
  // Teori: https://sites.google.com/a/sg.dk/matematik-for-3ma34/b/kapitel-5-statistik/5-2-sandsynlighedsfelter

  result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 1; i <= numberOfRolls; i++) {
    var sum = Roll() + Roll();

    result[sum]++;
  }
  console.log(result);

  Chart(ConvertToGoogleData(result));
}

function ConvertToGoogleData(data) {
  var result = [];

  for (var i = 1; i <= 12; i++) {
    result.push(["" + i, data[i]]);
  }
  console.log(result);
  return result;
}

function Chart(my_data) {
  // Load the Visualization API and the corechart package.
  google.charts.load("current", { packages: ["corechart", "bar"] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Sum");
    data.addColumn("number", "Antal");
    for (var i = 1; i <= result.lenght; i++) {
      data.add;
    }
    data.addRows(my_data);

    // Set chart options
    var options = { title: "Frekvens", width: 600, height: 400 };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
}
