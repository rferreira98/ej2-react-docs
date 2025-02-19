import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    let grid;
    const actionBegin = (args) => {
        if (grid && (args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const cols = grid.columns;
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = true;
                }
                else if (col.field === "ShipCountry") {
                    col.visible = false;
                }
            }
        }
        if (grid && args.requestType === 'save') {
            const cols = grid.columns;
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = false;
                }
                else if (col.field === "ShipCountry") {
                    col.visible = true;
                }
            }
        }
    };
    return <GridComponent dataSource={data} actionBegin={actionBegin} editSettings={editOptions} toolbar={toolbarOptions} height={265} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' visible={false}/>
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
