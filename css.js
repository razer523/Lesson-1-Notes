function stylemethod1() {
    alert("Style Attribute (has property and value) \n <body> \n <p style=\"color: blue;\"> TEXT </P> \n </body>")
}

function stylemethod2() {
    alert("Style Tag (select element and change) \n <body> \n <p> TEXT </P> \n <style> \n p { \n color: blue; \n } \n </style> \n </body>")
}

function stylemethod3() {
    alert("Create a second file (NAME.css) in HTML file and add a link tag in HEAD element \n <head> \n <title> CSS FILE </title> \n <link rel=\"stylesheet\" href=\"NAME.css\"> \n </head>")
}

function coloringtext() {
    alert("In CSS file, add a color or hex code (hex codes can be found on google)\n    div {\n    color: #a023ea\n    }")
}

function backgroundcolor() {
    alert("In CSS file, add a color or hex code (hex codes can be found on google) \n body { \n background-color: #a023ea \n }")
}

function fontsize() {
    alert("alongside traditional H1-H6 tags\n     In CSS file \n div { \n font-size: 40px; \n } \n OR \n use _em to increase default font size \n (2em, 3em etc), font-size: 2em; \n     </div>")
}

function textweight() {
    alert("Use values 100-900 \n div { \n font-weight: 100; \n } \n OR \n div {\n font-weight: lighter; \n } \n lighter, normal, bold, or bolder")
}

function selectors() {
    alert("Use ID (#) or Class (.) to specify selection name. \n <body> \n <p id=\"SELECTIONNAME\"> TEXT </p> \n <class class=\"SELECTIONNAME\"> TEXT </class> \n #SELECTIONNAME { \n color: black; \n } \n .SELECTIONNAME { \n color: white; \n }")
}

function pseudoclasses() {
    alert("A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.\n Style according to relation to other elements, or user activity with element. \n <body> \n <a id=\"topic-link\" href=\"URL\"> TEXT </a> \n </body> \n To make text red! \n #topic-link { \n color: red; \n } \n #topic-link: visited { \n color:red \n } \n use : visited \n : hover \n : checked \n etc...")
}

function fontfamily() {
    alert("p{ \n font-family: san-serif; \n } \n USE Google for more fonts (font names with spaces must be wrapped in ' ' \n IF OS does not have font, give multiple options: \n font-family: 'Trebuchet MS', arial, helvetica, sans-serif \n } \n The first has priority, OS will go to next if first is not available.")
}

function webfonts(){
    alert("To use a font from a URL, you must first link font to the head above your CSS file. \n <head> \n <link href=\"FONT-URL\" rel=\"stylesheet\"> \n <link rel=\"stylesheet\" href=\"NAME.css\"> \n </head>")
}

function borders(){
    alert("To add a border to a box of text:\n p{ \n border-style: solid; \n } \n solid, none, hidden, dotted, dashed, double, etc.... \n Multiple Borders= Top-Right-Bottom-Left \n sperate it by commas. ")
}

function borderformat(){
    alert("To format your border, use: \n p { \n border-style: _______ \n border-width: _______ \n border-color: _______ \n OR \n p { \n border: WIDTH STYLE COLOR (no commas) \n }") 
}

function positioning(){
    alert("To change the position of a text area, use: position: _____ \n nav { \n position: absolute; \n } \n Absolute: locks line to screen outside of content. \n Fixed: locks line to window. \n Static: DEFAULT, in line with text. \n Relative: keeps static look but moves area to given location using top: left: info.")
}

function boxmodel(){
    alert("The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.")
}

function margin(){
    alert("The margin is the area around the elements, outside of the border. Does not change the size of the Element. \n p { \n margin-top: 20px; \n margin-right: 20px; \n margin-bottom: 20px; \n margin-left: 20px; \n } \n Defined in pixels (px)")
}

function border(){
    alert("Second layer in the Box model, border that goes aorund the content. \ndotted - Defines a dotted border \ndashed - Defines a dashed border \nsolid - Defines a solid border \ndouble - Defines a double border \ngroove - Defines a 3D grooved border. \n*The effect depends on the border-color value \nridge - Defines a 3D ridged border. \n*The effect depends on the border-color value \ninset - Defines a 3D inset border. \n*The effect depends on the border-color value \noutset - Defines a 3D outset border. \n*The effect depends on the border-color value\nnone - Defines no border\nhidden - Defines a hidden border ")
}

function padding(){
    alert("The padding is the space between the border and the content. \nValues to use for defining: \npadding-top: 20px; \npadding-right: 20px; \npadding-bottom: 20px; \npadding-left: 20px;")
}

function content(){
    alert("The content of the box, where text and images appear. Use width and height to adjust the content area only. \nwidth: 20px; \nheight: 20px;")
}

function float(){
    alert("The float property is used for positioning and formatting content e.g. let an image float left to the text in a container. This prevents it from only being displayed on a single line of text.\n\n  left - The element floats to the left of its container\nright - The element floats to the right of its container\nnone - The element does not float (will be displayed just where it occurs in the text). This is default\ninherit - The element inherits the float value of its parent\n\nIn its simplest use, the float property can be used to wrap text around images.")
}