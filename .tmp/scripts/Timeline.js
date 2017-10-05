"use strict";

window.Timeline = React.createClass({
  displayName: "Timeline",

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "timeline" },
      React.createElement(
        "h2",
        { className: "badge title" },
        "2017"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { li: true, className: "badge title pin" },
            React.createElement("i", { className: "fa fa-gears", "aria-hidden": "true" })
          ),
          React.createElement(
            "div",
            { className: "card item" },
            React.createElement(
              "div",
              { className: "card-header" },
              React.createElement(
                "p",
                { className: "white-text card-text" },
                React.createElement("i", { className: "fa fa-calendar" }),
                " Dicembre 2014 - oggi"
              ),
              React.createElement(
                "h5",
                { className: "card-title white-text" },
                React.createElement(
                  "strong",
                  null,
                  "Manager @Soprasteria"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-body" },
              React.createElement(
                "p",
                { className: "card-text" },
                "Ho seguito progetti di varia natura nell'ambito eCommerce"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "eCommerce"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Website"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "msite"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "app"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Marketplace"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Service platform"
              )
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { li: true, className: "badge title pin" },
            React.createElement("i", { className: "fa fa-gears", "aria-hidden": "true" })
          ),
          React.createElement(
            "div",
            { className: "card item" },
            React.createElement(
              "div",
              { className: "card-header" },
              React.createElement(
                "p",
                { className: "white-text card-text" },
                React.createElement("i", { className: "fa fa-calendar" }),
                " dal 2012 - al 2014"
              ),
              React.createElement(
                "h5",
                { className: "card-title white-text" },
                React.createElement(
                  "strong",
                  null,
                  "Solution Architect @Soprasteria"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-body" },
              React.createElement(
                "p",
                { className: "card-text" },
                "Progetto per l'erogazione di servizi professionali (Back Office, Tablet e BI)"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "Progetto di integrazione per la fatturazione"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Supply chain"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Integration Layer"
              )
            )
          )
        )
      ),
      React.createElement(
        "h2",
        { className: "badge title" },
        "2013"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { li: true, className: "badge title pin" },
            React.createElement("i", { className: "fa fa-gears", "aria-hidden": "true" })
          ),
          React.createElement(
            "div",
            { className: "card item" },
            React.createElement(
              "div",
              { className: "card-header" },
              React.createElement(
                "p",
                { className: "white-text card-text" },
                React.createElement("i", { className: "fa fa-calendar" }),
                " dal 2008 - al 2012"
              ),
              React.createElement(
                "h5",
                { className: "card-title white-text" },
                React.createElement(
                  "strong",
                  null,
                  "sr. Developer @Avanade"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-body" },
              React.createElement(
                "p",
                { className: "card-text" },
                "Progetto per la manutenzione evolutiva della piattaforma italiana"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "Progetto di un portale di Backoffice per la gestione dei PdV"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "Progetto di un sito web realizzato con Sitecore"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Insurance"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Retail"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Sitecore"
              )
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { li: true, className: "badge title pin" },
            React.createElement("i", { className: "fa fa-gears", "aria-hidden": "true" })
          ),
          React.createElement(
            "div",
            { className: "card item" },
            React.createElement(
              "div",
              { className: "card-header" },
              React.createElement(
                "p",
                { className: "white-text card-text" },
                React.createElement("i", { className: "fa fa-calendar" }),
                " dal 2006 - al 2008"
              ),
              React.createElement(
                "h5",
                { className: "card-title white-text" },
                React.createElement(
                  "strong",
                  null,
                  "Developer @Avanade"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-body" },
              React.createElement(
                "p",
                { className: "card-text" },
                "Progetto internazionale per estendere la piattaforma italiana ad altre nazioni europee del gruppo"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Insurance"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "VB6"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "JAVA"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "SQL Server"
              )
            )
          )
        )
      ),
      React.createElement(
        "h2",
        { className: "badge title badge-default" },
        "2007"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { li: true, className: "badge title pin" },
            React.createElement("i", { className: "fa fa-book", "aria-hidden": "true" })
          ),
          React.createElement(
            "div",
            { className: "card item" },
            React.createElement(
              "div",
              { className: "card-header" },
              React.createElement(
                "p",
                { className: "white-text card-text" },
                React.createElement("i", { className: "fa fa-calendar" }),
                " Ottobre 2006"
              ),
              React.createElement(
                "h5",
                { className: "card-title white-text" },
                React.createElement(
                  "strong",
                  null,
                  "Laurea in Fisica"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-body" },
              React.createElement(
                "p",
                { className: "card-text" },
                "Tesi: \"\" (indirizzo biofisica)"
              ),
              React.createElement(
                "span",
                { className: "badge" },
                "Universit\xE0 degli studi di Milano"
              )
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { li: true, className: "badge title pin" },
            React.createElement("i", { className: "fa fa-book", "aria-hidden": "true" })
          ),
          React.createElement(
            "div",
            { className: "card item" },
            React.createElement(
              "div",
              { className: "card-header" },
              React.createElement(
                "p",
                { className: "white-text card-text" },
                React.createElement("i", { className: "fa fa-calendar" }),
                " Luglio 2000"
              ),
              React.createElement(
                "h5",
                { className: "card-title white-text" },
                React.createElement(
                  "strong",
                  null,
                  "Dipolma Maturit\xE0 Scientifica"
                )
              )
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(window.Timeline, null), document.getElementById('timeline'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLmpzeCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUaW1lbGluZSIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFFBQVAsR0FBa0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLG1CQUFpQiwyQkFBWTtBQUMzQixXQUFPLEVBQVA7QUFDRCxHQUhpQztBQUlsQ0MsVUFBUSxrQkFBWTtBQUNsQixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUEsT0FERjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFFBQUwsRUFBUSxXQUFVLGlCQUFsQjtBQUFvQyx1Q0FBRyxXQUFVLGFBQWIsRUFBMkIsZUFBWSxNQUF2QztBQUFwQyxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLHNCQUFiO0FBQW9DLDJDQUFHLFdBQVUsZ0JBQWIsR0FBcEM7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUksV0FBVSx1QkFBZDtBQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBRkYsYUFGRjtBQU9FO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxXQUFiO0FBQUE7QUFBQSxlQURGO0FBSUU7QUFBQTtBQUFBLGtCQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLGVBSkY7QUFLRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsZUFMRjtBQU1FO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhC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QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsc0JBQWI7QUFBb0MsMkNBQUcsV0FBVSxnQkFBYixHQUFwQztBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLHVCQUFkO0FBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFGRjtBQUZGO0FBRkY7QUFuQkY7QUF2R0YsS0FERjtBQXlJRDtBQTlJaUMsQ0FBbEIsQ0FBbEI7O0FBaUpBQyxTQUFTRCxNQUFULENBQ0Usb0JBQUMsTUFBRCxDQUFRLFFBQVIsT0FERixFQUVFRSxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBRkYiLCJmaWxlIjoiVGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuVGltZWxpbmUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFkZ2UgdGl0bGVcIj4yMDE3PC9oMj5cclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGxpIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlIHBpblwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdlYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaXRlbVwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0IGNhcmQtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiBEaWNlbWJyZSAyMDE0IC0gb2dnaTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHdoaXRlLXRleHRcIj48c3Ryb25nPk1hbmFnZXIgQFNvcHJhc3RlcmlhPC9zdHJvbmc+PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBIbyBzZWd1aXRvIHByb2dldHRpIGRpIHZhcmlhIG5hdHVyYSBuZWxsJ2FtYml0byBlQ29tbWVyY2VcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+ZUNvbW1lcmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5XZWJzaXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5tc2l0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+YXBwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5NYXJrZXRwbGFjZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+U2VydmljZSBwbGF0Zm9ybTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBsaSBjbGFzc05hbWU9XCJiYWRnZSB0aXRsZSBwaW5cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1nZWFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGl0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGUtdGV4dCBjYXJkLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT4gZGFsIDIwMTIgLSBhbCAyMDE0PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+U29sdXRpb24gQXJjaGl0ZWN0IEBTb3ByYXN0ZXJpYTwvc3Ryb25nPjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgUHJvZ2V0dG8gcGVyIGwnZXJvZ2F6aW9uZSBkaSBzZXJ2aXppIHByb2Zlc3Npb25hbGkgKEJhY2sgT2ZmaWNlLCBUYWJsZXQgZSBCSSlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgUHJvZ2V0dG8gZGkgaW50ZWdyYXppb25lIHBlciBsYSBmYXR0dXJhemlvbmVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPlN1cHBseSBjaGFpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+SW50ZWdyYXRpb24gTGF5ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFkZ2UgdGl0bGVcIj4yMDEzPC9oMj5cclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGxpIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlIHBpblwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdlYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaXRlbVwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0IGNhcmQtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiBkYWwgMjAwOCAtIGFsIDIwMTI8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB3aGl0ZS10ZXh0XCI+PHN0cm9uZz5zci4gRGV2ZWxvcGVyIEBBdmFuYWRlPC9zdHJvbmc+PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBQcm9nZXR0byBwZXIgbGEgbWFudXRlbnppb25lIGV2b2x1dGl2YSBkZWxsYSBwaWF0dGFmb3JtYSBpdGFsaWFuYVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFByb2dldHRvIGRpIHVuIHBvcnRhbGUgZGkgQmFja29mZmljZSBwZXIgbGEgZ2VzdGlvbmUgZGVpIFBkVlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFByb2dldHRvIGRpIHVuIHNpdG8gd2ViIHJlYWxpenphdG8gY29uIFNpdGVjb3JlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPkluc3VyYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+UmV0YWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5TaXRlY29yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBsaSBjbGFzc05hbWU9XCJiYWRnZSB0aXRsZSBwaW5cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1nZWFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGl0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGUtdGV4dCBjYXJkLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT4gZGFsIDIwMDYgLSBhbCAyMDA4PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+RGV2ZWxvcGVyIEBBdmFuYWRlPC9zdHJvbmc+PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBQcm9nZXR0byBpbnRlcm5hemlvbmFsZSBwZXIgZXN0ZW5kZXJlIGxhIHBpYXR0YWZvcm1hIGl0YWxpYW5hIGFkIGFsdHJlIG5hemlvbmkgZXVyb3BlZSBkZWwgZ3J1cHBvXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPkluc3VyYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+VkI2PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5KQVZBPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5TUUwgU2VydmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJiYWRnZSB0aXRsZSBiYWRnZS1kZWZhdWx0XCI+MjAwNzwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGxpIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlIHBpblwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJvb2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBpdGVtXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlLXRleHQgY2FyZC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+IE90dG9icmUgMjAwNjwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHdoaXRlLXRleHRcIj48c3Ryb25nPkxhdXJlYSBpbiBGaXNpY2E8L3N0cm9uZz48L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFRlc2k6IFwiXCIgKGluZGlyaXp6byBiaW9maXNpY2EpXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+VW5pdmVyc2l0w6AgZGVnbGkgc3R1ZGkgZGkgTWlsYW5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGxpIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlIHBpblwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJvb2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBpdGVtXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlLXRleHQgY2FyZC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+IEx1Z2xpbyAyMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+RGlwb2xtYSBNYXR1cml0w6AgU2NpZW50aWZpY2E8L3N0cm9uZz48L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDx3aW5kb3cuVGltZWxpbmUgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJylcclxuKTsiXX0=
