window.Languages = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="mx-auto mb-1">
                <h3>Languages</h3>

                <div className="row ">
                    <div className="col-md-12 text-center">
                        <h5>Italian</h5>
                    </div>

                    <svg width="33%" height="33%" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" style={{ fill: "#fff" }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-ring" style={{ fill: 'transparent', stroke: "#d2d3d4", strokeWidth: 3 }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-segment" style={{ fill: 'transparent', stroke: "#ce4b99", strokeWidth: 3, strokeDasharray: "85 15", strokeDashoffset: "0" }} cx="21" cy="21" r="15.91549430918954"></circle>
                    </svg>

                    <svg width="33%" height="33%" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" style={{ fill: "#fff" }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-ring" style={{ fill: 'transparent', stroke: "#d2d3d4", strokeWidth: 3 }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-segment" style={{ fill: 'transparent', stroke: "#ce4b99", strokeWidth: 3, strokeDasharray: "85 15", strokeDashoffset: "0" }} cx="21" cy="21" r="15.91549430918954"></circle>
                    </svg>

                    <svg width="33%" height="33%" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" style={{ fill: "#fff" }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-ring" style={{ fill: 'transparent', stroke: "#d2d3d4", strokeWidth: 3 }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-segment" style={{ fill: 'transparent', stroke: "#ce4b99", strokeWidth: 3, strokeDasharray: "85 15", strokeDashoffset: "0" }} cx="21" cy="21" r="15.91549430918954"></circle>
                    </svg>

                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <h5>English</h5>
                    </div>

                    <svg width="33%" height="33%" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" style={{ fill: "#fff" }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-ring" style={{ fill: 'transparent', stroke: "#d2d3d4", strokeWidth: 3 }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-segment" style={{ fill: 'transparent', stroke: "#ce4b99", strokeWidth: 3, strokeDasharray: "85 15", strokeDashoffset: "0" }} cx="21" cy="21" r="15.91549430918954"></circle>
                    </svg>

                    <svg width="33%" height="33%" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" style={{ fill: "#fff" }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-ring" style={{ fill: 'transparent', stroke: "#d2d3d4", strokeWidth: 3 }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-segment" style={{ fill: 'transparent', stroke: "#ce4b99", strokeWidth: 3, strokeDasharray: "85 15", strokeDashoffset: "0" }} cx="21" cy="21" r="15.91549430918954"></circle>
                    </svg>

                    <svg width="33%" height="33%" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" style={{ fill: "#fff" }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-ring" style={{ fill: 'transparent', stroke: "#d2d3d4", strokeWidth: 3 }} cx="21" cy="21" r="15.91549430918954"></circle>
                        <circle className="donut-segment" style={{ fill: 'transparent', stroke: "#ce4b99", strokeWidth: 3, strokeDasharray: "85 15", strokeDashoffset: "0" }} cx="21" cy="21" r="15.91549430918954"></circle>
                    </svg>

                </div>

            </div>
        );
    }
});

ReactDOM.render(
    <window.Languages />,
    document.getElementById('languages')
);

