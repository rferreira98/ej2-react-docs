

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category} from'@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries', labelPlacement: 'OnTicks' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}
      title='Olympic Medals'  >
      <Inject services={[ColumnSeries, Legend, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


