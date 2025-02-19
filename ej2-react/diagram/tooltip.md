---
layout: post
title: Tooltip in React Diagram component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Diagram component

<!-- markdownlint-disable MD010 -->

In Graphical User Interface (GUI), the tooltip is a message that is displayed when mouse hovers over an element. The diagram provides tooltip support while dragging, resizing, rotating a node, and when the mouse hovers any diagram element.

## Default tooltip

By default, diagram displays a tooltip to provide the size, position, and angle related information while dragging, resizing, and rotating. The following images illustrate how the diagram displays the node information during an interaction.

| Drag | Resize | Rotate |
|---|---|---|
| ![ToolTip During Drag](images/Tooltip_img1.png) | ![ToolTip During Resize](images/Tooltip_img2.png) | ![ToolTip During Rotate](images/Tooltip_img3.png) |

## Common tooltip for all nodes and connectors

The diagram provides support to show tooltip when the mouse hovers over any node/connector.
To show tooltip on mouse over, the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/diagram#tooltip) property of diagram model needs to be set with the tooltip [`content`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltip/#content) and [`position`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltip/#position) as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/tooltip/es5tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/tooltip/es5tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/tooltip/es5tooltip-cs1" %}

### Disable tooltip at runtime

The tooltip on mouse over can be disabled by assigning the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/diagram#tooltip) property as `null`. The following code example illustrates how to disable the mouse over tooltip at runtime.

```ts

//Initializes the Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'650px'}
      height={'350px'}
      constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip}
      //Defines nodes
      nodes={node}
      //Disables mouse over tooltip at runtime
        tooltip = {
            null
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Tooltip for a specific node/connector

The tooltip can be customized for each node and connector. Remove the **InheritTooltip** option from the [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram#constraints) of that node/connector. The following code example illustrates how to customize the tooltip for individual elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipNodes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipNodes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/tooltip/es5TooltipNodes-cs1" %}

## Tooltip template content

Any text or image can be added to the tooltip, by default. To customize the tooltip layout or to create your own visualized element on the tooltip, template can be used.

The following code example illustrates how to add formatted HTML content to the tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipTemplate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipTemplate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/tooltip/es5TooltipTemplate-cs1" %}

## Tooltip alignments

### Tooltip relative to object

The diagram provides support to show tooltip around the node/connector that is hovered by the mouse. The tooltip can be aligned by using the [`position`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltip#position) property of the tooltip.The [`relativeMode`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip defines whether the tooltip has to be displayed around the object or at the mouse position.

The following code example illustrates how to position the tooltip around object.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipObject-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipObject-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/tooltip/es5TooltipObject-cs1" %}

### Tooltip relative to mouse position

To display the tooltip at mouse position, need to set **mouse** option to the [`relativeMode`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip.
The following code example illustrates how to show tooltip at mouse position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipMouse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipMouse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/tooltip/es5TooltipMouse-cs1" %}

## Tooltip animation

To animate the tooltip, a set of specific animation effects are available, and it can be controlled by using the [`animation`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltip#animation) property. The animation property also allows you to set delay, duration, and various other effects of your choice.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipAnimation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/tooltip/es5TooltipAnimation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/tooltip/es5TooltipAnimation-cs1" %}