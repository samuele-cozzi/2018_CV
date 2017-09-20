"use strict";

// import React from 'react';

// class AboutMe extends React.Component {

//     componentDidMount() {
//         console.log("AboutMe: componentDidMount");
//     }

//     render() {
//         return (
//             <div>
//                 <h2 class="h2-responsive">About me</h2>
//                 <p>vamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,
//                         nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur
//                         ac, vestibulum at eros.</p>
//             </div>
//         );
//     }
// }

window.AboutMe = React.createClass({
  displayName: "AboutMe",

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "h2-responsive" },
        "About me"
      ),
      React.createElement(
        "p",
        null,
        "vamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
      )
    );
  }
});

ReactDOM.render(React.createElement(window.AboutMe, null), document.getElementById('about-me'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFib3V0TWUuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIkFib3V0TWUiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCQyxNQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDQyxtQkFBaUIsMkJBQVc7QUFDMUIsV0FBTyxFQUFQO0FBQ0QsR0FIZ0M7QUFJakNDLFVBQVEsa0JBQVc7QUFDYixXQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxVQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsT0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixLQURKO0FBUUg7QUFiOEIsQ0FBbEIsQ0FBakI7O0FBZ0JBQyxTQUFTRCxNQUFULENBQ0Usb0JBQUMsTUFBRCxDQUFRLE9BQVIsT0FERixFQUVFRSxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBRkYiLCJmaWxlIjoiQWJvdXRNZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBjbGFzcyBBYm91dE1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbi8vICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkFib3V0TWU6IGNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaDItcmVzcG9uc2l2ZVwiPkFib3V0IG1lPC9oMj5cclxuLy8gICAgICAgICAgICAgICAgIDxwPnZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuIER1aXMgbW9sbGlzLCBlc3Qgbm9uIGNvbW1vZG8gbHVjdHVzLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBuaXNpIGVyYXQgcG9ydHRpdG9yIGxpZ3VsYSwgZWdldCBsYWNpbmlhIG9kaW8gc2VtIG5lYyBlbGl0LiBNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuPC9wPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG53aW5kb3cuQWJvdXRNZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyLXJlc3BvbnNpdmVcIj5BYm91dCBtZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD52YW11cyBzYWdpdHRpcyBsYWN1cyB2ZWwgYXVndWUgbGFvcmVldCBydXRydW0gZmF1Y2lidXMgZG9sb3IgYXVjdG9yLiBEdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlzaSBlcmF0IHBvcnR0aXRvciBsaWd1bGEsIGVnZXQgbGFjaW5pYSBvZGlvIHNlbSBuZWMgZWxpdC4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYywgdmVzdGlidWx1bSBhdCBlcm9zLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPHdpbmRvdy5BYm91dE1lIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1tZScpIFxyXG4pOyJdfQ==
