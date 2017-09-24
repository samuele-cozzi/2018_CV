'use strict';

window.SoftSkills = React.createClass({
    displayName: 'SoftSkills',

    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        var ctxSS = document.getElementById("softSkillChart").getContext('2d');
        var myRadarChart = new Chart(ctxSS, {
            type: 'radar',
            data: {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [{
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                }]
            },
            options: {
                responsive: true,
                legend: { display: false }
            }
        });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h5',
                null,
                'Soft Skills'
            ),
            React.createElement('canvas', { id: 'softSkillChart' })
        );
    }
});

ReactDOM.render(React.createElement(window.SoftSkills, null), document.getElementById('soft-skills'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvZnRTa2lsbHMuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIlNvZnRTa2lsbHMiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjdHhTUyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibXlSYWRhckNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZmlsbENvbG9yIiwic3Ryb2tlQ29sb3IiLCJwb2ludENvbG9yIiwicG9pbnRTdHJva2VDb2xvciIsInBvaW50SGlnaGxpZ2h0RmlsbCIsInBvaW50SGlnaGxpZ2h0U3Ryb2tlIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJsZWdlbmQiLCJkaXNwbGF5IiwicmVuZGVyIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFVBQVAsR0FBb0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUhpQztBQUlsQ0MsdUJBQW1CLDZCQUFZO0FBQzNCLFlBQUlDLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxVQUExQyxDQUFxRCxJQUFyRCxDQUFaO0FBQ0EsWUFBSUMsZUFBZSxJQUFJQyxLQUFKLENBQVVMLEtBQVYsRUFBaUI7QUFDaENNLGtCQUFNLE9BRDBCO0FBRWhDQyxrQkFBTTtBQUNGQyx3QkFBUSxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLEVBQWdELFFBQWhELEVBQTBELFNBQTFELEVBQXFFLFNBQXJFLENBRE47QUFFRkMsMEJBQVUsQ0FDTjtBQUNJQywrQkFBVyx1QkFEZjtBQUVJQyxpQ0FBYSxxQkFGakI7QUFHSUMsZ0NBQVkscUJBSGhCO0FBSUlDLHNDQUFrQixNQUp0QjtBQUtJQyx3Q0FBb0IsTUFMeEI7QUFNSUMsMENBQXNCLHFCQU4xQjtBQU9JUiwwQkFBTSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekI7QUFQVixpQkFETTtBQUZSLGFBRjBCO0FBZ0JoQ1MscUJBQVM7QUFDTEMsNEJBQVksSUFEUDtBQUVMQyx3QkFBUSxFQUFFQyxTQUFTLEtBQVg7QUFGSDtBQWhCdUIsU0FBakIsQ0FBbkI7QUFxQkgsS0EzQmlDO0FBNEJsQ0MsWUFBUSxrQkFBWTtBQUNoQixlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJLDRDQUFRLElBQUcsZ0JBQVg7QUFGSixTQURKO0FBTUg7QUFuQ2lDLENBQWxCLENBQXBCOztBQXNDQUMsU0FBU0QsTUFBVCxDQUNJLG9CQUFDLE1BQUQsQ0FBUSxVQUFSLE9BREosRUFFSW5CLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FGSiIsImZpbGUiOiJTb2Z0U2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LlNvZnRTa2lsbHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3R4U1MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvZnRTa2lsbENoYXJ0XCIpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIG15UmFkYXJDaGFydCA9IG5ldyBDaGFydChjdHhTUywge1xyXG4gICAgICAgICAgICB0eXBlOiAncmFkYXInLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIkVhdGluZ1wiLCBcIkRyaW5raW5nXCIsIFwiU2xlZXBpbmdcIiwgXCJEZXNpZ25pbmdcIiwgXCJDb2RpbmdcIiwgXCJDeWNsaW5nXCIsIFwiUnVubmluZ1wiXSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwwLjIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFs2NSwgNTksIDkwLCA4MSwgNTYsIDU1LCA0MF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNT5Tb2Z0IFNraWxsczwvaDU+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwic29mdFNraWxsQ2hhcnRcIiA+PC9jYW52YXM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5Tb2Z0U2tpbGxzIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvZnQtc2tpbGxzJylcclxuKTsiXX0=
