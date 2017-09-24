window.TechAreas = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  Tech Areas
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.TechAreas />,
    document.getElementById('tech-areas') 
  );