/**
 * Created by zhanghao on 2016/11/8.
 */

import cheerio from 'cheerio';

export function jdGoodsHelp(urlText,callback){

    let url = `http://m.jd.com/product/1744651.html?resourceType=jdapp_share&resourceValue=CopyURL&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL`;

    fetch(url).then((res)=>res.text()).then((html)=>{
        console.log(html);
        callback(loadUrl(html));
    },(error) => {
        callback(error);
    }).done();
}

function loadUrl(htmlText){
    var jdGoodInfo ={
        userid:'',//影片名称
        title:'',//标题
        img:'',//物品图片
        price:'',//物品价格
        createTime:'',//创建时间
    };

    var $ = cheerio.load(htmlText);
    let imgBody = $('#slide').find('.J_ping');

    imgBody.each((i,a)=>{
        let aTag = $(a);
        if(i === 0){
            jdGoodInfo.title = aTag.attr('alt');
            jdGoodInfo.img = aTag.attr('src');
            jdGoodInfo.createTime = Date();
        }
    })


    return jdGoodInfo;
}