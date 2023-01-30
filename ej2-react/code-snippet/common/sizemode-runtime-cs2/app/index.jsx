import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { enableRipple } from '@syncfusion/ej2-base';
//Enable ripple effect
enableRipple(true);
function App() {
    const touchContent = "Touch Mode";
    const mouseContent = "Mouse Mode";
    function btnClick() {
        document.body.classList.add('e-bigger');
    }
    ;
    function mouseClick() {
        document.body.classList.remove('e-bigger');
    }
    return (<div>
          <ButtonComponent id='touch' content={touchContent} onClick={btnClick.bind(this)}></ButtonComponent>
          <ButtonComponent id='mouse' content={mouseContent} onClick={mouseClick.bind(this)}></ButtonComponent>
          <div>
            <CalendarComponent id="calendar"/>
          </div>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
