'use strict';

window.SoftSkills = React.createClass({
    displayName: 'SoftSkills',

    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        //var ctxSS = document.getElementById("softSkillChart").getContext('2d');
        // var myRadarChart = new Chart(ctxSS, {
        //     type: 'radar',
        //     data: {
        //         labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        //         datasets: [
        //             {
        //                 fillColor: "rgba(220,220,220,0.2)",
        //                 strokeColor: "rgba(220,220,220,1)",
        //                 pointColor: "rgba(220,220,220,1)",
        //                 pointStrokeColor: "#fff",
        //                 pointHighlightFill: "#fff",
        //                 pointHighlightStroke: "rgba(220,220,220,1)",
        //                 data: [65, 59, 90, 81, 56, 55, 40]
        //             }
        //         ]
        //     },
        //     options: {
        //         responsive: true,
        //         legend: { display: false }
        //     }
        // });

        Highcharts.chart('softSkillChart', {

            chart: {
                polar: true,
                type: 'line'
            },

            title: {
                text: ''
            },
            legend: {
                enabled: false
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Information Technology', 'Administration'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                enabled: false
            },

            series: [{
                data: [43000, 19000, 60000, 35000, 17000, 10000]
            }]

        });
    },
    render: function render() {
        return (
            // <canvas id="softSkillChart" ></canvas>
            React.createElement('div', { id: 'softSkillChart' })
        );
    }
});

ReactDOM.render(React.createElement(window.SoftSkills, null), document.getElementById('soft-skills'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvZnRTa2lsbHMuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIlNvZnRTa2lsbHMiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJIaWdoY2hhcnRzIiwiY2hhcnQiLCJwb2xhciIsInR5cGUiLCJ0aXRsZSIsInRleHQiLCJsZWdlbmQiLCJlbmFibGVkIiwicGFuZSIsInNpemUiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJ0aWNrbWFya1BsYWNlbWVudCIsImxpbmVXaWR0aCIsInlBeGlzIiwiZ3JpZExpbmVJbnRlcnBvbGF0aW9uIiwibWluIiwidG9vbHRpcCIsInNlcmllcyIsImRhdGEiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFVBQVAsR0FBb0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUhpQztBQUlsQ0MsdUJBQW1CLDZCQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxtQkFBV0MsS0FBWCxDQUFpQixnQkFBakIsRUFBbUM7O0FBRTNCQSxtQkFBTztBQUNIQyx1QkFBTyxJQURKO0FBRUhDLHNCQUFNO0FBRkgsYUFGb0I7O0FBTzNCQyxtQkFBTztBQUNIQyxzQkFBTTtBQURILGFBUG9CO0FBVTNCQyxvQkFBUTtBQUNKQyx5QkFBUztBQURMLGFBVm1COztBQWMzQkMsa0JBQU07QUFDRkMsc0JBQU07QUFESixhQWRxQjs7QUFrQjNCQyxtQkFBTztBQUNIQyw0QkFBWSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLGFBQXZCLEVBQXNDLGtCQUF0QyxFQUNKLHdCQURJLEVBQ3NCLGdCQUR0QixDQURUO0FBR0hDLG1DQUFtQixJQUhoQjtBQUlIQywyQkFBVztBQUpSLGFBbEJvQjs7QUF5QjNCQyxtQkFBTztBQUNIQyx1Q0FBdUIsU0FEcEI7QUFFSEYsMkJBQVcsQ0FGUjtBQUdIRyxxQkFBSztBQUhGLGFBekJvQjs7QUErQjNCQyxxQkFBUztBQUNMVix5QkFBUztBQURKLGFBL0JrQjs7QUFtQzNCVyxvQkFBUSxDQUFDO0FBQ0xDLHNCQUFNLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDO0FBREQsYUFBRDs7QUFuQ21CLFNBQW5DO0FBd0NILEtBcEVpQztBQXFFbENDLFlBQVEsa0JBQVk7QUFDaEI7QUFDSTtBQUNBLHlDQUFLLElBQUcsZ0JBQVI7QUFGSjtBQUlIO0FBMUVpQyxDQUFsQixDQUFwQjs7QUE2RUFDLFNBQVNELE1BQVQsQ0FDSSxvQkFBQyxNQUFELENBQVEsVUFBUixPQURKLEVBRUlFLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FGSiIsImZpbGUiOiJTb2Z0U2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LlNvZnRTa2lsbHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3ZhciBjdHhTUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29mdFNraWxsQ2hhcnRcIikuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAvLyB2YXIgbXlSYWRhckNoYXJ0ID0gbmV3IENoYXJ0KGN0eFNTLCB7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6ICdyYWRhcicsXHJcbiAgICAgICAgLy8gICAgIGRhdGE6IHtcclxuICAgICAgICAvLyAgICAgICAgIGxhYmVsczogW1wiRWF0aW5nXCIsIFwiRHJpbmtpbmdcIiwgXCJTbGVlcGluZ1wiLCBcIkRlc2lnbmluZ1wiLCBcIkNvZGluZ1wiLCBcIkN5Y2xpbmdcIiwgXCJSdW5uaW5nXCJdLFxyXG4gICAgICAgIC8vICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuMilcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwb2ludENvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0RmlsbDogXCIjZmZmXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0YTogWzY1LCA1OSwgOTAsIDgxLCA1NiwgNTUsIDQwXVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIF1cclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgSGlnaGNoYXJ0cy5jaGFydCgnc29mdFNraWxsQ2hhcnQnLCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2xhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAnODAlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnU2FsZXMnLCAnTWFya2V0aW5nJywgJ0RldmVsb3BtZW50JywgJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0luZm9ybWF0aW9uIFRlY2hub2xvZ3knLCAnQWRtaW5pc3RyYXRpb24nXSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrbWFya1BsYWNlbWVudDogJ29uJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkTGluZUludGVycG9sYXRpb246ICdwb2x5Z29uJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzQzMDAwLCAxOTAwMCwgNjAwMDAsIDM1MDAwLCAxNzAwMCwgMTAwMDBdXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPGNhbnZhcyBpZD1cInNvZnRTa2lsbENoYXJ0XCIgPjwvY2FudmFzPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic29mdFNraWxsQ2hhcnRcIj48L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDx3aW5kb3cuU29mdFNraWxscyAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2Z0LXNraWxscycpXHJcbik7Il19
