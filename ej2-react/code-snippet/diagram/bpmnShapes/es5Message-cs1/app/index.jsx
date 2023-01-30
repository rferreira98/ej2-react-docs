import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let connector = [{
        // Position of the node
        sourcePoint: {
            x: 100,
            y: 200
        },
        targetPoint: {
            x: 300,
            y: 200
        },
        type: 'Orthogonal',
        //Sets type as Bpmn, flow as Message and message as InitiatingMessage
        shape: {
            type: 'Bpmn',
            flow: 'Message',
            message: 'InitiatingMessage'
        },
    }];
// initialize diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add connector
    connectors={connector}>
      <Inject services={[BpmnDiagrams]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
