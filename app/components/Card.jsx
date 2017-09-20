window.Card = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="card card-cascade mb-1">
                <div className="view gradient-card-header elegant-color-dark text-center">
                    <h2 className="h2-responsive white-text mt-1">Alan Doe</h2>
                    <p className="white-text">Developer</p>
                </div>
                <div className="card-body">
                    <p><a className="icons-sm"><i className="fa fa-twitter"> @samu_tech</i></a></p>
                    <p><a className="icons-sm" href="https://www.linkedin.com/in/samuele-cozzi-02650119/"><i className="fa fa-linkedin"> samuele-cozzi</i></a></p>
                    <p><a className="icons-sm"><i className="fa fa-github"> samuele-cozzi</i></a></p>
                    <p><a className="icons-sm"><i className="fa fa-envelope"> samuele.cozzi@gmail.com</i></a></p>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <window.Card />,
    document.getElementById('card')
);