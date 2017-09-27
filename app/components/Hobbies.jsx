window.Hobbies = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="mx-auto">
                <h4>Hobbies</h4>
                
                <div className="row">
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2">
                        <i className="fa fa-soccer-ball-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2">
                        <i className="fa fa-code fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2">
                        <i className="fa fa-music fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2">
                        <i className="fa fa-plane fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2">
                        <i className="fa fa-child fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2">
                        <i className="fa fa-camera fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <window.Hobbies />,
    document.getElementById('hobbies')
);