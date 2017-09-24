window.Card = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            // <div className="card card-cascade mb-1">
            //     <div className="view gradient-card-header elegant-color-dark text-center">
            //         <h2 className="h2-responsive white-text mt-1">Alan Doe</h2>
            //         <p className="white-text">Developer</p>
            //     </div>
            //     <div className="card-body">
            //         <p><a className="icons-sm"><i className="fa fa-twitter"> @samu_tech</i></a></p>
            //         <p><a className="icons-sm" href="https://www.linkedin.com/in/samuele-cozzi-02650119/"><i className="fa fa-linkedin"> samuele-cozzi</i></a></p>
            //         <p><a className="icons-sm"><i className="fa fa-github"> samuele-cozzi</i></a></p>
            //         <p><a className="icons-sm"><i className="fa fa-envelope"> samuele.cozzi@gmail.com</i></a></p>
            //     </div>

            // </div>

            <div className="card">

                <div className="card-header text-center">
                    <h2 className="card-title white-text"><strong>Alan Doe</strong></h2>
                    <h4 className="indigo-text"><strong>Senior Developer</strong></h4>
                </div>

                <div className="card-body text-center">
                    

                    <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true"></i> Milan Area</p>

                    <a className="icons-sm li-ic"><i className="fa fa-linkedin"> </i></a>
                    <a className="icons-sm tw-ic"><i className="fa fa-twitter"> </i></a>
                    <a className="icons-sm fb-ic"><i className="fa fa-facebook"> </i></a>
                </div>

            </div>
        );
    }
});

ReactDOM.render(
    <window.Card />,
    document.getElementById('card')
);