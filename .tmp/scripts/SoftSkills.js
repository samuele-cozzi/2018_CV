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
                enabled: false,
                text: 'Budget vs spending',
                x: -80
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            legend: { display: false },

            series: [{
                data: [43000, 19000, 60000, 35000, 17000, 10000],
                pointPlacement: 'on'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvZnRTa2lsbHMuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIlNvZnRTa2lsbHMiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJIaWdoY2hhcnRzIiwiY2hhcnQiLCJwb2xhciIsInR5cGUiLCJ0aXRsZSIsImVuYWJsZWQiLCJ0ZXh0IiwieCIsInBhbmUiLCJzaXplIiwieEF4aXMiLCJjYXRlZ29yaWVzIiwidGlja21hcmtQbGFjZW1lbnQiLCJsaW5lV2lkdGgiLCJ5QXhpcyIsImdyaWRMaW5lSW50ZXJwb2xhdGlvbiIsIm1pbiIsInRvb2x0aXAiLCJzaGFyZWQiLCJwb2ludEZvcm1hdCIsImxlZ2VuZCIsImRpc3BsYXkiLCJzZXJpZXMiLCJkYXRhIiwicG9pbnRQbGFjZW1lbnQiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFVBQVAsR0FBb0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUhpQztBQUlsQ0MsdUJBQW1CLDZCQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxtQkFBV0MsS0FBWCxDQUFpQixnQkFBakIsRUFBbUM7O0FBRTNCQSxtQkFBTztBQUNIQyx1QkFBTyxJQURKO0FBRUhDLHNCQUFNO0FBRkgsYUFGb0I7O0FBTzNCQyxtQkFBTztBQUNIQyx5QkFBUyxLQUROO0FBRUhDLHNCQUFNLG9CQUZIO0FBR0hDLG1CQUFHLENBQUM7QUFIRCxhQVBvQjs7QUFhM0JDLGtCQUFNO0FBQ0ZDLHNCQUFNO0FBREosYUFicUI7O0FBaUIzQkMsbUJBQU87QUFDSEMsNEJBQVksQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixhQUF2QixFQUFzQyxrQkFBdEMsRUFDSix3QkFESSxFQUNzQixnQkFEdEIsQ0FEVDtBQUdIQyxtQ0FBbUIsSUFIaEI7QUFJSEMsMkJBQVc7QUFKUixhQWpCb0I7O0FBd0IzQkMsbUJBQU87QUFDSEMsdUNBQXVCLFNBRHBCO0FBRUhGLDJCQUFXLENBRlI7QUFHSEcscUJBQUs7QUFIRixhQXhCb0I7O0FBOEIzQkMscUJBQVM7QUFDTEMsd0JBQVEsSUFESDtBQUVMQyw2QkFBYTtBQUZSLGFBOUJrQjs7QUFtQzNCQyxvQkFBUSxFQUFFQyxTQUFTLEtBQVgsRUFuQ21COztBQXFDM0JDLG9CQUFRLENBQUM7QUFDTEMsc0JBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FERDtBQUVMQyxnQ0FBZ0I7QUFGWCxhQUFEOztBQXJDbUIsU0FBbkM7QUEyQ0gsS0F2RWlDO0FBd0VsQ0MsWUFBUSxrQkFBWTtBQUNoQjtBQUNJO0FBQ0EseUNBQUssSUFBRyxnQkFBUjtBQUZKO0FBSUg7QUE3RWlDLENBQWxCLENBQXBCOztBQWdGQUMsU0FBU0QsTUFBVCxDQUNJLG9CQUFDLE1BQUQsQ0FBUSxVQUFSLE9BREosRUFFSUUsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQUZKIiwiZmlsZSI6IlNvZnRTa2lsbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuU29mdFNraWxscyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdmFyIGN0eFNTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb2Z0U2tpbGxDaGFydFwiKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIC8vIHZhciBteVJhZGFyQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4U1MsIHtcclxuICAgICAgICAvLyAgICAgdHlwZTogJ3JhZGFyJyxcclxuICAgICAgICAvLyAgICAgZGF0YToge1xyXG4gICAgICAgIC8vICAgICAgICAgbGFiZWxzOiBbXCJFYXRpbmdcIiwgXCJEcmlua2luZ1wiLCBcIlNsZWVwaW5nXCIsIFwiRGVzaWduaW5nXCIsIFwiQ29kaW5nXCIsIFwiQ3ljbGluZ1wiLCBcIlJ1bm5pbmdcIl0sXHJcbiAgICAgICAgLy8gICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMC4yKVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBvaW50Q29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiBcIiNmZmZcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA5MCwgODEsIDU2LCA1NSwgNDBdXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgXVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBIaWdoY2hhcnRzLmNoYXJ0KCdzb2Z0U2tpbGxDaGFydCcsIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvbGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCdWRnZXQgdnMgc3BlbmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IC04MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJzgwJSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ1NhbGVzJywgJ01hcmtldGluZycsICdEZXZlbG9wbWVudCcsICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJbmZvcm1hdGlvbiBUZWNobm9sb2d5JywgJ0FkbWluaXN0cmF0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja21hcmtQbGFjZW1lbnQ6ICdvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVJbnRlcnBvbGF0aW9uOiAncG9seWdvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Rm9ybWF0OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjp7c2VyaWVzLmNvbG9yfVwiPntzZXJpZXMubmFtZX06IDxiPiR7cG9pbnQueTosLjBmfTwvYj48YnIvPidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFs0MzAwMCwgMTkwMDAsIDYwMDAwLCAzNTAwMCwgMTcwMDAsIDEwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFBsYWNlbWVudDogJ29uJ1xyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxjYW52YXMgaWQ9XCJzb2Z0U2tpbGxDaGFydFwiID48L2NhbnZhcz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNvZnRTa2lsbENoYXJ0XCI+PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8d2luZG93LlNvZnRTa2lsbHMgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29mdC1za2lsbHMnKVxyXG4pOyJdfQ==
