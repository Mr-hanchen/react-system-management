import axios from "axios";
import qs from 'qs';
import "./mock";

interface UserInfo{
    username: string;
    password: string;
}

export const login = (userInfo: UserInfo) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: "/toLogin",
            data: qs.stringify({
                ...userInfo
            })
        }).then((res) => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
};

export const logout = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: "/logout"
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
};

export const getMenus = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: "/home/getMenus"
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

export const dailySummary = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: "/home/dailySummary"
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    })
};

export const getArea = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: "/order/getArea"
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};