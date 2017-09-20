"use strict";

window.Card = React.createClass({
    displayName: "Card",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "card card-cascade mb-1" },
            React.createElement(
                "div",
                { className: "view gradient-card-header elegant-color-dark text-center" },
                React.createElement(
                    "h2",
                    { className: "h2-responsive white-text mt-1" },
                    "Alan Doe"
                ),
                React.createElement(
                    "p",
                    { className: "white-text" },
                    "Developer"
                )
            ),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { className: "icons-sm" },
                        React.createElement(
                            "i",
                            { className: "fa fa-twitter" },
                            " @samu_tech"
                        )
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { className: "icons-sm", href: "https://www.linkedin.com/in/samuele-cozzi-02650119/" },
                        React.createElement(
                            "i",
                            { className: "fa fa-linkedin" },
                            " samuele-cozzi"
                        )
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { className: "icons-sm" },
                        React.createElement(
                            "i",
                            { className: "fa fa-github" },
                            " samuele-cozzi"
                        )
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { className: "icons-sm" },
                        React.createElement(
                            "i",
                            { className: "fa fa-envelope" },
                            " samuele.cozzi@gmail.com"
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Card, null), document.getElementById('card'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIkNhcmQiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxJQUFQLEdBQWNDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUJDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUgyQjtBQUk1QkMsWUFBUSxrQkFBWTtBQUNoQixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsd0JBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSwwREFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLCtCQUFkO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLFlBQWI7QUFBQTtBQUFBO0FBRkosYUFESjtBQUtJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUEsMEJBQUcsV0FBVSxVQUFiO0FBQXdCO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBQXhCO0FBQUgsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUEsMEJBQUcsV0FBVSxVQUFiLEVBQXdCLE1BQUsscURBQTdCO0FBQW1GO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQUFuRjtBQUFILGlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBLDBCQUFHLFdBQVUsVUFBYjtBQUF3QjtBQUFBO0FBQUEsOEJBQUcsV0FBVSxjQUFiO0FBQUE7QUFBQTtBQUF4QjtBQUFILGlCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBLDBCQUFHLFdBQVUsVUFBYjtBQUF3QjtBQUFBO0FBQUEsOEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBeEI7QUFBSDtBQUpKO0FBTEosU0FESjtBQWNIO0FBbkIyQixDQUFsQixDQUFkOztBQXNCQUMsU0FBU0QsTUFBVCxDQUNJLG9CQUFDLE1BQUQsQ0FBUSxJQUFSLE9BREosRUFFSUUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZKIiwiZmlsZSI6IkNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuQ2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1jYXNjYWRlIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldyBncmFkaWVudC1jYXJkLWhlYWRlciBlbGVnYW50LWNvbG9yLWRhcmsgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDItcmVzcG9uc2l2ZSB3aGl0ZS10ZXh0IG10LTFcIj5BbGFuIERvZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPkRldmVsb3BlcjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48YSBjbGFzc05hbWU9XCJpY29ucy1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj4gQHNhbXVfdGVjaDwvaT48L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxhIGNsYXNzTmFtZT1cImljb25zLXNtXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW11ZWxlLWNvenppLTAyNjUwMTE5L1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCI+IHNhbXVlbGUtY296emk8L2k+PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48YSBjbGFzc05hbWU9XCJpY29ucy1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YlwiPiBzYW11ZWxlLWNvenppPC9pPjwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgY2xhc3NOYW1lPVwiaWNvbnMtc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiPiBzYW11ZWxlLmNvenppQGdtYWlsLmNvbTwvaT48L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5DYXJkIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQnKVxyXG4pOyJdfQ==
