window.Hobbies = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="mx-auto">
                <h3>Hobbies</h3>
                
                <div className="row">
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <i className="fa fa-soccer-ball-o fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <i className="fa fa-soccer-ball-o fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <i className="fa fa-soccer-ball-o fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <i className="fa fa-soccer-ball-o fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <i className="fa fa-soccer-ball-o fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
                        <i className="fa fa-soccer-ball-o fa-4x" aria-hidden="true"></i>
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