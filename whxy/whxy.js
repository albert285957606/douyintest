const request = require('request');
const cheerio = require('cheerio');
const htmlparser2 = require('htmlparser2');


var url = 'http://uia.whxy.edu.cn/cas/login?service=http%3A%2F%2F59.172.226.5%3A80%2Feams%2Fsso%2Flogin.action%3FtargetUrl%3D%7Bbase64%7DaHR0cDovLzU5LjE3Mi4yMjYuNTo4MC9lYW1zL2hvbWUuYWN0aW9u'
request(url,function (error,response,body) {
    if (error){
        console.log("抓取失败");
    }
    //console.log(response)
    //console.log(body)
    console.log("----开始抓取------")
    console.log(typeof(response));
    console.log(typeof(body));
    console.log(body)
    const $ = cheerio.load(body);
    var lt = $('#fm1 div.login-body-b input[name=lt]').attr('value')
    console.log(lt)
    console.log(response.headers['set-cookie'].toString())
    console.log(response.headers)
    //console.log(response.headers)
    var Cookie = response.headers['set-cookie'].toString()
    request({url,headers:{'Cookie':Cookie}},function(error,response,body){
    	if (error) {console.log(error)}
    	console.log(body)
    console.log(response.headers)
    console.log(this.headers)
    })
    //console.log($('#fm1 div.login-body-b input[name=lt]').attr('value'))
    /*request.post(url,{'username':'18202110215','password':'2443253gcl','lt':lt,'_eventId':'submit'},function(err,httpResponse,body){
    	if (err) {
    		console.log(err)
    	}
    	console.log(body)
    })*/
});

/*request({
	method:'GET',
	url:url,
	har:{
		url:url,
		method:'POST',
		postData:{
			formData:{
				'username':'18202110215','password':'2443253gcl','lt':lt,'_eventId':'submit'
			}
		}
	}
})*/