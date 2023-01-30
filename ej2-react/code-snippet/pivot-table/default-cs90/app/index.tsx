

import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, FieldDroppedEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} onFieldDropped={fieldDropped.bind(this)} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent>);

  function fieldDropped(args: FieldDroppedEventArgs): void  {
    args.droppedField.caption = args.droppedField.name + " --> " + args.droppedAxis;
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



