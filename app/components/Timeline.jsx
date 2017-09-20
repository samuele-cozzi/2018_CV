window.Timeline = React.createClass({
    getInitialState: function() {
      return {};
    },
    render: function() {
          return (
              <div>
                  Timeline
              </div>
          );
      }
  });
  
  ReactDOM.render(
    <window.Timeline />,
    document.getElementById('timeline') 
  );