'use strict';

window.Languages = React.createClass({
    displayName: 'Languages',

    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        var _options = {
            legend: { display: false },
            rotation: Math.PI,
            circumference: Math.PI
        };

        var _showOptions = {
            donut: true,
            donutWidth: 10,
            donutSolid: true,
            startAngle: 270,
            total: 200,
            showLabel: false
        };

        new Chartist.Pie('#italian-read', { series: [100, 0] }, _showOptions);
        new Chartist.Pie('#italian-write', { series: [100, 0] }, _showOptions);
        new Chartist.Pie('#italian-speak', { series: [100, 0] }, _showOptions);

        new Chartist.Pie('#english-read', { series: [80, 20] }, _showOptions);
        new Chartist.Pie('#english-write', { series: [80, 20] }, _showOptions);
        new Chartist.Pie('#english-speak', { series: [80, 20] }, _showOptions);
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'languages mx-auto mb-1' },
            React.createElement(
                'div',
                { className: 'row ' },
                React.createElement(
                    'div',
                    { className: 'col-md-12' },
                    React.createElement(
                        'h4',
                        null,
                        'Italiano'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-4 col-sm-4' },
                    React.createElement(
                        'h6',
                        null,
                        'Letto'
                    ),
                    React.createElement('div', { id: 'italian-read' })
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-4 col-sm-4' },
                    React.createElement(
                        'h6',
                        null,
                        'Scritto'
                    ),
                    React.createElement('div', { id: 'italian-write' })
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-4 col-sm-4' },
                    React.createElement(
                        'h6',
                        null,
                        'Parlato'
                    ),
                    React.createElement('div', { id: 'italian-speak' })
                )
            ),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-12' },
                    React.createElement(
                        'h4',
                        null,
                        'Inglese'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-4 col-sm-4' },
                    React.createElement(
                        'h6',
                        null,
                        'Letto'
                    ),
                    React.createElement('div', { id: 'english-read' })
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-4 col-sm-4' },
                    React.createElement(
                        'h6',
                        null,
                        'Scritto'
                    ),
                    React.createElement('div', { id: 'english-write' })
                ),
                React.createElement(
                    'div',
                    { className: 'col-xs-4 col-sm-4' },
                    React.createElement(
                        'h6',
                        null,
                        'Parlato'
                    ),
                    React.createElement('div', { id: 'english-speak' })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Languages, null), document.getElementById('languages'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmd1YWdlcy5qc3giXSwibmFtZXMiOlsid2luZG93IiwiTGFuZ3VhZ2VzIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiX29wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5Iiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjaXJjdW1mZXJlbmNlIiwiX3Nob3dPcHRpb25zIiwiZG9udXQiLCJkb251dFdpZHRoIiwiZG9udXRTb2xpZCIsInN0YXJ0QW5nbGUiLCJ0b3RhbCIsInNob3dMYWJlbCIsIkNoYXJ0aXN0IiwiUGllIiwic2VyaWVzIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxTQUFQLEdBQW1CQyxNQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDQyxxQkFBaUIsMkJBQVk7QUFDekIsZUFBTyxFQUFQO0FBQ0gsS0FIZ0M7QUFJakNDLHVCQUFtQiw2QkFBVztBQUMxQixZQUFJQyxXQUFXO0FBQ1hDLG9CQUFRLEVBQUVDLFNBQVMsS0FBWCxFQURHO0FBRVhDLHNCQUFVQyxLQUFLQyxFQUZKO0FBR1hDLDJCQUFlRixLQUFLQztBQUhULFNBQWY7O0FBTUEsWUFBSUUsZUFBZTtBQUNmQyxtQkFBTyxJQURRO0FBRWZDLHdCQUFZLEVBRkc7QUFHZkMsd0JBQVksSUFIRztBQUlmQyx3QkFBWSxHQUpHO0FBS2ZDLG1CQUFPLEdBTFE7QUFNZkMsdUJBQVc7QUFOSSxTQUFuQjs7QUFTQSxZQUFJQyxTQUFTQyxHQUFiLENBQWlCLGVBQWpCLEVBQWtDLEVBQUNDLFFBQVEsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUFULEVBQWxDLEVBQXNEVCxZQUF0RDtBQUNBLFlBQUlPLFNBQVNDLEdBQWIsQ0FBaUIsZ0JBQWpCLEVBQW1DLEVBQUNDLFFBQVEsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUFULEVBQW5DLEVBQXVEVCxZQUF2RDtBQUNBLFlBQUlPLFNBQVNDLEdBQWIsQ0FBaUIsZ0JBQWpCLEVBQW1DLEVBQUNDLFFBQVEsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUFULEVBQW5DLEVBQXVEVCxZQUF2RDs7QUFFQSxZQUFJTyxTQUFTQyxHQUFiLENBQWlCLGVBQWpCLEVBQWtDLEVBQUNDLFFBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFULEVBQWxDLEVBQXNEVCxZQUF0RDtBQUNBLFlBQUlPLFNBQVNDLEdBQWIsQ0FBaUIsZ0JBQWpCLEVBQW1DLEVBQUNDLFFBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFULEVBQW5DLEVBQXVEVCxZQUF2RDtBQUNBLFlBQUlPLFNBQVNDLEdBQWIsQ0FBaUIsZ0JBQWpCLEVBQW1DLEVBQUNDLFFBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFULEVBQW5DLEVBQXVEVCxZQUF2RDtBQUNILEtBM0JnQztBQTRCakNVLFlBQVEsa0JBQVk7QUFDaEIsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdCQUFmO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsTUFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSSxpREFBSyxJQUFHLGNBQVI7QUFGSixpQkFKSjtBQVFJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJLGlEQUFLLElBQUcsZUFBUjtBQUZKLGlCQVJKO0FBWUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBRUksaURBQUssSUFBRyxlQUFSO0FBRko7QUFaSixhQURKO0FBb0JJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGlCQURKO0FBS0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBRUksaURBQUssSUFBRyxjQUFSO0FBRkosaUJBTEo7QUFTSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSSxpREFBSyxJQUFHLGVBQVI7QUFGSixpQkFUSjtBQWFJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJLGlEQUFLLElBQUcsZUFBUjtBQUZKO0FBYko7QUFwQkosU0FESjtBQTJDSDtBQXhFZ0MsQ0FBbEIsQ0FBbkI7O0FBMkVBQyxTQUFTRCxNQUFULENBQ0ksb0JBQUMsTUFBRCxDQUFRLFNBQVIsT0FESixFQUVJRSxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBRkoiLCJmaWxlIjoiTGFuZ3VhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lkxhbmd1YWdlcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF9vcHRpb25zID0geyBcclxuICAgICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiBNYXRoLlBJICxcclxuICAgICAgICAgICAgY2lyY3VtZmVyZW5jZTogTWF0aC5QSVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBfc2hvd09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRvbnV0OiB0cnVlLFxyXG4gICAgICAgICAgICBkb251dFdpZHRoOiAxMCxcclxuICAgICAgICAgICAgZG9udXRTb2xpZDogdHJ1ZSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZTogMjcwLFxyXG4gICAgICAgICAgICB0b3RhbDogMjAwLFxyXG4gICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBuZXcgQ2hhcnRpc3QuUGllKCcjaXRhbGlhbi1yZWFkJywge3NlcmllczogWzEwMCwgMF19LCBfc2hvd09wdGlvbnMpO1xyXG4gICAgICAgIG5ldyBDaGFydGlzdC5QaWUoJyNpdGFsaWFuLXdyaXRlJywge3NlcmllczogWzEwMCwgMF19LCBfc2hvd09wdGlvbnMpO1xyXG4gICAgICAgIG5ldyBDaGFydGlzdC5QaWUoJyNpdGFsaWFuLXNwZWFrJywge3NlcmllczogWzEwMCwgMF19LCBfc2hvd09wdGlvbnMpO1xyXG5cclxuICAgICAgICBuZXcgQ2hhcnRpc3QuUGllKCcjZW5nbGlzaC1yZWFkJywge3NlcmllczogWzgwLCAyMF19LCBfc2hvd09wdGlvbnMpO1xyXG4gICAgICAgIG5ldyBDaGFydGlzdC5QaWUoJyNlbmdsaXNoLXdyaXRlJywge3NlcmllczogWzgwLCAyMF19LCBfc2hvd09wdGlvbnMpO1xyXG4gICAgICAgIG5ldyBDaGFydGlzdC5QaWUoJyNlbmdsaXNoLXNwZWFrJywge3NlcmllczogWzgwLCAyMF19LCBfc2hvd09wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VzIG14LWF1dG8gbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pkl0YWxpYW5vPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5MZXR0bzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGFsaWFuLXJlYWRcIj48L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5TY3JpdHRvPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0YWxpYW4td3JpdGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5QYXJsYXRvPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0YWxpYW4tc3BlYWtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5JbmdsZXNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+TGV0dG88L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW5nbGlzaC1yZWFkXCI+PC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+U2NyaXR0bzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbmdsaXNoLXdyaXRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+UGFybGF0bzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbmdsaXNoLXNwZWFrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDx3aW5kb3cuTGFuZ3VhZ2VzIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmd1YWdlcycpXHJcbik7XHJcblxyXG4iXX0=
