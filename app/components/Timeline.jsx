window.Timeline = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div className="timeline">
        <h2 className="badge title">2018</h2>

        <ul>
          <li>
            <div li className="badge title pin"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> from 2014 - today</p>
                <h5 className="card-title white-text"><strong>Manager @Soprasteria</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  I have managed variuos kind of projects 
                </p>
                <p className="card-text">
                  I have managed teams of 4 resources.
                </p>
                <p className="card-text">
                  I have managed the career of 15 resources.
                </p>
                <span className="badge">eCommerce</span>
                <span className="badge">Website</span>
                <span className="badge">msite</span>
                <span className="badge">app</span>
                <span className="badge">Marketplace</span>
                <span className="badge">Service platform</span>
              </div>

            </div>
          </li>
          <li>
            <div li className="badge title pin"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> from 2012 - to 2014</p>
                <h5 className="card-title white-text"><strong>Solution Architect @Soprasteria</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                I have analyzed and developed the architecture of a project about professional services (Back Office, Tablet e BI)
              </p>
                <p className="card-text">
                  I have analyzed and developed the architecture of an integration project 
              </p>
                <span className="badge">Supply chain</span>
                <span className="badge">Integration Layer</span>
                <span className="badge">eCommerce</span>
                <span className="badge">Website</span>
              </div>

            </div>
          </li>
        </ul>
        <h2 className="badge title">2013</h2>

        <ul>
          <li>
            <div li className="badge title pin"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> from 2008 - to 2012</p>
                <h5 className="card-title white-text"><strong>sr. Developer @Avanade</strong></h5>
              </div>

              <div className="card-body">
              <p className="card-text">
                  I have analyzed and developed new features of the italian application platform of and direct insurance customer
                </p>
                <p className="card-text">
                  I have analyzed and developed the architecture of a website backoffice project
                </p>
                <p className="card-text">
                  I have analyzed and developed a website project in Sitecore
                </p>
                <span className="badge">Insurance</span>
                <span className="badge">Retail</span>
                <span className="badge">Sitecore</span>
              </div>

            </div>
          </li>
          <li>
            <div li className="badge title pin"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> from 2006 - to 2008</p>
                <h5 className="card-title white-text"><strong>Developer @Avanade</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  I have analyzed and developed the extension of the italian application platform for other countries (Netherland and France)
                </p>
                <span className="badge">Insurance</span>
                <span className="badge">VB6</span>
                <span className="badge">JAVA</span>
                <span className="badge">SQL Server</span>
              </div>

            </div>
          </li>
        </ul>

        <h2 className="badge title badge-default">2007</h2>
        <ul>
          <li>
            <div li className="badge title pin"><i className="fa fa-book" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> October 2006</p>
                <h5 className="card-title white-text"><strong>Degree in physics</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Thesis:  "Mechanisms of control of firing in Golgi's neurons" (Biophysics)
            </p>
                <span className="badge">Università degli studi di Milano</span>
              </div>

            </div>
          </li>
          <li>
            <div li className="badge title pin"><i className="fa fa-book" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> July 2000</p>
                <h5 className="card-title white-text"><strong>Scientific High School Diploma</strong></h5>
              </div>
            </div>
          </li>

        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <window.Timeline />,
  document.getElementById('timeline')
);