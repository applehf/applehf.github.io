"use strict";
const express = require('express');
const router = express.Router();
const baike = require('baidu-baike');

router.get('/word/:baikeWord',(req,res)=>{
    console.log("搜索词语:",req.params.baikeWord);
    baike(req.params.baikeWord)
        .then(ret =>{
            //console.log(ret);
            var baikeStr = JSON.stringify(ret.item) + JSON.stringify(ret.summary);
            baikeStr += ",其他：";
            if(ret.items != undefined){
                for(var i=0;i<ret.items.length;i++)
                    baikeStr = baikeStr + parseInt(i+1) + "." + ret.items[i].name + ";";
            var checkResult = "";
            if(ret.items.length>0){
                console.log("请注意:",req.params.baikeWord,"是一个多义词,存在疑似侵权");
            }
            }
            console.log(baikeStr);
            if(baikeStr.indexOf("品牌")>0){checkResult = "侵权品牌" ;}
            else if (baikeStr.indexOf("公司")>0){checkResult = "侵权公司" ;}
            else if (baikeStr.indexOf("作品")>0){checkResult = "侵权作品" ;}
            else if (baikeStr.indexOf("影业")>0){checkResult = "侵权影业" ;}
            else if (baikeStr.indexOf("节目")>0){checkResult = "侵权节目" ;}
            else if (baikeStr.indexOf("厂商")>0){checkResult = "侵权厂商" ;}
            else if (baikeStr.indexOf("logo")>0){checkResult = "侵权logo" ;}
            else if (baikeStr.indexOf("作者")>0){checkResult = "侵权作者" ;}
            else if (baikeStr.indexOf("游戏")>0){checkResult = "侵权游戏" ;}
            else if (baikeStr.indexOf("漫画")>0){checkResult = "侵权漫画" ;}
            else if (baikeStr.indexOf("动画")>0){checkResult = "侵权动画" ;}
            else if (baikeStr.indexOf("动漫")>0){checkResult = "侵权动漫" ;}
            else if (baikeStr.indexOf("小说")>0){checkResult = "侵权小说" ;}
            else if (baikeStr.indexOf("杂志")>0){checkResult = "侵权杂志" ;}
            else if (baikeStr.indexOf("电视剧")>0){checkResult = "侵权电视剧" ;}
            else if (baikeStr.indexOf("连续剧")>0){checkResult = "侵权连续剧" ;}
            else if (baikeStr.indexOf("版权")>0){checkResult = "侵权版权" ;}
            else{checkResult = "正常" ;}

            console.log("判断结果:",checkResult);
            res.send(ret);
})
    .catch(err => res.send(err))
});
module.exports = router;

