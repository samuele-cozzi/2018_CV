window.TechAreas = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="mx-auto">
                <div className="row">
                <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/Code.svg" className="img-fluid" alt="Code" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/Internet.svg" className="img-fluid" alt="Web" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/Mobile.svg" className="img-fluid" alt="Mobile" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/Microservices.svg" className="img-fluid" alt="Micro Services" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/Data.svg" className="img-fluid" alt="Data" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/Cloud.svg" className="img-fluid" alt="Cloud" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/MachineLearning.svg" className="img-fluid" alt="AI" />
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <img src="images/IoT.svg" className="img-fluid" alt="IoT" />
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <window.TechAreas />,
    document.getElementById('tech-areas')
);