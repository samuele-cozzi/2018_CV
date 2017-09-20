"use strict";

window.FunctionalAreas = React.createClass({
    displayName: "FunctionalAreas",

    getInitialState: function getInitialState() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "mx-auto" },
            React.createElement(
                "h3",
                null,
                "Functional Area"
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("i", { className: "fa fa-bank fa-4x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("i", { className: "fa fa-industry fa-4x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("i", { className: "fa fa-internet-explorer fa-4x", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
                    React.createElement("i", { className: "fa fa-shopping-cart fa-4x", "aria-hidden": "true" })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.FunctionalAreas, null), document.getElementById('functional-areas'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZ1bmN0aW9uYWxBcmVhcy5qc3giXSwibmFtZXMiOlsid2luZG93IiwiRnVuY3Rpb25hbEFyZWFzIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsZUFBUCxHQUF5QkMsTUFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUN2Q0MscUJBQWlCLDJCQUFXO0FBQzFCLGVBQU8sRUFBUDtBQUNELEtBSHNDO0FBSXZDQyxZQUFRLGtCQUFXO0FBQ2IsZUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMENBQWY7QUFDSSwrQ0FBRyxXQUFVLGtCQUFiLEVBQWdDLGVBQVksTUFBNUM7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0ksK0NBQUcsV0FBVSxzQkFBYixFQUFvQyxlQUFZLE1BQWhEO0FBREosaUJBSko7QUFPSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwwQ0FBZjtBQUNJLCtDQUFHLFdBQVUsK0JBQWIsRUFBNkMsZUFBWSxNQUF6RDtBQURKLGlCQVBKO0FBVUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMENBQWY7QUFDSSwrQ0FBRyxXQUFVLDJCQUFiLEVBQXlDLGVBQVksTUFBckQ7QUFESjtBQVZKO0FBSEosU0FERjtBQW9CSDtBQXpCb0MsQ0FBbEIsQ0FBekI7O0FBNEJFQyxTQUFTRCxNQUFULENBQ0Usb0JBQUMsTUFBRCxDQUFRLGVBQVIsT0FERixFQUVFRSxTQUFTQyxjQUFULENBQXdCLGtCQUF4QixDQUZGIiwiZmlsZSI6IkZ1bmN0aW9uYWxBcmVhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5GdW5jdGlvbmFsQXJlYXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWwgQXJlYTwvaDM+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhbmsgZmEtNHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluZHVzdHJ5IGZhLTR4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pbnRlcm5ldC1leHBsb3JlciBmYS00eFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydCBmYS00eFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICBcclxuICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8d2luZG93LkZ1bmN0aW9uYWxBcmVhcyAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdW5jdGlvbmFsLWFyZWFzJykgXHJcbiAgKTsiXX0=
