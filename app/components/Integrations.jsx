window.Integrations = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  Integrations
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.Integrations />,
    document.getElementById('integrations') 
  );