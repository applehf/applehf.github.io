var express = require('express');
var router = express.Router();
var http=require('https');
//get 请求外网
http.get('https://baike.baidu.com/',function(req,res){
    var html='';
    console.log("已经发送请求");
    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data',function(data){
        console.log("\n\n\n");
        console.log("这次返回的数据是")
        //注意，这儿返回的是buffer，具体看文档：http://nodejs.cn/api/buffer.html
        console.log(data);
        html+=data;
    });
    //end事件
    req.on('end',function(){
        console.log("\n\n\n");
        console.log("最后返回的整体数据是:");
        console.log(html);
    });
});

module.exports = router;