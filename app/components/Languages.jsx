window.Languages = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function() {

        new Chart(document.getElementById("italian-read"), {
            type: 'doughnut',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              datasets: [
                {
                  data: [80,20]
                }
              ]
            },
            options: {
                
        legend: { display: false },
        rotation: Math.PI ,
        circumference: Math.PI,
              title: {
                display: false,
                text: 'Read'
              }
            }
        });
        var i = new Chartist.Pie('#italian-write', {
            series: [100]
            }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
            });
        var i = new Chartist.Pie('#italian-speak', {
            series: [100]
            }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
            });

        var i = new Chartist.Pie('#english-read', {
            series: [80,20]
            }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
            });
        var i = new Chartist.Pie('#english-write', {
            series: [80,20]
            }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
            });
        var i = new Chartist.Pie('#english-speak', {
            series: [80,20]
            }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
            });
         //console.log("AboutMe: componentDidMount");
    },
    render: function () {
        return (
            <div className="mx-auto mb-1">
                <h3>Languages</h3>

                <div className="row ">
                    <div className="col-md-12 text-center">
                        <h5>Italian</h5>
                    </div>
                    <div className="col-xs-4 col-sm-4 text-center">
                        <canvas id="italian-read" ></canvas>
                        <h6>Read</h6>
                    </div>
                    <div id="italian-write" className="col-xs-4 col-sm-4"></div>
                    <div id="italian-speak" className="col-xs-4 col-sm-4"></div>

                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <h5>English</h5>
                    </div>

                    <div id="english-read" className="col-xs-4 col-sm-4"></div>
                    <div id="english-write" className="col-xs-4 col-sm-4"></div>
                    <div id="english-speak" className="col-xs-4 col-sm-4"></div>

                </div>

            </div>
        );
    }
});

ReactDOM.render(
    <window.Languages />,
    document.getElementById('languages')
);

