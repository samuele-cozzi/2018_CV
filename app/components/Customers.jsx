window.Customers = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div className="mx-auto">
        <h4>Customers</h4>

        <div className="row">
          <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
            <img src="http://newsulias.it/wp-content/uploads/2017/01/newsulias4.jpg" className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
            <img src="https://vignette3.wikia.nocookie.net/logopedia/images/5/5b/Carrefour_logo.svg" className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
            <img src="https://www.joins.ch/media/fieramilano.svg" className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
            <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/49393f93000064000503f0f4/0x0.png" className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1">
            <img src="http://www.rivagroup.com/img/Rivagroup.svg" className="img-fluid" alt="Responsive image" />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <window.Customers />,
  document.getElementById('customers')
);