/**
 * Created by Rabbit on 2017/4/21.
 */
'use strict';

const base = {
    baseURL : __DEV__ ? iOS?'http://172.16.17.61:1234/api':'http://172.16.17.61:1234/api'
        : iOS?'http://localhost:1234/api':'http://10.0.2.2:1234/api'
    // baseURL:iOS?'http://localhost:1234/api':'http://10.0.2.2:1234/api',

    // baseURL:!iOS?'http://localhost:1234/api':'http://172.16.17.61:1234/api',
};

const Config = {

    api:{
        getUserToken: base.baseURL + '/ShiTu/getUserToken',
        getUpLoadToken: base.baseURL + '/ShiTu/getUpLoadToken',
        postWebUrl : base.baseURL + '/ShiTu/postWebUrl',
        getGankData : base.baseURL + '/ShiTu/getGankData',
    },
    qiniu:{
        upload:'http://upload-z2.qiniu.com',
    },
};

module.exports = Config;
