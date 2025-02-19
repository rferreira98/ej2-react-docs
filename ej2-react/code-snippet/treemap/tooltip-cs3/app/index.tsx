{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent, Inject, TreeMapTooltip } from '@syncfusion/ej2-react-treemap';

class App extends React.Component {
render() {
  return ( <TreeMapComponent id='treemap'
        dataSource={[
            { fruit:'Apple', count:5000 },
            { fruit:'Mango', count:3000 },
            { fruit:'Orange', count:2300 },
            { fruit:'Banana', count:500 },
            { fruit:'Grape', count:4300 },
            { fruit:'Papaya', count:1200 },
            { fruit:'Melon', count:4500 }
        ]}
        weightValuePath= 'count'
        leafItemSettings= {{
            labelPath: 'fruit'
        }}
        tooltipSettings= {{
            visible: true,
            template:'<div><p>Name: ${fruit}</p><p>Total Count: ${count}</p></div>'
        }}>
        <Inject services={[TreeMapTooltip]} />
    </TreeMapComponent> );
 }
}
ReactDOM.render(<App />, document.getElementById('treemap'));


{% endraw %}