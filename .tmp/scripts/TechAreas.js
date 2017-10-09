"use strict";

window.TechAreas = React.createClass({
    displayName: "TechAreas",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "mx-auto" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/Code.svg", className: "img-fluid", alt: "Code" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/Internet.svg", className: "img-fluid", alt: "Web" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/Mobile.svg", className: "img-fluid", alt: "Mobile" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/Microservices.svg", className: "img-fluid", alt: "Micro Services" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/Data.svg", className: "img-fluid", alt: "Data" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/Cloud.svg", className: "img-fluid", alt: "Cloud" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/MachineLearning.svg", className: "img-fluid", alt: "AI" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("img", { src: "images/IoT.svg", className: "img-fluid", alt: "IoT" })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.TechAreas, null), document.getElementById('tech-areas'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlY2hBcmVhcy5qc3giXSwibmFtZXMiOlsid2luZG93IiwiVGVjaEFyZWFzIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsU0FBUCxHQUFtQkMsTUFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUNqQ0MscUJBQWlCLDJCQUFZO0FBQ3pCLGVBQU8sRUFBUDtBQUNILEtBSGdDO0FBSWpDQyxZQUFRLGtCQUFZO0FBQ2hCLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNBO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ1EsaURBQUssS0FBSSxpQkFBVCxFQUEyQixXQUFVLFdBQXJDLEVBQWlELEtBQUksTUFBckQ7QUFEUixpQkFEQTtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksaURBQUssS0FBSSxxQkFBVCxFQUErQixXQUFVLFdBQXpDLEVBQXFELEtBQUksS0FBekQ7QUFESixpQkFKSjtBQU9JO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksaURBQUssS0FBSSxtQkFBVCxFQUE2QixXQUFVLFdBQXZDLEVBQW1ELEtBQUksUUFBdkQ7QUFESixpQkFQSjtBQVVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksaURBQUssS0FBSSwwQkFBVCxFQUFvQyxXQUFVLFdBQTlDLEVBQTBELEtBQUksZ0JBQTlEO0FBREosaUJBVko7QUFhSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwwQ0FBZjtBQUNJLGlEQUFLLEtBQUksaUJBQVQsRUFBMkIsV0FBVSxXQUFyQyxFQUFpRCxLQUFJLE1BQXJEO0FBREosaUJBYko7QUFnQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMENBQWY7QUFDSSxpREFBSyxLQUFJLGtCQUFULEVBQTRCLFdBQVUsV0FBdEMsRUFBa0QsS0FBSSxPQUF0RDtBQURKLGlCQWhCSjtBQW1CSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwwQ0FBZjtBQUNJLGlEQUFLLEtBQUksNEJBQVQsRUFBc0MsV0FBVSxXQUFoRCxFQUE0RCxLQUFJLElBQWhFO0FBREosaUJBbkJKO0FBc0JJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksaURBQUssS0FBSSxnQkFBVCxFQUEwQixXQUFVLFdBQXBDLEVBQWdELEtBQUksS0FBcEQ7QUFESjtBQXRCSjtBQURKLFNBREo7QUE4Qkg7QUFuQ2dDLENBQWxCLENBQW5COztBQXNDQUMsU0FBU0QsTUFBVCxDQUNJLG9CQUFDLE1BQUQsQ0FBUSxTQUFSLE9BREosRUFFSUUsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUZKIiwiZmlsZSI6IlRlY2hBcmVhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5UZWNoQXJlYXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0NvZGUuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiQ29kZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0ludGVybmV0LnN2Z1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIldlYlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL01vYmlsZS5zdmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJNb2JpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9NaWNyb3NlcnZpY2VzLnN2Z1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIk1pY3JvIFNlcnZpY2VzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvRGF0YS5zdmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJEYXRhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvQ2xvdWQuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiQ2xvdWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9NYWNoaW5lTGVhcm5pbmcuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiQUlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9Jb1Quc3ZnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiSW9UXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDx3aW5kb3cuVGVjaEFyZWFzIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2gtYXJlYXMnKVxyXG4pOyJdfQ==
