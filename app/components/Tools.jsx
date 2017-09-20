window.Tools = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  Tools
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.Tools />,
    document.getElementById('tools') 
  );