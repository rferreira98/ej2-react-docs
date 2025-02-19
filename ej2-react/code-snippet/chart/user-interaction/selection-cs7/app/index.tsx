


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries,  Selection }
from'@syncfusion/ej2-react-charts';
import { selectionData } from 'datasource.ts';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Olympic Medals' isMultiSelect={true} selectionMode='Point'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column' selectionStyle='chartSelection1'></SeriesDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column' selectionStyle='chartSelection2'></SeriesDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column' selectionStyle='chartSelection3'></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



