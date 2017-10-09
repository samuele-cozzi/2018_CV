"use strict";

window.SoftSkills = React.createClass({
    displayName: "SoftSkills",

    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        // Highcharts.chart('softSkillChart', {
        //         chart: {
        //             polar: true,
        //             type: 'line'
        //         },
        //         title: {
        //             text: ''
        //         },
        //         legend: {
        //             enabled: false
        //         },
        //         pane: {
        //             size: '80%'
        //         },
        //         xAxis: {
        //             categories: ['Iniziativa e innovazione'
        //                 , 'Leadership e Management'
        //                 , 'Organizzazione e anticipazione'
        //                 , 'Focus Cliente'
        //                 , 'Senso Relazionale'
        //                 , 'Senso del Risultato'
        //                 , 'Ricerca di Soluzioni'],
        //             tickmarkPlacement: 'on',
        //             lineWidth: 0
        //         },
        //         yAxis: {
        //             gridLineInterpolation: 'polygon',
        //             lineWidth: 0,
        //             min: 0
        //         },
        //         tooltip: {
        //             enabled: false
        //         },
        //         series: [{
        //             data: [10, 8, 9, 8, 7, 9, 10]
        //         }]

        //     });
    },
    render: function render() {
        return (
            // <div id="softSkillChart"></div>
            React.createElement(
                "div",
                null,
                React.createElement("img", { src: "images/SoftSkills.png", className: "img-fluid" })
            )
        );
    }
});

ReactDOM.render(React.createElement(window.SoftSkills, null), document.getElementById('soft-skills'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvZnRTa2lsbHMuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsIlNvZnRTa2lsbHMiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFVBQVAsR0FBb0JDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUhpQztBQUlsQ0MsdUJBQW1CLDZCQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNILEtBM0NpQztBQTRDbENDLFlBQVEsa0JBQVk7QUFDaEI7QUFDSTtBQUNBO0FBQUE7QUFBQTtBQUNJLDZDQUFLLEtBQUksdUJBQVQsRUFBaUMsV0FBVSxXQUEzQztBQURKO0FBRko7QUFNSDtBQW5EaUMsQ0FBbEIsQ0FBcEI7O0FBc0RBQyxTQUFTRCxNQUFULENBQ0ksb0JBQUMsTUFBRCxDQUFRLFVBQVIsT0FESixFQUVJRSxTQUFTQyxjQUFULENBQXdCLGFBQXhCLENBRkoiLCJmaWxlIjoiU29mdFNraWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5Tb2Z0U2tpbGxzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSGlnaGNoYXJ0cy5jaGFydCgnc29mdFNraWxsQ2hhcnQnLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBjaGFydDoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBvbGFyOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdsaW5lJ1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGV4dDogJydcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHBhbmU6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBzaXplOiAnODAlJ1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2F0ZWdvcmllczogWydJbml6aWF0aXZhIGUgaW5ub3ZhemlvbmUnXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICwgJ0xlYWRlcnNoaXAgZSBNYW5hZ2VtZW50J1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAsICdPcmdhbml6emF6aW9uZSBlIGFudGljaXBhemlvbmUnXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICwgJ0ZvY3VzIENsaWVudGUnXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICwgJ1NlbnNvIFJlbGF6aW9uYWxlJ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAsICdTZW5zbyBkZWwgUmlzdWx0YXRvJ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAsICdSaWNlcmNhIGRpIFNvbHV6aW9uaSddLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpY2ttYXJrUGxhY2VtZW50OiAnb24nLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpbmVXaWR0aDogMFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ3JpZExpbmVJbnRlcnBvbGF0aW9uOiAncG9seWdvbicsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1pbjogMFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhOiBbMTAsIDgsIDksIDgsIDcsIDksIDEwXVxyXG4gICAgICAgIC8vICAgICAgICAgfV1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxkaXYgaWQ9XCJzb2Z0U2tpbGxDaGFydFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvU29mdFNraWxscy5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5Tb2Z0U2tpbGxzIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvZnQtc2tpbGxzJylcclxuKTsiXX0=
