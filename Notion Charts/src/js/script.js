import Plotly from "plotly.js-dist-min";

const root = document.querySelector("#root");

let data = [
    {
        y: [0, 4, 12, 1, -1],
        type: "scatter",
        line: { shape: "spline" },
        mode: "lines",
        texttemplate: "y: %{y}"
    },
];

const layout = {
    plot_bgcolor: "#262626",
    paper_bgcolor: "#191919",
    margin: {autoexpand:true}
}

Plotly.newPlot(root, data, layout);
