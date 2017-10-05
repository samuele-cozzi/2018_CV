window.Tools = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  <img src="images/wordcloud.png" className="img-fluid"/>
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.Tools />,
    document.getElementById('tools') 
  );