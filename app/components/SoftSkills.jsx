window.SoftSkills = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        var ctxSS = document.getElementById("softSkillChart").getContext('2d');
        var myRadarChart = new Chart(ctxSS, {
            type: 'radar',
            data: {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    }
                ]
            },
            options: {
                responsive: true,
                legend: { display: false }
            }
        });
    },
    render: function () {
        return (
            <div>
                <h5>Soft Skills</h5>
                <canvas id="softSkillChart" ></canvas>
            </div>
        );
    }
});

ReactDOM.render(
    <window.SoftSkills />,
    document.getElementById('soft-skills')
);