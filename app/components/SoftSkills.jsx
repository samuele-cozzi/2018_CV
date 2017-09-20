window.SoftSkills = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  Soft Skills
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.SoftSkills />,
    document.getElementById('soft-skills') 
  );