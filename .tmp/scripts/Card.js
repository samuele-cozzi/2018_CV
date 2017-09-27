"use strict";

window.Card = React.createClass({
    displayName: "Card",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "card mb-1" },
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
                    { className: "white-text" },
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
                    " Nerviano 20014, Milan Area"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    React.createElement("i", { className: "fa fa-calendar", "aria-hidden": "true" }),
                    " 5 settembre 1981"
                ),
                React.createElement(
                    "a",
                    { className: "icons-sm li-ic", target: "_blank", href: "https://www.linkedin.com/in/samuele-cozzi-02650119/" },
                    React.createElement(
                        "i",
                        { className: "fa fa-linkedin" },
                        " "
                    )
                ),
                React.createElement(
                    "a",
                    { className: "icons-sm tw-ic", target: "_blank", href: "https://twitter.com/samu_tech" },
                    React.createElement(
                        "i",
                        { className: "fa fa-twitter" },
                        " "
                    )
                ),
                React.createElement(
                    "a",
                    { className: "icons-sm fb-ic", target: "_blank", href: "https://github.com/samuele-cozzi" },
                    React.createElement(
                        "i",
                        { className: "fa fa-github" },
                        " "
                    )
                ),
                React.createElement(
                    "a",
                    { className: "icons-sm", target: "_blank", href: "mailto:samuele.cozzi@gmail.com" },
                    React.createElement(
                        "i",
                        { className: "fa fa-envelope" },
                        " "
                    )
                ),
                React.createElement(
                    "a",
                    { className: "icons-sm", target: "_blank", href: "https://drive.google.com/open?id=0B8BgVMJWK7LceUxQZ0o3c3R5NFk" },
                    React.createElement(
                        "i",
                        { className: "fa fa-cloud-download" },
                        " "
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Card, null), document.getElementById('card'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIkNhcmQiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxJQUFQLEdBQWNDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUJDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUgyQjtBQUk1QkMsWUFBUSxrQkFBWTtBQUNoQixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUVJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHlCQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QyxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLFlBQWQ7QUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQjtBQUZKLGFBRko7QUFPSTtBQUFBO0FBQUEsa0JBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLFdBQWI7QUFBeUIsK0NBQUcsV0FBVSxrQkFBYixFQUFnQyxlQUFZLE1BQTVDLEdBQXpCO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLFdBQWI7QUFBeUIsK0NBQUcsV0FBVSxnQkFBYixFQUE4QixlQUFZLE1BQTFDLEdBQXpCO0FBQUE7QUFBQSxpQkFGSjtBQUlJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGdCQUFiLEVBQThCLFFBQVEsUUFBdEMsRUFBK0MsTUFBSyxxREFBcEQ7QUFBMEc7QUFBQTtBQUFBLDBCQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBQTFHLGlCQUpKO0FBS0k7QUFBQTtBQUFBLHNCQUFHLFdBQVUsZ0JBQWIsRUFBOEIsUUFBUSxRQUF0QyxFQUErQyxNQUFLLCtCQUFwRDtBQUFvRjtBQUFBO0FBQUEsMEJBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQTtBQUFwRixpQkFMSjtBQU1JO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGdCQUFiLEVBQThCLFFBQVEsUUFBdEMsRUFBK0MsTUFBSyxrQ0FBcEQ7QUFBdUY7QUFBQTtBQUFBLDBCQUFHLFdBQVUsY0FBYjtBQUFBO0FBQUE7QUFBdkYsaUJBTko7QUFPSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxVQUFiLEVBQXdCLFFBQVEsUUFBaEMsRUFBeUMsTUFBSyxnQ0FBOUM7QUFBK0U7QUFBQTtBQUFBLDBCQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBQS9FLGlCQVBKO0FBUUk7QUFBQTtBQUFBLHNCQUFHLFdBQVUsVUFBYixFQUF3QixRQUFRLFFBQWhDLEVBQXlDLE1BQUssK0RBQTlDO0FBQThHO0FBQUE7QUFBQSwwQkFBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQUE5RztBQVJKO0FBUEosU0FESjtBQXFCSDtBQTFCMkIsQ0FBbEIsQ0FBZDs7QUE2QkFDLFNBQVNELE1BQVQsQ0FDSSxvQkFBQyxNQUFELENBQVEsSUFBUixPQURKLEVBRUlFLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSiIsImZpbGUiOiJDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTFcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+QWxhbiBEb2U8L3N0cm9uZz48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+PHN0cm9uZz5TZW5pb3IgRGV2ZWxvcGVyPC9zdHJvbmc+PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gTmVydmlhbm8gMjAwMTQsIE1pbGFuIEFyZWE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDUgc2V0dGVtYnJlIDE5ODE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zLXNtIGxpLWljXCIgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FtdWVsZS1jb3p6aS0wMjY1MDExOS9cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiPiA8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zLXNtIHR3LWljXCIgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NhbXVfdGVjaFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj4gPC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29ucy1zbSBmYi1pY1wiIHRhcmdldCA9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NhbXVlbGUtY296emlcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIj4gPC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29ucy1zbVwiIHRhcmdldCA9XCJfYmxhbmtcIiBocmVmPVwibWFpbHRvOnNhbXVlbGUuY296emlAZ21haWwuY29tXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIj4gPC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29ucy1zbVwiIHRhcmdldCA9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL29wZW4/aWQ9MEI4QmdWTUpXSzdMY2VVeFFaMG8zYzNSNU5Ga1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3VkLWRvd25sb2FkXCI+IDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5DYXJkIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQnKVxyXG4pOyJdfQ==
