window.Languages = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function() {
        var _options = { 
            legend: { display: false },
            rotation: Math.PI ,
            circumference: Math.PI
        };

        var _showOptions = {
            donut: true,
            donutWidth: 10,
            donutSolid: true,
            startAngle: 270,
            total: 200,
            showLabel: false
          };

        new Chartist.Pie('#italian-read', {series: [100, 0]}, _showOptions);
        new Chartist.Pie('#italian-write', {series: [100, 0]}, _showOptions);
        new Chartist.Pie('#italian-speak', {series: [100, 0]}, _showOptions);

        new Chartist.Pie('#english-read', {series: [80, 20]}, _showOptions);
        new Chartist.Pie('#english-write', {series: [80, 20]}, _showOptions);
        new Chartist.Pie('#english-speak', {series: [80, 20]}, _showOptions);
    },
    render: function () {
        return (
            <div className="languages mx-auto mb-1">
                <div className="row ">
                    <div className="col-md-12">
                        <h4>Italiano</h4>
                    </div>
                    <div className="col-xs-4 col-sm-4 text-center">
                        <h6>Letto</h6>
                        <div id="italian-read"></div>                        
                    </div>
                    <div className="col-xs-4 col-sm-4 text-center">
                        <h6>Scritto</h6>
                        <div id="italian-write"></div>
                    </div>
                    <div className="col-xs-4 col-sm-4 text-center">
                        <h6>Parlato</h6>
                        <div id="italian-speak"></div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h4>Inglese</h4>
                    </div>

                    <div className="col-xs-4 col-sm-4 text-center">
                        <h6>Letto</h6>
                        <div id="english-read"></div>                        
                    </div>
                    <div className="col-xs-4 col-sm-4 text-center">
                        <h6>Scritto</h6>
                        <div id="english-write"></div>
                    </div>
                    <div className="col-xs-4 col-sm-4 text-center">
                        <h6>Parlato</h6>
                        <div id="english-speak"></div>
                    </div>

                </div>

            </div>
        );
    }
});

ReactDOM.render(
    <window.Languages />,
    document.getElementById('languages')
);

