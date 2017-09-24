window.Awards = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="mx-auto">
                <h3>Awards</h3>
                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle img-fluid" src="styles/img/microsoft.png" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Microsoft</h4>
                        <h6 className="media-heading">Ottobre 2015</h6>
                        <p>MCPD: Enterprise Application Developer</p>
                    </div>
                </div>
                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle img-fluid" src="styles/img/sitecore.jpg" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Sitecore</h4>
                        <h6 className="media-heading">Ottobre 2015</h6>
                        <p>Sitecore CMS 6.5 Certified Professional Developer</p>
                    </div>
                </div>

                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle img-fluid" src="styles/img/coursera.png" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Microsoft</h4>
                        <h6 className="media-heading">Ottobre 2015</h6>
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