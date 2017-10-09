window.Timeline = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div className="timeline">
        <h2 className="badge title">2017</h2>

        <ul>
          <li>
            <div li className="badge title pin"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> Dicembre 2014 - oggi</p>
                <h5 className="card-title white-text"><strong>Manager @Soprasteria</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Ho seguito progetti di varia natura nell'ambito eCommerce
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
                <p className="white-text card-text"><i className="fa fa-calendar"></i> dal 2012 - al 2014</p>
                <h5 className="card-title white-text"><strong>Solution Architect @Soprasteria</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Progetto per l'erogazione di servizi professionali (Back Office, Tablet e BI)
              </p>
                <p className="card-text">
                  Progetto di integrazione per la fatturazione
              </p>
                <span className="badge">Supply chain</span>
                <span className="badge">Integration Layer</span>
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
                <p className="white-text card-text"><i className="fa fa-calendar"></i> dal 2008 - al 2012</p>
                <h5 className="card-title white-text"><strong>sr. Developer @Avanade</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Progetto per la manutenzione evolutiva della piattaforma italiana
                </p>
                <p className="card-text">
                  Progetto di un portale di Backoffice per la gestione dei PdV
                </p>
                <p className="card-text">
                  Progetto di un sito web realizzato con Sitecore
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
                <p className="white-text card-text"><i className="fa fa-calendar"></i> dal 2006 - al 2008</p>
                <h5 className="card-title white-text"><strong>Developer @Avanade</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Progetto internazionale per estendere la piattaforma italiana ad altre nazioni europee del gruppo
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
                <p className="white-text card-text"><i className="fa fa-calendar"></i> Ottobre 2006</p>
                <h5 className="card-title white-text"><strong>Laurea in Fisica</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">
                  Tesi: "" (indirizzo biofisica)
            </p>
                <span className="badge">Università degli studi di Milano</span>
              </div>

            </div>
          </li>
          <li>
            <div li className="badge title pin"><i className="fa fa-book" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> Luglio 2000</p>
                <h5 className="card-title white-text"><strong>Dipolma Maturità Scientifica</strong></h5>
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