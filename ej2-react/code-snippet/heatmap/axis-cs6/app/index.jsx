{% raw %}
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';
class App extends React.Component {
    heatmapData = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
    ];
    render() {
        return (<HeatMapComponent id='heatmap' xAxis={{
                valueType: "DateTime",
                minimum: new Date(2007, 0, 1),
                intervalType: "Years",
                labelFormat: "yyyy",
            }} yAxis={{
                valueType: "Numeric",
                labelFormat: "${value}"
            }} legendSettings={{
                visible: false,
            }} dataSource={this.heatmapData}>
            <Inject services={[Adaptor, Tooltip]}/>
            </HeatMapComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('heatmap'));
{% endraw %}