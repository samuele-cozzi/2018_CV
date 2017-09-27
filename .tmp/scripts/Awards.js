"use strict";

window.Awards = React.createClass({
    displayName: "Awards",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "mx-auto" },
            React.createElement(
                "h4",
                null,
                "Awards"
            ),
            React.createElement(
                "div",
                { className: "media mb-1" },
                React.createElement(
                    "a",
                    { className: "media-left waves-light" },
                    React.createElement("img", { className: "rounded-circle img-fluid", src: "images/coursera.png", alt: "Generic placeholder image" })
                ),
                React.createElement(
                    "div",
                    { className: "media-body" },
                    React.createElement(
                        "h5",
                        { className: "media-heading" },
                        "Coursera"
                    ),
                    React.createElement(
                        "h6",
                        { className: "media-heading" },
                        "Ottobre 2016"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "MCPD: Enterprise Application Developer"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "media mb-1" },
                React.createElement(
                    "a",
                    { className: "media-left waves-light" },
                    React.createElement("img", { className: "rounded-circle img-fluid", src: "images/sitecore.jpg", alt: "Generic placeholder image" })
                ),
                React.createElement(
                    "div",
                    { className: "media-body" },
                    React.createElement(
                        "h5",
                        { className: "media-heading" },
                        "Sitecore"
                    ),
                    React.createElement(
                        "h6",
                        { className: "media-heading" },
                        "Ottobre 2015"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Sitecore CMS 6.5 Certified Professional Developer"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "media mb-1" },
                React.createElement(
                    "a",
                    { className: "media-left waves-light" },
                    React.createElement("img", { className: "rounded-circle img-fluid", src: "images/microsoft.png", alt: "Generic placeholder image" })
                ),
                React.createElement(
                    "div",
                    { className: "media-body" },
                    React.createElement(
                        "h5",
                        { className: "media-heading" },
                        "Microsoft"
                    ),
                    React.createElement(
                        "h6",
                        { className: "media-heading" },
                        "Ottobre 2015"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "MCPD: Enterprise Application Developer"
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Awards, null), document.getElementById('awards'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF3YXJkcy5qc3giXSwibmFtZXMiOlsid2luZG93IiwiQXdhcmRzIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsTUFBUCxHQUFnQkMsTUFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUM5QkMscUJBQWlCLDJCQUFZO0FBQ3pCLGVBQU8sRUFBUDtBQUNILEtBSDZCO0FBSTlCQyxZQUFRLGtCQUFZO0FBQ2hCLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLHdCQUFiO0FBQ0ksaURBQUssV0FBVSwwQkFBZixFQUEwQyxLQUFJLHFCQUE5QyxFQUFvRSxLQUFJLDJCQUF4RTtBQURKLGlCQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEscUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFKSixhQUZKO0FBWUk7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLHdCQUFiO0FBQ0ksaURBQUssV0FBVSwwQkFBZixFQUEwQyxLQUFJLHFCQUE5QyxFQUFvRSxLQUFJLDJCQUF4RTtBQURKLGlCQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEscUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFKSixhQVpKO0FBdUJJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSx3QkFBYjtBQUNJLGlEQUFLLFdBQVUsMEJBQWYsRUFBMEMsS0FBSSxzQkFBOUMsRUFBcUUsS0FBSSwyQkFBekU7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLHFCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBSko7QUF2QkosU0FESjtBQW9DSDtBQXpDNkIsQ0FBbEIsQ0FBaEI7O0FBNENBQyxTQUFTRCxNQUFULENBQ0ksb0JBQUMsTUFBRCxDQUFRLE1BQVIsT0FESixFQUVJRSxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBRkoiLCJmaWxlIjoiQXdhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkF3YXJkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxoND5Bd2FyZHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCB3YXZlcy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGltZy1mbHVpZFwiIHNyYz1cImltYWdlcy9jb3Vyc2VyYS5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+Q291cnNlcmE8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPk90dG9icmUgMjAxNjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1DUEQ6IEVudGVycHJpc2UgQXBwbGljYXRpb24gRGV2ZWxvcGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IHdhdmVzLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgaW1nLWZsdWlkXCIgc3JjPVwiaW1hZ2VzL3NpdGVjb3JlLmpwZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5TaXRlY29yZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+T3R0b2JyZSAyMDE1PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2l0ZWNvcmUgQ01TIDYuNSBDZXJ0aWZpZWQgUHJvZmVzc2lvbmFsIERldmVsb3BlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgd2F2ZXMtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBpbWctZmx1aWRcIiBzcmM9XCJpbWFnZXMvbWljcm9zb2Z0LnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5NaWNyb3NvZnQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPk90dG9icmUgMjAxNTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1DUEQ6IEVudGVycHJpc2UgQXBwbGljYXRpb24gRGV2ZWxvcGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5Bd2FyZHMgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXdhcmRzJylcclxuKTsiXX0=
