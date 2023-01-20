import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    buttonClick() {
        DialogUtility.alert({
            title: 'Low Battery',
            width: '250px',
            content: '10% of battery remaining',
            showCloseIcon: true,
            closeOnEscape: true
        });
    }
    render() {
        return (<div className="App" id='dialog-target'>
       <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={this.buttonClick.bind(this)}>Alert</ButtonComponent>
  </div>);
    }
}
export default App;