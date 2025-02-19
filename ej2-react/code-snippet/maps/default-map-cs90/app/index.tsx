


import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
            <MapsComponent id="maps" zoomSettings={ {
                                        enable: true,
                                        color: 'green',
                                        highlightColor: 'blue',
                                        selectionColor: 'orange',
                                        horizontalAlignment: 'Center',
                                        toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']} }>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);



