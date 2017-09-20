"use strict";

window.Customers = React.createClass({
  displayName: "Customers",

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
        "Customers"
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
          React.createElement("img", { src: "http://newsulias.it/wp-content/uploads/2017/01/newsulias4.jpg", className: "img-fluid", alt: "Responsive image" })
        ),
        React.createElement(
          "div",
          { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
          React.createElement("img", { src: "https://vignette3.wikia.nocookie.net/logopedia/images/5/5b/Carrefour_logo.svg", className: "img-fluid", alt: "Responsive image" })
        ),
        React.createElement(
          "div",
          { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
          React.createElement("img", { src: "https://www.joins.ch/media/fieramilano.svg", className: "img-fluid", alt: "Responsive image" })
        ),
        React.createElement(
          "div",
          { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
          React.createElement("img", { src: "https://s3-eu-west-1.amazonaws.com/tpd/logos/49393f93000064000503f0f4/0x0.png", className: "img-fluid", alt: "Responsive image" })
        ),
        React.createElement(
          "div",
          { className: "col-xs-4 col-sm-3 col-md-4 col-lg-3 mb-1" },
          React.createElement("img", { src: "http://www.rivagroup.com/img/Rivagroup.svg", className: "img-fluid", alt: "Responsive image" })
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(window.Customers, null), document.getElementById('customers'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkN1c3RvbWVycy5qc3giXSwibmFtZXMiOlsid2luZG93IiwiQ3VzdG9tZXJzIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsU0FBUCxHQUFtQkMsTUFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUNuQ0MsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU8sRUFBUDtBQUNELEdBSGtDO0FBSW5DQyxVQUFRLGtCQUFZO0FBQ2xCLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBR0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSwwQ0FBZjtBQUNFLHVDQUFLLEtBQUksK0RBQVQsRUFBeUUsV0FBVSxXQUFuRixFQUErRixLQUFJLGtCQUFuRztBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLDBDQUFmO0FBQ0UsdUNBQUssS0FBSSwrRUFBVCxFQUF5RixXQUFVLFdBQW5HLEVBQStHLEtBQUksa0JBQW5IO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsMENBQWY7QUFDRSx1Q0FBSyxLQUFJLDRDQUFULEVBQXNELFdBQVUsV0FBaEUsRUFBNEUsS0FBSSxrQkFBaEY7QUFERixTQVBGO0FBVUU7QUFBQTtBQUFBLFlBQUssV0FBVSwwQ0FBZjtBQUNFLHVDQUFLLEtBQUksK0VBQVQsRUFBeUYsV0FBVSxXQUFuRyxFQUErRyxLQUFJLGtCQUFuSDtBQURGLFNBVkY7QUFhRTtBQUFBO0FBQUEsWUFBSyxXQUFVLDBDQUFmO0FBQ0UsdUNBQUssS0FBSSw0Q0FBVCxFQUFzRCxXQUFVLFdBQWhFLEVBQTRFLEtBQUksa0JBQWhGO0FBREY7QUFiRjtBQUhGLEtBREY7QUF1QkQ7QUE1QmtDLENBQWxCLENBQW5COztBQStCQUMsU0FBU0QsTUFBVCxDQUNFLG9CQUFDLE1BQUQsQ0FBUSxTQUFSLE9BREYsRUFFRUUsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUZGIiwiZmlsZSI6IkN1c3RvbWVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5DdXN0b21lcnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgIDxoMz5DdXN0b21lcnM8L2gzPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL25ld3N1bGlhcy5pdC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9uZXdzdWxpYXM0LmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpZ25ldHRlMy53aWtpYS5ub2Nvb2tpZS5uZXQvbG9nb3BlZGlhL2ltYWdlcy81LzViL0NhcnJlZm91cl9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS0zIGNvbC1tZC00IGNvbC1sZy0zIG1iLTFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5qb2lucy5jaC9tZWRpYS9maWVyYW1pbGFuby5zdmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS90cGQvbG9nb3MvNDkzOTNmOTMwMDAwNjQwMDA1MDNmMGY0LzB4MC5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctMyBtYi0xXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3d3dy5yaXZhZ3JvdXAuY29tL2ltZy9SaXZhZ3JvdXAuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPHdpbmRvdy5DdXN0b21lcnMgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWVycycpXHJcbik7Il19
