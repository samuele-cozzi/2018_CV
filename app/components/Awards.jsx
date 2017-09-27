window.Awards = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="mx-auto">
                <h4>Awards</h4>
                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle img-fluid" src="images/coursera.png" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Coursera</h5>
                        <h6 className="media-heading">Ottobre 2016</h6>
                        <p>Machine Learning</p>
                    </div>
                </div>
                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle img-fluid" src="images/sitecore.jpg" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Sitecore</h5>
                        <h6 className="media-heading">Marzo 2012</h6>
                        <p>Sitecore CMS 6.5 Certified Professional Developer</p>
                    </div>
                </div>

                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle img-fluid" src="images/microsoft.png" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Microsoft</h5>
                        <h6 className="media-heading">Marzo 2008</h6>
                        <p>MCPD: Enterprise Application Developer</p>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <window.Awards />,
    document.getElementById('awards')
);