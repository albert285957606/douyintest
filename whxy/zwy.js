const request = require('request');
const cheerio = require('cheerio');
const htmlparser2 = require('htmlparser2');
const fs = require("fs");


/*
request('http://uia.whxy.edu.cn/cas/login?service=http%3A%2F%2F59.172.226.5%3A80%2Feams%2Fsso%2Flogin.action%3FtargetUrl%3D%7Bbase64%7DaHR0cDovLzU5LjE3Mi4yMjYuNTo4MC9lYW1zL2hvbWUuYWN0aW9u',function (error,response,body) {
    if (error){
        console.log("抓取失败");
    }
    //console.log(response)
    console.log(body)
    fs.writeFile('whxy.html',body,function(error,data){
    	if (error) {
    		console.log(error);
    	}
    	console.log("succeed")

    })
   // bodys = body
    console.log(typeof(response));
    console.log(typeof(body));

});*/

//const dom = htmlparser2.parseDOM('./whxy.html');
//const $ = cheerio.load('./whxy.html');
//console.log($('html').html())
fs.readFile('whxy.html',function(error,data){
	if (error) {
		console.log(error);
	}
	//console.log(data.toString())
	var body = data.toString()
	const $ = cheerio.load(body);
	console.log($('#fm1 div.login-body-b input[name=lt]').attr('value'))

})