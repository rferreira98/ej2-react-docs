{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';
class App extends React.Component {
    render() {
        return (<TreeMapComponent id='treemap' dataSource={[
                { Car: 'Mustang', Brand: 'Ford', count: 232 },
                { Car: 'EcoSport', Brand: 'Ford', count: 121 },
                { Car: 'Swift', Brand: 'Maruti', count: 143 },
                { Car: 'Baleno', Brand: 'Maruti', count: 454 },
                { Car: 'Vitara Brezza', Brand: 'Maruti', count: 545 },
                { Car: 'A3 Cabriolet', Brand: 'Audi', count: 123 },
                { car: 'RS7 Sportback', Brand: 'Audi', count: 523 }
            ]} weightValuePath='count' leafItemSettings={{
                labelPath: 'Car',
                labelFormat: '${Car}-${Brand}'
            }}>
    </TreeMapComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('treemap'));
{% endraw %}