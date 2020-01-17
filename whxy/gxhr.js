const xhr = require(XMLHttpRequest);
//var xhr = new XMLHttpRequest();

var url = 'http://uia.whxy.edu.cn/cas/login?service=http%3A%2F%2F59.172.226.5%3A80%2Feams%2Fsso%2Flogin.action%3FtargetUrl%3D%7Bbase64%7DaHR0cDovLzU5LjE3Mi4yMjYuNTo4MC9lYW1zL2hvbWUuYWN0aW9u';
xhr.open('GET',url);
console.log(xhr.responseText);