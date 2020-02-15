var optionsArea = {
    chart: {
      id: 'yt',
      group: 'social',
      type: 'area'        
    },
    colors: ['#00E396'],
    series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60
      })
    }],
    yaxis: {
      labels: {
        minWidth: 40
      }
    }
  }

  var chartArea = new ApexCharts(
    document.querySelector("#chart-area"),
    optionsArea
  );

  chartArea.render();