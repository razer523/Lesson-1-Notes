function imageelement() {
    alert("To link an image <img src=URL> The <img> does not need to be closed.")
}

function tagattribute() {
    alert("1) can be used to change or modify a tags functionality\n2) Can add functionality that is not automatically associated with that tag by default.\n\n Example:\n <img src=> \nthe tag is <img> and the attribute is src=")
}

function anchorelement(){
    alert("<a> is the anchor element, it is used to add a hyperlink.\n Must be closed, but can have TEXT added between the opening and closing.\n \nTo open link in the same window. \n<a href=\"URL\"> TEXT </a> \n\nTo open link in a new window. \n<a href=\"URL\" target=\"_blank\"> TEXT </a> \nTags= <a> </a> \n Attribute= <href=\" \" \n Attribute= <target=\" \" (\"_blank\" opens a new tab in browser)")
}

function inputelement(){
    alert("Name: < input > will give you Name: and an input box \n OR \n < input placeholder=\"Name\" > will give you an input box with Name in the box.")
}

function creatinglist(){
    alert("<ol>OrderedList\n <li>Item 1</li>\n<li>Item 2</li>\n<ul>Adding an unordered list:\n<li>Object A</li>\n<li>Object B</li>\n</ul>\n<li> Item 3</li>\n<li>Item 4</li>\n<ul>Add more unordered lists\n<li>Object C</li></ul>\n</ol>")
} 

function tableelement(){
    alert("Table Element Code \n <table>\n <tr> ROWS \n<th> ROW1 </th>\n <th> ROW2 </th>\n <th> ROW3 </th>\n </tr>\n <tr> COLUMNS \n<td> COLUMN1 </td>\n <td> COLUMN2 </td> \n<td> COLUMN3 </td> \n</tr> \n</table>")
}

function dropdownlist(){
    alert("<form> \n <select name=\"color\">\n<option value=\"R\"> Red </option> \n<option value=\"B\"> Blue </option>\n<option value=\"G\"> Green </option> \n <option value=\"W\"> White </option> \n </select> \n </form> \nTo select a default option, use selected, <option selected value=\"R\"> Red </option>" )
}

function formcheckboxes(){
    alert("<form> \n<input type=\"Checkbox\" id=\"red\" name=\"colorRed\" vaule=\"R\"/> \n <label for=\"red\"> Red </label>\n</input>\n <input type=\"Checkbox\" id=\"green\" name=\"colorRed\" vaule=\"G\"/> \n <label for=\"green\"> Green </label> \n </input>\n <input type=\"Checkbox\" id=\"blue\" name=\"colorRed\" vaule=\"B\"/> \n<label for=\"blue\"> Blue </label> \n</input> \n<input type=\"Checkbox\" id=\"white\" name=\"colorRed\" vaule=\"W\"/> \n<label for=\"white\"> White </label> \n</input> \n </form >")
}

function formradiobuttons(){
    alert("<form>\n <input type=\"radio\" id=\"weatherSun\" name=\"Weather\" value=\"Sun\"/>\n<label for=\"weatherRain\">Sun</label>\n<input type=\"radio\" id=\"weatherRain\" name=\"Weather\" value=\"Rain\"/>\n<label for=\"weatherRain\">Rain</label>\n<input type=\"radio\" id=\"weatherCloudy\" name=\"Weather\" value=\"Cloudy\"/>\n<label for=\"weatherCloudy\">Cloudy</label>\n</form>")
}

function fullformexample(){
    alert("<form>\n    First Name: <input type=\"text\" name=\"firstname\" placeholder=\"First Name\"><br>\n    Last Name: <input type=\"text\" name=\"lastname\" placeholder=\"Last Name\"><br>\n    Gender:\n    <select name=\"gender\">\n      <option selected value=\"M\">Male</option>\n      <option value=\"F\">Female</option>\n      <option value=\"O\">Other</option>\n    </select><br>\n    Age: <br>\n    <input type=\"radio\" id=\"Child\" name=\"age\" value=\"0-17\"/>\n    <label for=\"Child\">0-17</label><br>\n    <input type=\"radio\" id=\"Adult1\" name=\"age\" value=\"18-40\"/>\n    <label for=\"Adult1\">18-40</label><br>\n    <input type=\"radio\" id=\"Adult2\" name=\"age\" value=\"41-60\"/>\n    <label for=\"Adult2\">41-60</label><br>\n    <input type=\"radio\" id=\"Adult3\" name=\"age\" value=\"61 and above\"/>\n    <label for=\"Adult3\">61 and above</label><br>\n    <button type=\"submit\">Submit Me</button>\n  </form> ")
}