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
                        <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Microsoft</h4>
                        <h6 className="media-heading">Ottobre 2015</h6>
                        <p>MCPD: Enterprise Application Developer</p>
                    </div>
                </div>
                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Sitecore</h4>
                        <h6 className="media-heading">Ottobre 2015</h6>
                        <p>Sitecore CMS 6.5 Certified Professional Developer</p>
                    </div>
                </div>

                <div className="media mb-1">
                    <a className="media-left waves-light">
                        <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg" alt="Generic placeholder image" />
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