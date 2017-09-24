window.TechSkills = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        var ctxTS = document.getElementById("techSkillChart").getContext('2d');
        var myTechSkillsChart = new Chart(ctxTS,
            {
                type: 'horizontalBar',
                data: {
                    "labels": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    "datasets": [{ "data": [65, 59, 34, 2, 56, 55, 40, 30, 45, 65, 45, 5] }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    maxBarThickness: 10,
                    legend: { display: false }
                }
            });
    },
    render: function () {
        return (
            <canvas id="techSkillChart" ></canvas>
        );
    }
});

ReactDOM.render(
    <window.TechSkills />,
    document.getElementById('tech-skills')
);