

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    Inject,
    NodeModel,
    BpmnShape,
    BpmnSubProcessModel,
    BpmnShapeModel,
    BpmnDiagrams,
    BpmnActivityModel,
    BpmnFlowModel,
    BpmnGatewayModel
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as DataObject
    shape: {
        type: 'Bpmn',
        shape: 'DataObject',
        //Sets collection as true and type as Input
        dataObject: {
            collection: true,
            type: 'Input'
        },
        //Sets the id, angle, length and text for the annotation
        annotations: [{
            id: 'left',
            angle: 45,
            length: 150,
            text: 'Left',
        }]
    }
}];
// initialize diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add node
      nodes={node}
    >
      <Inject services={[BpmnDiagrams]} />
    </DiagramComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



