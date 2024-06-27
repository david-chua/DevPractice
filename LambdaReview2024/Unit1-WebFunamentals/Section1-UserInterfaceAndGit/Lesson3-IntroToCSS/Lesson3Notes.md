### Box Model
Composition of HTML web pages
Places all HTML into boxes
Contains:
- content - text or image
- padding - blank space around content
- border
- margin - blank space around the border

### Types of elements in HTML
- block - fill up entire space horizontally
- inline - fill up as much space as needed


### Height and Width
- We can tell the browser how wide or how tall we want our element to be
- This is used in divs, imgs and other height based element.
- Size values can be in lots of different measures such as pixels (px) or percent of screen (%).

### CSS Inhreitance
CSS stands for cascading style sheets
"cascade" suggest a pattern of inheritance
CSS inheritance is similar to human inheritance in that you pass traits down to ancestor elements.

In CSS, every ancestor of the original parent gains access to all the CSS properties through inheritance.

#### How does inheritance occur?
- The answer is through HTML structure. In HTML, when an element is placed inside another element, it is said to be nested within its parent elements.


### CSS Specificity

- Specificity is the concept we used to describe the ability to style many elements or just one element using CSS selectors.

- Selectors allow us to access HTML tags and update their styles.

### Specificity weight

- Think of weight like a waterfall. The water at the top is less specific and therefore can be overwriten further.

The **<** symbol is used to represent "less specific".

### 3 different style integration in CSS
1. Inline style
2. Embedded style tag in the HTML page
3. Externally linked CSS file

### CSS reset
It's when a developer will remove all default styling provided by browsers.

A popular example is Eric Meyer's popular css reset:

```
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
```

### Responsive units

#### px
Referred to as an absolute length unit.
This means that px does not adjust for its surroundings.

Pros:
- Easiest unit for developers to read from design files
- modern browser now allows px units to grow with built in zoom featuers
- No reliance on cascade for sizing

Cons:
- Rigid unit that is not responsive in layouts
- Hard coded font size values are not accessible for users that change their default settings

#### em
Referred to as relative length unit.
This means that **em** will adjust to its surroundings.

Pros:
- Responsive to surroundings

Cons:
- Can be too flexible at times and create cascading font sizes that weren't expected.
- Converting px to em when creating code from a design file usually requires a calculator or memorization that can feel cumbersome.

#### rem
rem or root em unit is also referred to as a relative length unit.
The root part means taht this unit looks to the root element in a page.

Pros:
- Responsive to root element only
- If you use a % base unit, you can achieve accessibility gains and eliminate awkward conversion system of 16px (the browser's default font size)

Cons:
- If you don' tmake the root element flexible, you will hurt accessibility by overwhelming default user settings in the browser
- Converting px to rem when creating code from the design file requires a calculator or memorization that can feel cumbersome.

#### %

The unit **%** is also referred to as a relative length unit. It is usually used for building responsive layouts more than for font sizing.
The layouts start at the viewport width and then cascade down through the nested units.

Pros:
- Responsiveness start at the viewport level and cascades down to the nested elements, helping you build layouts to adjust to any size

Cons:
- you have to be careful with % based layouts as widths can get too small very fast
- If you don't add everything up to 100% when building layout, % can cause a lot of frustration searching the box model to see where the math went wrong.


#### vw/vh

These units completely rely on the viewport of the browser window to render. While these units can be used, most places any other units can be used. Caution should be used against using them except in specific use-case of full screen layouts.
