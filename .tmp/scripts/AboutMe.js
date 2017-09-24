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
                    "vamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                )
            );
        }
    }]);

    return AboutMe;
}(React.Component);

ReactDOM.render(React.createElement(window.AboutMe, null), document.getElementById('about-me'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFib3V0TWUuanN4Il0sIm5hbWVzIjpbIkFib3V0TWUiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsTzs7Ozs7Ozs7Ozs7NENBRWtCO0FBQ2hCQyxvQkFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLGFBREo7QUFRSDs7OztFQWZpQkMsTUFBTUMsUzs7QUFrQjVCQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsTUFBRCxDQUFRLE9BQVIsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBRkYiLCJmaWxlIjoiQWJvdXRNZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEFib3V0TWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXRNZTogY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDItcmVzcG9uc2l2ZVwiPkFib3V0IG1lPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPnZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuIER1aXMgbW9sbGlzLCBlc3Qgbm9uIGNvbW1vZG8gbHVjdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaXNpIGVyYXQgcG9ydHRpdG9yIGxpZ3VsYSwgZWdldCBsYWNpbmlhIG9kaW8gc2VtIG5lYyBlbGl0LiBNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPHdpbmRvdy5BYm91dE1lIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1tZScpIFxyXG4pOyJdfQ==
