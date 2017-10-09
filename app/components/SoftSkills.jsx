window.SoftSkills = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        // Highcharts.chart('softSkillChart', {
        //         chart: {
        //             polar: true,
        //             type: 'line'
        //         },
        //         title: {
        //             text: ''
        //         },
        //         legend: {
        //             enabled: false
        //         },
        //         pane: {
        //             size: '80%'
        //         },
        //         xAxis: {
        //             categories: ['Iniziativa e innovazione'
        //                 , 'Leadership e Management'
        //                 , 'Organizzazione e anticipazione'
        //                 , 'Focus Cliente'
        //                 , 'Senso Relazionale'
        //                 , 'Senso del Risultato'
        //                 , 'Ricerca di Soluzioni'],
        //             tickmarkPlacement: 'on',
        //             lineWidth: 0
        //         },
        //         yAxis: {
        //             gridLineInterpolation: 'polygon',
        //             lineWidth: 0,
        //             min: 0
        //         },
        //         tooltip: {
        //             enabled: false
        //         },
        //         series: [{
        //             data: [10, 8, 9, 8, 7, 9, 10]
        //         }]
            
        //     });
    },
    render: function () {
        return (
            // <div id="softSkillChart"></div>
            <div>
                <img src="images/SoftSkills.png" className="img-fluid"/>
            </div>
        );
    }
});

ReactDOM.render(
    <window.SoftSkills />,
    document.getElementById('soft-skills')
);