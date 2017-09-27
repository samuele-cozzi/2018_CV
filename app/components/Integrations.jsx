window.Integrations = React.createClass({
    getInitialState: function() {
      return {};
    },
    componentDidMount: function() {
        
    },
    render: function() {
          return (
              <div>
                  <h5>Integrations</h5>
                  <img src="images/integrations.png" className="img-fluid"/>
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.Integrations />,
    document.getElementById('integrations') 
  );