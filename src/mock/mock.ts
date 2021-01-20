import Mock, {Random} from 'mockjs';

Mock.mock("/toLogin", "post",(options: any) => {
    let data: any = {};
    let body = options.body.split("&");
    for (let bodyKey in body) {
        let key: string = body[bodyKey].split("=")[0];
        let value: string = body[bodyKey].split("=")[1];
        data[key] = value;
    }
    if(data.username !== "admin" || data.password !== "0000"){
        return {
            "code": 500,
            "message": "账号或密码错误!"
        };
    }else{
        return {
            "code": 200,
            "message": "登录成功!",
            "username": Random.cname()
        }
    }
});

Mock.mock("/logout", {
    "code": 200,
    "message": "退出成功!"
});

Mock.mock("/home/getMenus", {
    "code": 200,
    "message": [{
        "name": "信息概括",
        "link": "/",
        "icon": "#icon-home"
    },{
        "name": "订单管理",
        "link": "/order",
        "icon": "#icon-wuliudingdan"
    },{
        "name": "用户管理",
        "link": "/user",
        "icon": "#icon-usercenter"
    }, {
        "name": "客户管理",
        "link": "/client",
        "icon": "#icon-kehupandian"
    },{
        "name": "产品大数据",
        "link": "/product",
        "icon": "#icon-logistic-logo"
    },{
        "name": "系统管理",
        "link": "/system",
        "icon": "#icon-set"
    }]
});

Mock.mock("/home/dailySummary", {
    "code": 200,
    "message|4": [{
        "name|+1": ["访问量", "成交额", "客户量", "客户地区"],
        "data": [
            {"value": /^[1-9]?[0-9]{1}$|^100$/, "name": '网站访问'},
            {"value": /^[1-9]?[0-9]{1}$|^100$/, "name": "客服联络"},
            {"value": /^[1-9]?[0-9]{1}$|^100$/, "name": "联盟广告"},
            {"value": /^[1-9]?[0-9]{1}$|^100$/, "name": "视频广告"}
        ]
    }]
});

Mock.mock("/order/getArea", {
    code: 200,
    message: [{
        name: "西部地区",
        sign: "west"
    },{
        name: "东部地区",
        sign: "east"
    },{
        name: "华北地区",
        sign: "northChina"
    }, {
        name: "东北地区",
        sign: "northeast"
    },{
        name: "西南地区",
        sign: "southwest"
    },{
        name: "南部地区",
        sign: "south"
    }]
});