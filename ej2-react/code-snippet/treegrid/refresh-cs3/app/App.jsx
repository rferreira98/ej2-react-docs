import * as React from 'react';
import './App.css';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Page, Toolbar } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const treegrid = React.useRef(null);
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const load = () => {
        let instance = treegrid.current;
        if (instance != null) {
            instance.element.addEventListener('mousedown', function (e) {
                if (e.target.classList.contains("e-rowcell")) {
                    if (instance.grid.isEdit) {
                        instance.endEdit();
                    }
                    let index = parseInt(e.target.getAttribute('Index'));
                    instance.selectRow(index);
                    instance.startEdit();
                }
                ;
            });
        }
    };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' height={210} allowPaging={true} toolbar={toolbarOptions} editSettings={editSettings} load={load} ref={treegrid}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='120'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]}/>
      </TreeGridComponent>);
}
;
export default App;