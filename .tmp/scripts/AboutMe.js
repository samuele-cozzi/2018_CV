"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from 'react';

var AboutMe = function (_React$Component) {
    _inherits(AboutMe, _React$Component);

    function AboutMe() {
        _classCallCheck(this, AboutMe);

        return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).apply(this, arguments));
    }

    _createClass(AboutMe, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("AboutMe: componentDidMount");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    { className: "h2-responsive" },
                    "About me"
                ),
                React.createElement(
                    "p",
                    null,
                    "Sono un Ingegnere Full Stack con pi\xF9 di 10 anni di esperienza nel costruire architetture Enterprise con lo lo stack tecnologico Microsoft ASP.NET. Sono appassionato di standard web e di imparare nuove tecnologie. In particolare mi sono focalizzato sui microservizi e implementazione delle web api, integrazione di sistemi complessi, sviluppo di applicazioni web per il mobile, design delle basi dati e design pattern. In questo periodo mi sto focalizzando su algoritmi di machine learning, Intelligenza Artificiale e deep learning"
                )
            );
        }
    }]);

    return AboutMe;
}(React.Component);

ReactDOM.render(React.createElement(window.AboutMe, null), document.getElementById('about-me'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFib3V0TWUuanN4Il0sIm5hbWVzIjpbIkFib3V0TWUiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsTzs7Ozs7Ozs7Ozs7NENBRWtCO0FBQ2hCQyxvQkFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLGFBREo7QUFXSDs7OztFQWxCaUJDLE1BQU1DLFM7O0FBcUI1QkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLE1BQUQsQ0FBUSxPQUFSLE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUZGIiwiZmlsZSI6IkFib3V0TWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBBYm91dE1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFib3V0TWU6IGNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyLXJlc3BvbnNpdmVcIj5BYm91dCBtZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFNvbm8gdW4gSW5nZWduZXJlIEZ1bGwgU3RhY2sgY29uIHBpw7kgZGkgMTAgYW5uaSBkaSBlc3BlcmllbnphIG5lbCBjb3N0cnVpcmUgYXJjaGl0ZXR0dXJlIEVudGVycHJpc2UgY29uIGxvIGxvIHN0YWNrIHRlY25vbG9naWNvIE1pY3Jvc29mdCBBU1AuTkVULlxyXG4gICAgICAgICAgICAgICAgU29ubyBhcHBhc3Npb25hdG8gZGkgc3RhbmRhcmQgd2ViIGUgZGkgaW1wYXJhcmUgbnVvdmUgdGVjbm9sb2dpZS5cclxuICAgICAgICAgICAgICAgIEluIHBhcnRpY29sYXJlIG1pIHNvbm8gZm9jYWxpenphdG8gc3VpIG1pY3Jvc2Vydml6aSBlIGltcGxlbWVudGF6aW9uZSBkZWxsZSB3ZWIgYXBpLCBpbnRlZ3JhemlvbmUgZGkgc2lzdGVtaSBjb21wbGVzc2ksIHN2aWx1cHBvIGRpIGFwcGxpY2F6aW9uaSB3ZWIgcGVyIGlsIG1vYmlsZSwgZGVzaWduIGRlbGxlIGJhc2kgZGF0aSBlIGRlc2lnbiBwYXR0ZXJuLlxyXG4gICAgICAgICAgICAgICAgSW4gcXVlc3RvIHBlcmlvZG8gbWkgc3RvIGZvY2FsaXp6YW5kbyBzdSBhbGdvcml0bWkgZGkgbWFjaGluZSBsZWFybmluZywgSW50ZWxsaWdlbnphIEFydGlmaWNpYWxlIGUgZGVlcCBsZWFybmluZ1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPHdpbmRvdy5BYm91dE1lIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1tZScpIFxyXG4pOyJdfQ==
