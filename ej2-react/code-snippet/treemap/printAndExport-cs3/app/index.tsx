{% raw %}



import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent, ImageExport, Inject } from '@syncfusion/ej2-react-treemap';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export class App extends React.Component {
public click(){
    this.treemap.export('PNG', 'TreeMap', null, false).then((data: string)=>{
        document.writeln(data);
    })
}
public treemap: TreeMapComponent;
render() {
  return ( <div>
    <ButtonComponent value='Export' onClick= { this.click.bind(this)}>Export</ButtonComponent> <TreeMapComponent id='treemap' allowImageExport={true} ref={g => this.treemap = g}
        dataSource={[
            {State:"United States", GDP:17946, percentage:11.08, Rank:1},
            {State:"China", GDP:10866, percentage: 28.42, Rank:2},
            {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
            {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
            {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
            {State:"France", GDP:2421, percentage:-9.69, Rank:6},
            {State:"India", GDP:2073, percentage:13.65, Rank:7},
            {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
            {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
            {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
        ]}
        weightValuePath= 'GDP'
        leafItemSettings= {{
            labelPath: 'State',
            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',
            labelStyle: {
                color: '#000000'
            },
            border: {
                color: '#000000',
                width: 0.5
            }
        }}>
        <Inject services={[ImageExport]} />
    </TreeMapComponent> </div> );
 }
}
ReactDOM.render(<App />, document.getElementById('treemap'));


{% endraw %}