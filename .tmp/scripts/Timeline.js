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
            React.createElement("i", { className: "fa fa-briefcase", "aria-hidden": "true" })
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
                "Ho seguito progetti di varia natura nell'ambito eCommerce."
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "Ho gestione team di 8 risorse."
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "Sono manager di prossimit\xE0 di 15 risorse."
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
            React.createElement("i", { className: "fa fa-briefcase", "aria-hidden": "true" })
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
            React.createElement("i", { className: "fa fa-briefcase", "aria-hidden": "true" })
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
            React.createElement("i", { className: "fa fa-briefcase", "aria-hidden": "true" })
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
                "Tesi: \"Meccanismi di controllo del firing in neuroni\" (indirizzo biofisica)"
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLmpzeCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJUaW1lbGluZSIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFFBQVAsR0FBa0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLG1CQUFpQiwyQkFBWTtBQUMzQixXQUFPLEVBQVA7QUFDRCxHQUhpQztBQUlsQ0MsVUFBUSxrQkFBWTtBQUNsQixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUEsT0FERjtBQUdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFFBQUwsRUFBUSxXQUFVLGlCQUFsQjtBQUFvQyx1Q0FBRyxXQUFVLGlCQUFiLEVBQStCLGVBQVksTUFBM0M7QUFBcEMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxzQkFBYjtBQUFvQywyQ0FBRyxXQUFVLGdCQUFiLEdBQXBDO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUZGLGFBRkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLFdBQWI7QUFBQTtBQUFBLGVBSkY7QUFPRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxXQUFiO0FBQUE7QUFBQSxlQVBGO0FBVUU7QUFBQTtBQUFBLGtCQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLGVBVkY7QUFXRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsZUFYRjtBQVlFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxlQVpGO0FBYUU7QUFBQTtBQUFBLGtCQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLGVBYkY7QUFjRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsZUFkRjtBQWVFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQTtBQWZGO0FBUEY7QUFGRixTQURGO0FBOEJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFFBQUwsRUFBUSxXQUFVLGlCQUFsQjtBQUFvQyx1Q0FBRyxXQUFVLGlCQUFiLEVBQStCLGVBQVksTUFBM0M7QUFBcEMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxzQkFBYjtBQUFvQywyQ0FBRyxXQUFVLGdCQUFiLEdBQXBDO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUZGLGFBRkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLFdBQWI7QUFBQTtBQUFBLGVBSkY7QUFPRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsZUFQRjtBQVFFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxlQVJGO0FBU0U7QUFBQTtBQUFBLGtCQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLGVBVEY7QUFVRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUE7QUFWRjtBQVBGO0FBRkY7QUE5QkYsT0FIRjtBQTBERTtBQUFBO0FBQUEsVUFBSSxXQUFVLGFBQWQ7QUFBQTtBQUFBLE9BMURGO0FBNERFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFFBQUwsRUFBUSxXQUFVLGlCQUFsQjtBQUFvQyx1Q0FBRyxXQUFVLGlCQUFiLEVBQStCLGVBQVksTUFBM0M7QUFBcEMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxzQkFBYjtBQUFvQywyQ0FBRyxXQUFVLGdCQUFiLEdBQXBDO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUZGLGFBRkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLFdBQWI7QUFBQTtBQUFBLGVBSkY7QUFPRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxXQUFiO0FBQUE7QUFBQSxlQVBGO0FBVUU7QUFBQTtBQUFBLGtCQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLGVBVkY7QUFXRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsZUFYRjtBQVlFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQTtBQVpGO0FBUEY7QUFGRixTQURGO0FBMkJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFFBQUwsRUFBUSxXQUFVLGlCQUFsQjtBQUFvQyx1Q0FBRyxXQUFVLGlCQUFiLEVBQStCLGVBQVksTUFBM0M7QUFBcEMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxzQkFBYjtBQUFvQywyQ0FBRyxXQUFVLGdCQUFiLEdBQXBDO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUZGLGFBRkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxlQUpGO0FBS0U7QUFBQTtBQUFBLGtCQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLGVBTEY7QUFNRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsZUFORjtBQU9FO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQTtBQVBGO0FBUEY7QUFGRjtBQTNCRixPQTVERjtBQThHRTtBQUFBO0FBQUEsVUFBSSxXQUFVLDJCQUFkO0FBQUE7QUFBQSxPQTlHRjtBQStHRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxRQUFMLEVBQVEsV0FBVSxpQkFBbEI7QUFBb0MsdUNBQUcsV0FBVSxZQUFiLEVBQTBCLGVBQVksTUFBdEM7QUFBcEMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxzQkFBYjtBQUFvQywyQ0FBRyxXQUFVLGdCQUFiLEdBQXBDO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsdUJBQWQ7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUZGLGFBRkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQTtBQUpGO0FBUEY7QUFGRixTQURGO0FBbUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFFBQUwsRUFBUSxXQUFVLGlCQUFsQjtBQUFvQyx1Q0FBRyxXQUFVLFlBQWIsRUFBMEIsZUFBWSxNQUF0QztBQUFwQyxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLHNCQUFiO0FBQW9DLDJDQUFHLFdBQVUsZ0JBQWIsR0FBcEM7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUksV0FBVSx1QkFBZDtBQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBRkY7QUFGRjtBQUZGO0FBbkJGO0FBL0dGLEtBREY7QUFpSkQ7QUF0SmlDLENBQWxCLENBQWxCOztBQXlKQUMsU0FBU0QsTUFBVCxDQUNFLG9CQUFDLE1BQUQsQ0FBUSxRQUFSLE9BREYsRUFFRUUsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUZGIiwiZmlsZSI6IlRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LlRpbWVsaW5lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlXCI+MjAxNzwvaDI+XHJcblxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBsaSBjbGFzc05hbWU9XCJiYWRnZSB0aXRsZSBwaW5cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1icmllZmNhc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBpdGVtXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlLXRleHQgY2FyZC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+IERpY2VtYnJlIDIwMTQgLSBvZ2dpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+TWFuYWdlciBAU29wcmFzdGVyaWE8L3N0cm9uZz48L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEhvIHNlZ3VpdG8gcHJvZ2V0dGkgZGkgdmFyaWEgbmF0dXJhIG5lbGwnYW1iaXRvIGVDb21tZXJjZS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBIbyBnZXN0aW9uZSB0ZWFtIGRpIDggcmlzb3JzZS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBTb25vIG1hbmFnZXIgZGkgcHJvc3NpbWl0w6AgZGkgMTUgcmlzb3JzZS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+ZUNvbW1lcmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5XZWJzaXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5tc2l0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+YXBwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5NYXJrZXRwbGFjZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+U2VydmljZSBwbGF0Zm9ybTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBsaSBjbGFzc05hbWU9XCJiYWRnZSB0aXRsZSBwaW5cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1icmllZmNhc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBpdGVtXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlLXRleHQgY2FyZC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+IGRhbCAyMDEyIC0gYWwgMjAxNDwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHdoaXRlLXRleHRcIj48c3Ryb25nPlNvbHV0aW9uIEFyY2hpdGVjdCBAU29wcmFzdGVyaWE8L3N0cm9uZz48L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFByb2dldHRvIHBlciBsJ2Vyb2dhemlvbmUgZGkgc2Vydml6aSBwcm9mZXNzaW9uYWxpIChCYWNrIE9mZmljZSwgVGFibGV0IGUgQkkpXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFByb2dldHRvIGRpIGludGVncmF6aW9uZSBwZXIgbGEgZmF0dHVyYXppb25lXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5TdXBwbHkgY2hhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPkludGVncmF0aW9uIExheWVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5lQ29tbWVyY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPldlYnNpdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFkZ2UgdGl0bGVcIj4yMDEzPC9oMj5cclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGxpIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlIHBpblwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJyaWVmY2FzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGl0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGUtdGV4dCBjYXJkLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT4gZGFsIDIwMDggLSBhbCAyMDEyPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+c3IuIERldmVsb3BlciBAQXZhbmFkZTwvc3Ryb25nPjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgUHJvZ2V0dG8gcGVyIGxhIG1hbnV0ZW56aW9uZSBldm9sdXRpdmEgZGVsbGEgcGlhdHRhZm9ybWEgaXRhbGlhbmFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBQcm9nZXR0byBkaSB1biBwb3J0YWxlIGRpIEJhY2tvZmZpY2UgcGVyIGxhIGdlc3Rpb25lIGRlaSBQZFZcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICBQcm9nZXR0byBkaSB1biBzaXRvIHdlYiByZWFsaXp6YXRvIGNvbiBTaXRlY29yZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5JbnN1cmFuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPlJldGFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+U2l0ZWNvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgbGkgY2xhc3NOYW1lPVwiYmFkZ2UgdGl0bGUgcGluXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYnJpZWZjYXNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaXRlbVwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0IGNhcmQtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiBkYWwgMjAwNiAtIGFsIDIwMDg8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB3aGl0ZS10ZXh0XCI+PHN0cm9uZz5EZXZlbG9wZXIgQEF2YW5hZGU8L3N0cm9uZz48L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFByb2dldHRvIGludGVybmF6aW9uYWxlIHBlciBlc3RlbmRlcmUgbGEgcGlhdHRhZm9ybWEgaXRhbGlhbmEgYWQgYWx0cmUgbmF6aW9uaSBldXJvcGVlIGRlbCBncnVwcG9cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+SW5zdXJhbmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5WQjY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPkpBVkE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPlNRTCBTZXJ2ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJhZGdlIHRpdGxlIGJhZGdlLWRlZmF1bHRcIj4yMDA3PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgbGkgY2xhc3NOYW1lPVwiYmFkZ2UgdGl0bGUgcGluXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGl0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGUtdGV4dCBjYXJkLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT4gT3R0b2JyZSAyMDA2PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgd2hpdGUtdGV4dFwiPjxzdHJvbmc+TGF1cmVhIGluIEZpc2ljYTwvc3Ryb25nPjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgVGVzaTogXCJNZWNjYW5pc21pIGRpIGNvbnRyb2xsbyBkZWwgZmlyaW5nIGluIG5ldXJvbmlcIiAoaW5kaXJpenpvIGJpb2Zpc2ljYSlcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5Vbml2ZXJzaXTDoCBkZWdsaSBzdHVkaSBkaSBNaWxhbm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgbGkgY2xhc3NOYW1lPVwiYmFkZ2UgdGl0bGUgcGluXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGl0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGUtdGV4dCBjYXJkLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT4gTHVnbGlvIDIwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB3aGl0ZS10ZXh0XCI+PHN0cm9uZz5EaXBvbG1hIE1hdHVyaXTDoCBTY2llbnRpZmljYTwvc3Ryb25nPjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPHdpbmRvdy5UaW1lbGluZSAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmUnKVxyXG4pOyJdfQ==
