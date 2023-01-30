

import { enableRipple } from '@syncfusion/ej2-base';
import { ItemModel, SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render SplitButton.
function App() {

  let items: ItemModel[] = [
    {
      text: 'Cut',
    },
    {
      text: 'Copy',
    },
    {
      text: 'Paste',
    }];
  return (
  <div>
      <SplitButtonComponent id="element" items = {items}> Paste </SplitButtonComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));



