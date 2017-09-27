window.SoftSkills = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        //var ctxSS = document.getElementById("softSkillChart").getContext('2d');
        // var myRadarChart = new Chart(ctxSS, {
        //     type: 'radar',
        //     data: {
        //         labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        //         datasets: [
        //             {
        //                 fillColor: "rgba(220,220,220,0.2)",
        //                 strokeColor: "rgba(220,220,220,1)",
        //                 pointColor: "rgba(220,220,220,1)",
        //                 pointStrokeColor: "#fff",
        //                 pointHighlightFill: "#fff",
        //                 pointHighlightStroke: "rgba(220,220,220,1)",
        //                 data: [65, 59, 90, 81, 56, 55, 40]
        //             }
        //         ]
        //     },
        //     options: {
        //         responsive: true,
        //         legend: { display: false }
        //     }
        // });

        Highcharts.chart('softSkillChart', {
            
                chart: {
                    polar: true,
                    type: 'line'
                },
            
                title: {
                    enabled: false,
                    text: 'Budget vs spending',
                    x: -80
                },
            
                pane: {
                    size: '80%'
                },
            
                xAxis: {
                    categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                            'Information Technology', 'Administration'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },
            
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },
            
                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                },
            
                legend: { display: false },
            
                series: [{
                    data: [43000, 19000, 60000, 35000, 17000, 10000],
                    pointPlacement: 'on'
                }]
            
            });
    },
    render: function () {
        return (
            // <canvas id="softSkillChart" ></canvas>
            <div id="softSkillChart"></div>
        );
    }
});

ReactDOM.render(
    <window.SoftSkills />,
    document.getElementById('soft-skills')
);