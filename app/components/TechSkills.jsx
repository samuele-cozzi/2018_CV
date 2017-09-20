window.TechSkills = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  Tech Skills
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.TechSkills />,
    document.getElementById('tech-skills') 
  );