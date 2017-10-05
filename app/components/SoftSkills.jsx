window.SoftSkills = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        Highcharts.chart('softSkillChart', {
                chart: {
                    polar: true,
                    type: 'line'
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                pane: {
                    size: '80%'
                },
                xAxis: {
                    categories: ['Iniziativa e innovazione'
                        , 'Leadership e Management'
                        , 'Organizzazione e anticipazione'
                        , 'Focus Cliente'
                        , 'Senso Relazionale'
                        , 'Senso del Risultato'
                        , 'Ricerca di Soluzioni'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },
            
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },
            
                tooltip: {
                    enabled: false
                },
            
                series: [{
                    data: [3, 4, 4, 2, 3, 4, 5]
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