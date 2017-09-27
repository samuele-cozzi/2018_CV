window.Tools = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  <h5>Tools</h5>
                  <img src="images/wordcloud.png" className="img-fluid"/>
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.Tools />,
    document.getElementById('tools') 
  );