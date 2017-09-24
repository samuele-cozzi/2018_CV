"use strict";

window.Card = React.createClass({
    displayName: "Card",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return (
            // <div className="card card-cascade mb-1">
            //     <div className="view gradient-card-header elegant-color-dark text-center">
            //         <h2 className="h2-responsive white-text mt-1">Alan Doe</h2>
            //         <p className="white-text">Developer</p>
            //     </div>
            //     <div className="card-body">
            //         <p><a className="icons-sm"><i className="fa fa-twitter"> @samu_tech</i></a></p>
            //         <p><a className="icons-sm" href="https://www.linkedin.com/in/samuele-cozzi-02650119/"><i className="fa fa-linkedin"> samuele-cozzi</i></a></p>
            //         <p><a className="icons-sm"><i className="fa fa-github"> samuele-cozzi</i></a></p>
            //         <p><a className="icons-sm"><i className="fa fa-envelope"> samuele.cozzi@gmail.com</i></a></p>
            //     </div>

            // </div>

            React.createElement(
                "div",
                { className: "card" },
                React.createElement(
                    "div",
                    { className: "card-header text-center" },
                    React.createElement(
                        "h2",
                        { className: "card-title white-text" },
                        React.createElement(
                            "strong",
                            null,
                            "Alan Doe"
                        )
                    ),
                    React.createElement(
                        "h4",
                        { className: "indigo-text" },
                        React.createElement(
                            "strong",
                            null,
                            "Senior Developer"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "card-body text-center" },
                    React.createElement(
                        "p",
                        { className: "card-text" },
                        React.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                        " Milan Area"
                    ),
                    React.createElement(
                        "a",
                        { className: "icons-sm li-ic" },
                        React.createElement(
                            "i",
                            { className: "fa fa-linkedin" },
                            " "
                        )
                    ),
                    React.createElement(
                        "a",
                        { className: "icons-sm tw-ic" },
                        React.createElement(
                            "i",
                            { className: "fa fa-twitter" },
                            " "
                        )
                    ),
                    React.createElement(
                        "a",
                        { className: "icons-sm fb-ic" },
                        React.createElement(
                            "i",
                            { className: "fa fa-facebook" },
                            " "
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Card, null), document.getElementById('card'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIkNhcmQiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxJQUFQLEdBQWNDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUJDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUgyQjtBQUk1QkMsWUFBUSxrQkFBWTtBQUNoQjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQTtBQUFBLGtCQUFLLFdBQVUsTUFBZjtBQUVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLHlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QyxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLGFBQWQ7QUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUZKLGlCQUZKO0FBT0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsdUJBQWY7QUFHSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxXQUFiO0FBQXlCLG1EQUFHLFdBQVUsa0JBQWIsRUFBZ0MsZUFBWSxNQUE1QyxHQUF6QjtBQUFBO0FBQUEscUJBSEo7QUFLSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUE4QjtBQUFBO0FBQUEsOEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBOUIscUJBTEo7QUFNSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUE4QjtBQUFBO0FBQUEsOEJBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQTtBQUE5QixxQkFOSjtBQU9JO0FBQUE7QUFBQSwwQkFBRyxXQUFVLGdCQUFiO0FBQThCO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQUE5QjtBQVBKO0FBUEo7QUFmSjtBQWtDSDtBQXZDMkIsQ0FBbEIsQ0FBZDs7QUEwQ0FDLFNBQVNELE1BQVQsQ0FDSSxvQkFBQyxNQUFELENBQVEsSUFBUixPQURKLEVBRUlFLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSiIsImZpbGUiOiJDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtY2FzY2FkZSBtYi0xXCI+XHJcbiAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXcgZ3JhZGllbnQtY2FyZC1oZWFkZXIgZWxlZ2FudC1jb2xvci1kYXJrIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyLXJlc3BvbnNpdmUgd2hpdGUtdGV4dCBtdC0xXCI+QWxhbiBEb2U8L2gyPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5EZXZlbG9wZXI8L3A+XHJcbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPHA+PGEgY2xhc3NOYW1lPVwiaWNvbnMtc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+IEBzYW11X3RlY2g8L2k+PC9hPjwvcD5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8cD48YSBjbGFzc05hbWU9XCJpY29ucy1zbVwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FtdWVsZS1jb3p6aS0wMjY1MDExOS9cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiPiBzYW11ZWxlLWNvenppPC9pPjwvYT48L3A+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPHA+PGEgY2xhc3NOYW1lPVwiaWNvbnMtc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIj4gc2FtdWVsZS1jb3p6aTwvaT48L2E+PC9wPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxwPjxhIGNsYXNzTmFtZT1cImljb25zLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIj4gc2FtdWVsZS5jb3p6aUBnbWFpbC5jb208L2k+PC9hPjwvcD5cclxuICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgLy8gPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+QWxhbiBEb2U8L3N0cm9uZz48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJpbmRpZ28tdGV4dFwiPjxzdHJvbmc+U2VuaW9yIERldmVsb3Blcjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBNaWxhbiBBcmVhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29ucy1zbSBsaS1pY1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCI+IDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbnMtc20gdHctaWNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+IDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbnMtc20gZmItaWNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiPiA8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDx3aW5kb3cuQ2FyZCAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkJylcclxuKTsiXX0=
