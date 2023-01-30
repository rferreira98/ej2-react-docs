

import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {
  let items: ItemModel[] = [
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    },
    {
        text: 'Mark as Read'
    },
    {
        text: 'Like Message'
    }];

    return (
    <div>
      <DropDownButtonComponent items = {items} iconCss='ddb-icons e-message' cssClass= 'e-vertical' iconPosition='Top'> Message </DropDownButtonComponent>
      </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


