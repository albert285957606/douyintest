import requests
import lxml
from lxml import etree
from bs4 import BeautifulSoup
import time
url = 'http://uia.whxy.edu.cn'
#def get_url():

#    router = '/eams/login.action'
#    shouye_url = url + router
 #   res = requests.get(shouye_url)
#    print(res.text)

#def get_pingtai_url():
 #   ping_router = '/eams/sso/login.action'
 #   ping_url= url + ping_router
#    res = requests.get(ping_url)
#    print(res.text)
def get_login():
    ping_router = '/cas/login?service=http%3A%2F%2F59.172.226.5%3A80%2Feams%2Fsso%2Flogin.action%3FtargetUrl%3D%7Bbase64%7DaHR0cDovLzU5LjE3Mi4yMjYuNTo4MC9lYW1zL2hvbWUuYWN0aW9u'
    ping_url = url + ping_router
    login_router = '/cas/login?service=http%3A%2F%2F59.172.226.5%3A80%2Feams%2Fsso%2Flogin.action%3FtargetUrl%3D%7Bbase64%7DaHR0cDovLzU5LjE3Mi4yMjYuNTo4MC9lYW1zL2hvbWUuYWN0aW9u'
    login_url = url+login_router
    s = requests.sessions.Session()
    ping_res = s.get(ping_url).text
    #print(ping_res)
    ping_res_res = etree.HTML(ping_res)
    pin = ping_res_res.xpath('//*[@id="fm1"]/div[1]/input[1]/@value')
    pin2 = str(pin[0])
    print(pin2)

    time.sleep(1)
    params = {
        'username':'18202110215',
        'password':'2443253gcl',
        'lt':pin2,
        '_eventId':'submit'
    }
    print(login_url)
    headers = {
        'Host':'uia.whxy.edu.cn',
        'Referer':'http://59.172.226.5/eams/login.action',
        'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
    }
    login_res = s.post(login_url,params,headers=headers,allow_redirects=False)

    mid_login_url = login_res.next.url
    mid_login_res = s.get(mid_login_url,allow_redirects=False)

    mid_login_cookies = requests.utils.dict_from_cookiejar(mid_login_res.cookies)
    home_url = 'http://59.172.226.5/eams/home.action'
    home_res = s.get(home_url,headers=headers,cookies=mid_login_cookies)


    print(pin2)
    print(type(pin))
    print(type(ping_res_res))
    print(type(ping_res))
    #login_res = s.get(ping_url)
    #print(login_res.text)

get_login()