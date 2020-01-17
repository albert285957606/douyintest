const cheerio = require('cheerio');
//var content = "<ul id=\"fruits\"> <li class=\"apple\">Apple</li><li class=\"orange\">Orange</li><li class=\"pear\">Pear</li></ul>"
var content = "<input type=\"hidden\" name=\"lt\" value=\"_c23492159-67D7-989D-1575-48DC83C2F965_kAEC651EF-9800-798E-F3E8-F4B50EC00703\"><input type=\"hidden\" name=\"_eventId\" value=\"submit\">"

const $ = cheerio.load(content)
console.log($.html())


//console.log($('.apple', '#fruits').text())
//=> Apple

//console.log($('ul .pear').attr('class'))
//=> pear

//console.log($('li[class=orange]').text())
//=> Orange

console.log($('input[name=lt]').attr('value'))