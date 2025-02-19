---
layout: post
title: Zooming in React Chart component | Syncfusion
description: Learn here all about Zooming in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Zooming 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in React Chart component

To get start quickly with React Chart Zooming and Panning, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=6Fq99_MnpSA" %}

## Enable Zooming

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enableselectionzooming)
property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablemousewheelzooming) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablepinchzooming) property to true in `zoomSettings`, you can zoom the chart through pinch gesture in touch enabled devices.

 >Note: Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11,
Chrome and Opera browsers support multi-touch in desktop devices.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs4" %}

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons. Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

## Modes

The [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#mode) property in zoomSettings specifies whether the chart is allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X - Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY - Allows us to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs5" %}

## Toolbar

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show the desired options in the toolbar using the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#toolbaritems) property. Also using the [`showToolbar`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#showtoolbar) property, you can show toolkit for zooming and panning the chart during initial rendering itself.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs6" %}

## Eanble Scrollbar

Using [`enableScrollbar`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablescrollbar) property, you can able to add scrollbar for zoomed chart. Using this scrollbar, you can pan or zoom the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs7" %}

## Enable Pan

Using [`enablePan`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablepan) property you can able to pan the zoomed chart without help of toolbar items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs8" %}

## Auto interval on zooming

By using [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#enableautointervalonzooming) property, the axis interval will get calculated automatically with respect to the zoomed range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs9" %}

>Note: To use zooming feature, we need to inject `Zoom` module into the `services`.