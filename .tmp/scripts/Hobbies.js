"use strict";

window.Hobbies = React.createClass({
    displayName: "Hobbies",

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
                "Hobbies"
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2" },
                    React.createElement("i", { className: "fa fa-soccer-ball-o fa-3x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2" },
                    React.createElement("i", { className: "fa fa-code fa-3x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2" },
                    React.createElement("i", { className: "fa fa-music fa-3x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2" },
                    React.createElement("i", { className: "fa fa-plane fa-3x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2" },
                    React.createElement("i", { className: "fa fa-child fa-3x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-2" },
                    React.createElement("i", { className: "fa fa-camera fa-3x", "aria-hidden": "true" })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Hobbies, null), document.getElementById('hobbies'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvYmJpZXMuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIkhvYmJpZXMiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCQyxNQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQy9CQyxxQkFBaUIsMkJBQVk7QUFDekIsZUFBTyxFQUFQO0FBQ0gsS0FIOEI7QUFJL0JDLFlBQVEsa0JBQVk7QUFDaEIsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMENBQWY7QUFDSSwrQ0FBRyxXQUFVLDJCQUFiLEVBQXlDLGVBQVksTUFBckQ7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksK0NBQUcsV0FBVSxrQkFBYixFQUFnQyxlQUFZLE1BQTVDO0FBREosaUJBSko7QUFPSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwwQ0FBZjtBQUNJLCtDQUFHLFdBQVUsbUJBQWIsRUFBaUMsZUFBWSxNQUE3QztBQURKLGlCQVBKO0FBVUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMENBQWY7QUFDSSwrQ0FBRyxXQUFVLG1CQUFiLEVBQWlDLGVBQVksTUFBN0M7QUFESixpQkFWSjtBQWFJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksK0NBQUcsV0FBVSxtQkFBYixFQUFpQyxlQUFZLE1BQTdDO0FBREosaUJBYko7QUFnQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMENBQWY7QUFDSSwrQ0FBRyxXQUFVLG9CQUFiLEVBQWtDLGVBQVksTUFBOUM7QUFESjtBQWhCSjtBQUhKLFNBREo7QUEwQkg7QUEvQjhCLENBQWxCLENBQWpCOztBQWtDQUMsU0FBU0QsTUFBVCxDQUNJLG9CQUFDLE1BQUQsQ0FBUSxPQUFSLE9BREosRUFFSUUsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQUZKIiwiZmlsZSI6IkhvYmJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuSG9iYmllcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxoND5Ib2JiaWVzPC9oND5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc29jY2VyLWJhbGwtbyBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29kZSBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbXVzaWMgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsYW5lIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTMgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGlsZCBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FtZXJhIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5Ib2JiaWVzIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvYmJpZXMnKVxyXG4pOyJdfQ==
