const chart = LightweightCharts.createChart(document.getElementById('chart-container'), { width: 800, height: 400 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2023-01-01', value: 100 },
    { time: '2023-01-02', value: 105 },
    { time: '2023-01-03', value: 102 },
    { time: '2023-01-04', value: 110 }
]);
