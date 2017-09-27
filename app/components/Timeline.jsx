window.Timeline = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div className="timeline">
        <h2 className="badge title">2013</h2>

        <ul>
          <li>
            <div li className="badge title pin"><i className="fa fa-camera" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> 26.07.2017</p>
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
          <div li className="badge title pin"><i className="fa fa-camera" aria-hidden="true"></i></div>
          <div className="card item">

            <div className="card-header">
              <p className="white-text card-text"><i className="fa fa-calendar"></i> 26.07.2017</p>
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
            <div li className="badge title pin"><i className="fa fa-camera" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> 26.07.2017</p>
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
            <div li className="badge title pin"><i className="fa fa-camera" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> 26.07.2017</p>
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
        </ul>

        <h2 className="badge title badge-default">2012</h2>
        <ul>
        <li>
        <div li className="badge title pin"><i className="fa fa-camera" aria-hidden="true"></i></div>
        <div className="card item">

          <div className="card-header">
            <p className="white-text card-text"><i className="fa fa-calendar"></i> 26.07.2017</p>
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
      </li><li>
            <div li className="badge title pin"><i className="fa fa-camera" aria-hidden="true"></i></div>
            <div className="card item">

              <div className="card-header">
                <p className="white-text card-text"><i className="fa fa-calendar"></i> 26.07.2017</p>
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

        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <window.Timeline />,
  document.getElementById('timeline')
);