"use strict";

window.Card = React.createClass({
    displayName: "Card",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
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
                        "Samuele Cozzi"
                    )
                ),
                React.createElement(
                    "h5",
                    { className: "white-text" },
                    "Web Solution Architect, Senior .NET Software Engineer"
                )
            ),
            React.createElement(
                "div",
                { className: "card-body text-center" },
                React.createElement(
                    "p",
                    { className: "card-text" },
                    React.createElement("i", { className: "fa fa-calendar", "aria-hidden": "true" }),
                    " 5 settembre 1981"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    React.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                    " Nerviano 20014, Milan Area, Italy"
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcmQuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIkNhcmQiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxJQUFQLEdBQWNDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUJDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUgyQjtBQUk1QkMsWUFBUSxrQkFBWTtBQUNoQixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUVJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHlCQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QyxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLFlBQWQ7QUFBQTtBQUFBO0FBRkosYUFGSjtBQU9JO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFHLFdBQVUsV0FBYjtBQUF5QiwrQ0FBRyxXQUFVLGdCQUFiLEVBQThCLGVBQVksTUFBMUMsR0FBekI7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFHLFdBQVUsV0FBYjtBQUF5QiwrQ0FBRyxXQUFVLGtCQUFiLEVBQWdDLGVBQVksTUFBNUMsR0FBekI7QUFBQTtBQUFBLGlCQUZKO0FBS0k7QUFBQTtBQUFBLHNCQUFHLFdBQVUsZ0JBQWIsRUFBOEIsUUFBUSxRQUF0QyxFQUErQyxNQUFLLHFEQUFwRDtBQUEwRztBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBMUcsaUJBTEo7QUFNSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxnQkFBYixFQUE4QixRQUFRLFFBQXRDLEVBQStDLE1BQUssK0JBQXBEO0FBQW9GO0FBQUE7QUFBQSwwQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBO0FBQXBGLGlCQU5KO0FBT0k7QUFBQTtBQUFBLHNCQUFHLFdBQVUsZ0JBQWIsRUFBOEIsUUFBUSxRQUF0QyxFQUErQyxNQUFLLGtDQUFwRDtBQUF1RjtBQUFBO0FBQUEsMEJBQUcsV0FBVSxjQUFiO0FBQUE7QUFBQTtBQUF2RixpQkFQSjtBQVFJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLFVBQWIsRUFBd0IsUUFBUSxRQUFoQyxFQUF5QyxNQUFLLGdDQUE5QztBQUErRTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBL0UsaUJBUko7QUFTSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxVQUFiLEVBQXdCLFFBQVEsUUFBaEMsRUFBeUMsTUFBSywrREFBOUM7QUFBOEc7QUFBQTtBQUFBLDBCQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBO0FBQTlHO0FBVEo7QUFQSixTQURKO0FBc0JIO0FBM0IyQixDQUFsQixDQUFkOztBQThCQUMsU0FBU0QsTUFBVCxDQUNJLG9CQUFDLE1BQUQsQ0FBUSxJQUFSLE9BREosRUFFSUUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZKIiwiZmlsZSI6IkNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuQ2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+U2FtdWVsZSBDb3p6aTwvc3Ryb25nPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5XZWIgU29sdXRpb24gQXJjaGl0ZWN0LCBTZW5pb3IgLk5FVCBTb2Z0d2FyZSBFbmdpbmVlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA1IHNldHRlbWJyZSAxOTgxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IE5lcnZpYW5vIDIwMDE0LCBNaWxhbiBBcmVhLCBJdGFseTwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbnMtc20gbGktaWNcIiB0YXJnZXQgPVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW11ZWxlLWNvenppLTAyNjUwMTE5L1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCI+IDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbnMtc20gdHctaWNcIiB0YXJnZXQgPVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vc2FtdV90ZWNoXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPiA8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zLXNtIGZiLWljXCIgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2FtdWVsZS1jb3p6aVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YlwiPiA8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zLXNtXCIgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9XCJtYWlsdG86c2FtdWVsZS5jb3p6aUBnbWFpbC5jb21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiPiA8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zLXNtXCIgdGFyZ2V0ID1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vb3Blbj9pZD0wQjhCZ1ZNSldLN0xjZVV4UVowbzNjM1I1TkZrXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvdWQtZG93bmxvYWRcIj4gPC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8d2luZG93LkNhcmQgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZCcpXHJcbik7Il19
