window.Card = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="card">

                <div className="card-header text-center">
                    <h2 className="card-title white-text"><strong>Samuele Cozzi</strong></h2>
                    <h5 className="white-text">Web Solution Architect, Senior .NET Software Engineer</h5>
                </div>

                <div className="card-body text-center">
                    <p className="card-text"><i className="fa fa-calendar" aria-hidden="true"></i> 5 settembre 1981</p>
                    <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true"></i> Nerviano 20014, Milan Area, Italy</p>
                    

                    <a className="icons-sm li-ic" target ="_blank" href="https://www.linkedin.com/in/samuele-cozzi-02650119/"><i className="fa fa-linkedin"> </i></a>
                    <a className="icons-sm tw-ic" target ="_blank" href="https://twitter.com/samu_tech"><i className="fa fa-twitter"> </i></a>
                    <a className="icons-sm fb-ic" target ="_blank" href="https://github.com/samuele-cozzi"><i className="fa fa-github"> </i></a>
                    <a className="icons-sm" target ="_blank" href="mailto:samuele.cozzi@gmail.com"><i className="fa fa-envelope"> </i></a>
                    <a className="icons-sm" target ="_blank" href="https://drive.google.com/open?id=0B8BgVMJWK7LceUxQZ0o3c3R5NFk"><i className="fa fa-cloud-download"> </i></a>
                </div>

            </div>
        );
    }
});

ReactDOM.render(
    <window.Card />,
    document.getElementById('card')
);