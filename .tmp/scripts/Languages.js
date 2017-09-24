"use strict";

window.Languages = React.createClass({
    displayName: "Languages",

    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {

        new Chart(document.getElementById("italian-read"), {
            type: 'doughnut',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [{
                    data: [80, 20]
                }]
            },
            options: {

                legend: { display: false },
                rotation: Math.PI,
                circumference: Math.PI,
                title: {
                    display: false,
                    text: 'Read'
                }
            }
        });
        var i = new Chartist.Pie('#italian-write', {
            series: [100]
        }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
        });
        var i = new Chartist.Pie('#italian-speak', {
            series: [100]
        }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
        });

        var i = new Chartist.Pie('#english-read', {
            series: [80, 20]
        }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
        });
        var i = new Chartist.Pie('#english-write', {
            series: [80, 20]
        }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
        });
        var i = new Chartist.Pie('#english-speak', {
            series: [80, 20]
        }, {
            donut: true,
            donutWidth: 20,
            startAngle: 270,
            total: 200,
            showLabel: false
        });
        //console.log("AboutMe: componentDidMount");
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "mx-auto mb-1" },
            React.createElement(
                "h3",
                null,
                "Languages"
            ),
            React.createElement(
                "div",
                { className: "row " },
                React.createElement(
                    "div",
                    { className: "col-md-12 text-center" },
                    React.createElement(
                        "h5",
                        null,
                        "Italian"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-4 col-sm-4 text-center" },
                    React.createElement("canvas", { id: "italian-read" }),
                    React.createElement(
                        "h6",
                        null,
                        "Read"
                    )
                ),
                React.createElement("div", { id: "italian-write", className: "col-xs-4 col-sm-4" }),
                React.createElement("div", { id: "italian-speak", className: "col-xs-4 col-sm-4" })
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-12 text-center" },
                    React.createElement(
                        "h5",
                        null,
                        "English"
                    )
                ),
                React.createElement("div", { id: "english-read", className: "col-xs-4 col-sm-4" }),
                React.createElement("div", { id: "english-write", className: "col-xs-4 col-sm-4" }),
                React.createElement("div", { id: "english-speak", className: "col-xs-4 col-sm-4" })
            )
        );
    }
});

ReactDOM.render(React.createElement(window.Languages, null), document.getElementById('languages'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmd1YWdlcy5qc3giXSwibmFtZXMiOlsid2luZG93IiwiTGFuZ3VhZ2VzIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiQ2hhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIm9wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5Iiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjaXJjdW1mZXJlbmNlIiwidGl0bGUiLCJ0ZXh0IiwiaSIsIkNoYXJ0aXN0IiwiUGllIiwic2VyaWVzIiwiZG9udXQiLCJkb251dFdpZHRoIiwic3RhcnRBbmdsZSIsInRvdGFsIiwic2hvd0xhYmVsIiwicmVuZGVyIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFNBQVAsR0FBbUJDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakNDLHFCQUFpQiwyQkFBWTtBQUN6QixlQUFPLEVBQVA7QUFDSCxLQUhnQztBQUlqQ0MsdUJBQW1CLDZCQUFXOztBQUUxQixZQUFJQyxLQUFKLENBQVVDLFNBQVNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVixFQUFtRDtBQUMvQ0Msa0JBQU0sVUFEeUM7QUFFL0NDLGtCQUFNO0FBQ0pDLHdCQUFRLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsUUFBbkIsRUFBNkIsZUFBN0IsRUFBOEMsZUFBOUMsQ0FESjtBQUVKQywwQkFBVSxDQUNSO0FBQ0VGLDBCQUFNLENBQUMsRUFBRCxFQUFJLEVBQUo7QUFEUixpQkFEUTtBQUZOLGFBRnlDO0FBVS9DRyxxQkFBUzs7QUFFYkMsd0JBQVEsRUFBRUMsU0FBUyxLQUFYLEVBRks7QUFHYkMsMEJBQVVDLEtBQUtDLEVBSEY7QUFJYkMsK0JBQWVGLEtBQUtDLEVBSlA7QUFLUEUsdUJBQU87QUFDTEwsNkJBQVMsS0FESjtBQUVMTSwwQkFBTTtBQUZEO0FBTEE7QUFWc0MsU0FBbkQ7QUFxQkEsWUFBSUMsSUFBSSxJQUFJQyxTQUFTQyxHQUFiLENBQWlCLGdCQUFqQixFQUFtQztBQUN2Q0Msb0JBQVEsQ0FBQyxHQUFEO0FBRCtCLFNBQW5DLEVBRUQ7QUFDSEMsbUJBQU8sSUFESjtBQUVIQyx3QkFBWSxFQUZUO0FBR0hDLHdCQUFZLEdBSFQ7QUFJSEMsbUJBQU8sR0FKSjtBQUtIQyx1QkFBVztBQUxSLFNBRkMsQ0FBUjtBQVNBLFlBQUlSLElBQUksSUFBSUMsU0FBU0MsR0FBYixDQUFpQixnQkFBakIsRUFBbUM7QUFDdkNDLG9CQUFRLENBQUMsR0FBRDtBQUQrQixTQUFuQyxFQUVEO0FBQ0hDLG1CQUFPLElBREo7QUFFSEMsd0JBQVksRUFGVDtBQUdIQyx3QkFBWSxHQUhUO0FBSUhDLG1CQUFPLEdBSko7QUFLSEMsdUJBQVc7QUFMUixTQUZDLENBQVI7O0FBVUEsWUFBSVIsSUFBSSxJQUFJQyxTQUFTQyxHQUFiLENBQWlCLGVBQWpCLEVBQWtDO0FBQ3RDQyxvQkFBUSxDQUFDLEVBQUQsRUFBSSxFQUFKO0FBRDhCLFNBQWxDLEVBRUQ7QUFDSEMsbUJBQU8sSUFESjtBQUVIQyx3QkFBWSxFQUZUO0FBR0hDLHdCQUFZLEdBSFQ7QUFJSEMsbUJBQU8sR0FKSjtBQUtIQyx1QkFBVztBQUxSLFNBRkMsQ0FBUjtBQVNBLFlBQUlSLElBQUksSUFBSUMsU0FBU0MsR0FBYixDQUFpQixnQkFBakIsRUFBbUM7QUFDdkNDLG9CQUFRLENBQUMsRUFBRCxFQUFJLEVBQUo7QUFEK0IsU0FBbkMsRUFFRDtBQUNIQyxtQkFBTyxJQURKO0FBRUhDLHdCQUFZLEVBRlQ7QUFHSEMsd0JBQVksR0FIVDtBQUlIQyxtQkFBTyxHQUpKO0FBS0hDLHVCQUFXO0FBTFIsU0FGQyxDQUFSO0FBU0EsWUFBSVIsSUFBSSxJQUFJQyxTQUFTQyxHQUFiLENBQWlCLGdCQUFqQixFQUFtQztBQUN2Q0Msb0JBQVEsQ0FBQyxFQUFELEVBQUksRUFBSjtBQUQrQixTQUFuQyxFQUVEO0FBQ0hDLG1CQUFPLElBREo7QUFFSEMsd0JBQVksRUFGVDtBQUdIQyx3QkFBWSxHQUhUO0FBSUhDLG1CQUFPLEdBSko7QUFLSEMsdUJBQVc7QUFMUixTQUZDLENBQVI7QUFTQztBQUNKLEtBMUVnQztBQTJFakNDLFlBQVEsa0JBQVk7QUFDaEIsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxNQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUssV0FBVSwrQkFBZjtBQUNJLG9EQUFRLElBQUcsY0FBWCxHQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLGlCQUpKO0FBUUksNkNBQUssSUFBRyxlQUFSLEVBQXdCLFdBQVUsbUJBQWxDLEdBUko7QUFTSSw2Q0FBSyxJQUFHLGVBQVIsRUFBd0IsV0FBVSxtQkFBbEM7QUFUSixhQUhKO0FBZ0JJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixpQkFESjtBQUtJLDZDQUFLLElBQUcsY0FBUixFQUF1QixXQUFVLG1CQUFqQyxHQUxKO0FBTUksNkNBQUssSUFBRyxlQUFSLEVBQXdCLFdBQVUsbUJBQWxDLEdBTko7QUFPSSw2Q0FBSyxJQUFHLGVBQVIsRUFBd0IsV0FBVSxtQkFBbEM7QUFQSjtBQWhCSixTQURKO0FBOEJIO0FBMUdnQyxDQUFsQixDQUFuQjs7QUE2R0FDLFNBQVNELE1BQVQsQ0FDSSxvQkFBQyxNQUFELENBQVEsU0FBUixPQURKLEVBRUl4QixTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBRkoiLCJmaWxlIjoiTGFuZ3VhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lkxhbmd1YWdlcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIG5ldyBDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0YWxpYW4tcmVhZFwiKSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWxzOiBbXCJBZnJpY2FcIiwgXCJBc2lhXCIsIFwiRXVyb3BlXCIsIFwiTGF0aW4gQW1lcmljYVwiLCBcIk5vcnRoIEFtZXJpY2FcIl0sXHJcbiAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YTogWzgwLDIwXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXHJcbiAgICAgICAgcm90YXRpb246IE1hdGguUEkgLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IE1hdGguUEksXHJcbiAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1JlYWQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGkgPSBuZXcgQ2hhcnRpc3QuUGllKCcjaXRhbGlhbi13cml0ZScsIHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbMTAwXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGRvbnV0OiB0cnVlLFxyXG4gICAgICAgICAgICBkb251dFdpZHRoOiAyMCxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZTogMjcwLFxyXG4gICAgICAgICAgICB0b3RhbDogMjAwLFxyXG4gICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpID0gbmV3IENoYXJ0aXN0LlBpZSgnI2l0YWxpYW4tc3BlYWsnLCB7XHJcbiAgICAgICAgICAgIHNlcmllczogWzEwMF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkb251dDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9udXRXaWR0aDogMjAsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IDI3MCxcclxuICAgICAgICAgICAgdG90YWw6IDIwMCxcclxuICAgICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGkgPSBuZXcgQ2hhcnRpc3QuUGllKCcjZW5nbGlzaC1yZWFkJywge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFs4MCwyMF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkb251dDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9udXRXaWR0aDogMjAsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IDI3MCxcclxuICAgICAgICAgICAgdG90YWw6IDIwMCxcclxuICAgICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaSA9IG5ldyBDaGFydGlzdC5QaWUoJyNlbmdsaXNoLXdyaXRlJywge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFs4MCwyMF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkb251dDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9udXRXaWR0aDogMjAsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IDI3MCxcclxuICAgICAgICAgICAgdG90YWw6IDIwMCxcclxuICAgICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaSA9IG5ldyBDaGFydGlzdC5QaWUoJyNlbmdsaXNoLXNwZWFrJywge1xyXG4gICAgICAgICAgICBzZXJpZXM6IFs4MCwyMF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkb251dDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9udXRXaWR0aDogMjAsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IDI3MCxcclxuICAgICAgICAgICAgdG90YWw6IDIwMCxcclxuICAgICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFib3V0TWU6IGNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+TGFuZ3VhZ2VzPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+SXRhbGlhbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwiaXRhbGlhbi1yZWFkXCIgPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+UmVhZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0YWxpYW4td3JpdGVcIiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGFsaWFuLXNwZWFrXCIgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FbmdsaXNoPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVuZ2xpc2gtcmVhZFwiIGNsYXNzTmFtZT1cImNvbC14cy00IGNvbC1zbS00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVuZ2xpc2gtd3JpdGVcIiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wtc20tNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbmdsaXNoLXNwZWFrXCIgY2xhc3NOYW1lPVwiY29sLXhzLTQgY29sLXNtLTRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPHdpbmRvdy5MYW5ndWFnZXMgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZ3VhZ2VzJylcclxuKTtcclxuXHJcbiJdfQ==
