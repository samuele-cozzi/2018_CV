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
            <div li className="badge title pin"><i className="fa fa-gears" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> Dicembre 2014 - oggi</p>
                <h5 className="card-title white-text"><strong>Manager @Soprasteria</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">kslfks sdm flsd fsd fk lsd fjk sdkla fj aklf
                  sajl fjsd alf ldas fsd mlfml sdmaf
                  fsa dklf dsa fasdlf sd a fmsdaflda slf sdmla fsad flsd
                   asdlf lksadfm damskflad fladsfldakfadfdpaofkpaf adfkad f adkfad l fad.
                </p>
                <span className="badge">Danger</span>
                <span className="badge">aaa</span>
                <span className="badge">c#</span>
              </div>

            </div>
          </li>
          <li>
          <div li className="badge title pin"><i className="fa fa-gears" aria-hidden="true"></i></div>
          <div className="card item">

            <div className="card-header">
              <p className="white-text card-text"><i className="fa fa-calendar"></i> dal 2012 - al 2014</p>
              <h5 className="card-title white-text"><strong>Solution Architect @Soprasteria</strong></h5>
            </div>

            <div className="card-body">
              <p className="card-text">kslfks sdm flsd fsd fk lsd fjk sdkla fj aklf
                sajl fjsd alf ldas fsd mlfml sdmaf
                fsa dklf dsa fasdlf sd a fmsdaflda slf sdmla fsad flsd
                 asdlf lksadfm damskflad fladsfldakfadfdpaofkpaf adfkad f adkfad l fad.
              </p>
              <span className="badge">Danger</span>
              <span className="badge">aaa</span>
              <span className="badge">c#</span>
            </div>

          </div>
        </li>
      </ul>
      <h2 className="badge title">2013</h2>

        <ul>
        <li>
            <div li className="badge title pin"><i className="fa fa-gears" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> dal 2008 - al 2012</p>
                <h5 className="card-title white-text"><strong>sr. Developer @Avanade</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">kslfks sdm flsd fsd fk lsd fjk sdkla fj aklf
                  sajl fjsd alf ldas fsd mlfml sdmaf
                  fsa dklf dsa fasdlf sd a fmsdaflda slf sdmla fsad flsd
                   asdlf lksadfm damskflad fladsfldakfadfdpaofkpaf adfkad f adkfad l fad.
                </p>
                <span className="badge">Danger</span>
                <span className="badge">aaa</span>
                <span className="badge">c#</span>
              </div>

            </div>
          </li>
          <li>
            <div li className="badge title pin"><i className="fa fa-gears" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> dal 2006 - al 2008</p>
                <h5 className="card-title white-text"><strong>Developer @Avanade</strong></h5>
              </div>

              <div className="card-body">
                <p className="card-text">kslfks sdm flsd fsd fk lsd fjk sdkla fj aklf
                  sajl fjsd alf ldas fsd mlfml sdmaf
                  fsa dklf dsa fasdlf sd a fmsdaflda slf sdmla fsad flsd
                   asdlf lksadfm damskflad fladsfldakfadfdpaofkpaf adfkad f adkfad l fad.
                </p>
                <span className="badge">Danger</span>
                <span className="badge">aaa</span>
                <span className="badge">c#</span>
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
      </li><li>
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