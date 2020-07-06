function stylemethod1(){
    alert("Style Attribute (has property and value) \n <body> \n <p style=\"color: blue;\"> TEXT </P> \n </body>")
}

function stylemethod2(){
    alert("Style Tag (select element and change) \n <body> \n <p> TEXT </P> \n <style> \n p { \n color: blue; \n } \n </style> \n </body>")
}

function stylemethod3(){
    alert("Create a second file (NAME.css) in HTML file and add a link tag in HEAD element \n <head> \n <title> CSS FILE </title> \n <link rel=\"stylesheet\" href=\"NAME.css\"> \n </head>")
}

function coloringtext(){
    alert("In CSS file, add a color or hex code (hex codes can be found on google)\n    div {\n    color: #a023ea\n    }")
}

function backgroundcolor(){
    alert("In CSS file, add a color or hex code (hex codes can be found on google) \n body { \n background-color: #a023ea \n }")
}

function fontsize(){
    alert("alongside traditional H1-H6 tags\n     In CSS file \n div { \n font-size: 40px; \n } \n OR \n use _em to increase default font size \n (2em, 3em etc), font-size: 2em; \n     </div>")
}

function textweight(){
    alert("Use values 100-900 \n div { \n font-weight: 100; \n } \n OR \n div {\n font-weight: lighter; \n } \n lighter, normal, bold, or bolder")
}

function selectors (){
    alert("Use ID (#) or Class (.) to specify selection name. \n <body> \n <p id=\"SELECTIONNAME\"> TEXT </p> \n <class class=\"SELECTIONNAME\"> TEXT </class> \n #SELECTIONNAME { \n color: black; \n } \n .SELECTIONNAME { \n color: white; \n }")
}