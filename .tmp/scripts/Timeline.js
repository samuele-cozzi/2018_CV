"use strict";

window.Timeline = React.createClass({
  displayName: "Timeline",

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "timeline" },
      React.createElement(
        "h2",
        null,
        "2013"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "h3",
            null,
            "Quit my Job"
          ),
          React.createElement(
            "p",
            null,
            "One day, my boss came up to me and asked, \"Are you ready, Joe?\" Pretty much decided I wasn't ready."
          ),
          React.createElement(
            "time",
            null,
            "August 2013"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "h3",
            null,
            "Started New Job"
          ),
          React.createElement(
            "p",
            null,
            "Began work at the Button Factory. This was probably the best time of my life. I had a wife, a dog, and a family."
          ),
          React.createElement(
            "time",
            null,
            "July 2013"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "h3",
            null,
            "Changed my name to Joe"
          ),
          React.createElement(
            "p",
            null,
            "I was just sick of Josh"
          ),
          React.createElement(
            "time",
            null,
            "June 2013"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "h3",
            null,
            "Moved to Iowa"
          ),
          React.createElement(
            "p",
            null,
            "I moved to ",
            React.createElement(
              "a",
              { href: "#" },
              "Ames, Iowa"
            ),
            " and settled down into my new life."
          ),
          React.createElement(
            "time",
            null,
            "February 2013"
          )
        )
      ),
      React.createElement(
        "h2",
        null,
        "2012"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "h3",
            null,
            "Graduated College"
          ),
          React.createElement(
            "p",
            null,
            "It only took, like, two years."
          ),
          React.createElement(
            "time",
            null,
            "December 2012"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "h3",
            null,
            "Graduated Community College"
          ),
          React.createElement(
            "p",
            null,
            "Studying Aerospace Engineering."
          ),
          React.createElement(
            "time",
            null,
            "May 2012"
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(window.Timeline, null), document.getElementById('timeline'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLmpzeCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUaW1lbGluZSIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFFBQVAsR0FBa0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDaENDLG1CQUFpQiwyQkFBWTtBQUN6QixXQUFPLEVBQVA7QUFDSCxHQUgrQjtBQUloQ0MsVUFBUSxrQkFBWTtBQUNoQixXQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZjtBQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUTtBQUdSO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLFNBTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsU0FYRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFjO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBLGFBQWQ7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFoQkYsT0FIUTtBQTBCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BMUJRO0FBMkJSO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBTkY7QUEzQlEsS0FESjtBQTBDSDtBQS9DK0IsQ0FBbEIsQ0FBbEI7O0FBa0RBQyxTQUFTRCxNQUFULENBQ0ksb0JBQUMsTUFBRCxDQUFRLFFBQVIsT0FESixFQUVJRSxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBRkoiLCJmaWxlIjoiVGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuVGltZWxpbmUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZVwiPlxyXG4gICAgPGgyPjIwMTM8L2gyPlxyXG4gICAgXHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8aDM+UXVpdCBteSBKb2I8L2gzPlxyXG4gICAgICAgIDxwPk9uZSBkYXksIG15IGJvc3MgY2FtZSB1cCB0byBtZSBhbmQgYXNrZWQsIFwiQXJlIHlvdSByZWFkeSwgSm9lP1wiIFByZXR0eSBtdWNoIGRlY2lkZWQgSSB3YXNuJ3QgcmVhZHkuPC9wPlxyXG4gICAgICAgIDx0aW1lPkF1Z3VzdCAyMDEzPC90aW1lPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGgzPlN0YXJ0ZWQgTmV3IEpvYjwvaDM+XHJcbiAgICAgICAgPHA+QmVnYW4gd29yayBhdCB0aGUgQnV0dG9uIEZhY3RvcnkuIFRoaXMgd2FzIHByb2JhYmx5IHRoZSBiZXN0IHRpbWUgb2YgbXkgbGlmZS4gSSBoYWQgYSB3aWZlLCBhIGRvZywgYW5kIGEgZmFtaWx5LjwvcD5cclxuICAgICAgICA8dGltZT5KdWx5IDIwMTM8L3RpbWU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8aDM+Q2hhbmdlZCBteSBuYW1lIHRvIEpvZTwvaDM+XHJcbiAgICAgICAgPHA+SSB3YXMganVzdCBzaWNrIG9mIEpvc2g8L3A+XHJcbiAgICAgICAgPHRpbWU+SnVuZSAyMDEzPC90aW1lPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGgzPk1vdmVkIHRvIElvd2E8L2gzPlxyXG4gICAgICAgIDxwPkkgbW92ZWQgdG8gPGEgaHJlZj1cIiNcIj5BbWVzLCBJb3dhPC9hPiBhbmQgc2V0dGxlZCBkb3duIGludG8gbXkgbmV3IGxpZmUuPC9wPlxyXG4gICAgICAgIDx0aW1lPkZlYnJ1YXJ5IDIwMTM8L3RpbWU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgXHJcbiAgICA8aDI+MjAxMjwvaDI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8aDM+R3JhZHVhdGVkIENvbGxlZ2U8L2gzPlxyXG4gICAgICAgIDxwPkl0IG9ubHkgdG9vaywgbGlrZSwgdHdvIHllYXJzLjwvcD5cclxuICAgICAgICA8dGltZT5EZWNlbWJlciAyMDEyPC90aW1lPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGgzPkdyYWR1YXRlZCBDb21tdW5pdHkgQ29sbGVnZTwvaDM+XHJcbiAgICAgICAgPHA+U3R1ZHlpbmcgQWVyb3NwYWNlIEVuZ2luZWVyaW5nLjwvcD5cclxuICAgICAgICA8dGltZT5NYXkgMjAxMjwvdGltZT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8d2luZG93LlRpbWVsaW5lIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJylcclxuKTsiXX0=
