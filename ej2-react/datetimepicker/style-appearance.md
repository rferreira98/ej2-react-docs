---
layout: post
title: Style appearance in React Datetimepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React Datetimepicker component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DateTimePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```css
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        font-size: 20px;
        height: 40px;
    }
```

## Customizing the DateTimePicker icons element

Use the following CSS to customize the DateTimePicker icons element

```css
/* To specify background color and font size */
.e-datetime-wrapper .e-input-group-icon.e-date-icon, .e-datetime-wrapper .e-input-group-icon.e-time-icon {
        font-size: 16px;
        background-color: blanchedalmond;
    }
```

## Customizing the time picker popup in the DateTimePicker

Use the following CSS to customize the time picker popup in the DateTimePicker

```css
/* To specify height */
.e-datetimepicker.e-popup {
        height: 100px;
}
```

## Customizing the Calendar popup of the DateTimePicker

Please check the below section, to customize the style and appearance of the Calendar component in the DateTimePicker

[Customizing Calendar's style and appearance](../calendar/style-appearance/)