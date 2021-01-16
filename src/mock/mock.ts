import Mock from 'mockjs';

Mock.mock("/toLogin", {
    "code": 200,
    "message": "登录成功!"
});

Mock.mock("/logout", {
    "code": 200,
    "message": "退出成功!"
});

Mock.mock("/home/getMenus", {
    "code": 200,
    "message": [{
        "name": "主页",
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
    },{
        "name": "系统管理",
        "link": "/system",
        "icon": "#icon-set"
    }]
})