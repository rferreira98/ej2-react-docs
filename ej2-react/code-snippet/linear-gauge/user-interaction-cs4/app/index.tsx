


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, GaugeTooltip, Inject } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent id='gauge' tooltip={ { enable: true, fill: '#e5bcbc', border: { color: '#000000' } } }>
    <Inject services={[GaugeTooltip]}/>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={80}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>,document.getElementById('gauge'));



