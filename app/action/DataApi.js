/**
 * Created by zhanghao on 2016/9/20.
 */
import * as TYPES from './types';
import cheerio from 'cheerio';
const NEWS_APP_KEY="8f08bac949890d31179e20c8dc969f90";
const PAGESIZE=10;
import {saveJdGoodInfo,fetchUserJdGoodInfo,fetchJdGoodItemInfo} from '../db/operation/jdGoodsHelp';


/*export function fetchNewsData(pageNo){
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let url = `http://v.juhe.cn/toutiao/index?type=top&key=&page=1&limit=10`;
    fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            this.setState({
                dataSource:ds.cloneWithRows(responseData.result.data),
            })
        },(error) => {
            this.setState({
                dataSource: ds.cloneWithRows([{title:"hello"}, {title:"hello1"},{title:"hello2"},{title:"hello3"},{title:"hello4"}]),
            })
        }).done();
}*/

export function fetchJuheData(tagname,tag){
    return getNewsData(tagname,tag,1);
}

function getNewsData(tagname,tag,pageNo){

    return (dispatch) => {
            let reqUrl = `http://v.juhe.cn/toutiao/index?type=${tag}&key=${NEWS_APP_KEY}&page=${pageNo}&limit=${PAGESIZE}`;
            console.log(reqUrl);
            dispatch({type: TYPES.NEWS_PAGE_STATUS.START, ext: -1,tagFlag:tagname});
             fetch(reqUrl)
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);
                    dispatch({type:TYPES.NEWS_PAGE_STATUS.SUCCESS,dataSource:responseData,ext:0,tagFlag:tagname})
                },(error) => {
                    console.log("error");
                });
    }
}

export function fetchBlogData(tagname,tag){
    return getBlogData(tagname,tag,1);
}

export function publishBlogData(tagname,tag){
    return getBlogData(tagname,tag,1);
}

function getBlogData(tagname,tag,pageNo){
    return (dispatch) => {
        let reqUrl = `http://strayman.leanapp.cn/bbs/pageBbs?type=${tag}&page=${pageNo}&rows=${PAGESIZE}`;
        console.log(reqUrl);
        dispatch({type: TYPES.NEWS_PAGE_STATUS.START, ext: -1,tagFlag:tagname});
        fetch(reqUrl)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                dispatch({type:TYPES.NEWS_PAGE_STATUS.SUCCESS,dataSource:responseData,ext:0,tagFlag:tagname})
            },(error) => {
                console.log("error");
            });
    }
}
function pushBlogData(obj){
    return () => {
        let reqUrl = `http://v.juhe.cn/toutiao/index?type=${tag}&key=${NEWS_APP_KEY}&page=${pageNo}&limit=${PAGESIZE}`;
        fetch(reqUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
    }
}

export function LoginIn(obj){
    return (dispatch)=>{
        //let reqUrl = `http://strayman.leanapp.cn/users/Login`;
        let reqUrl = `http://192.168.10.182:3000/users/Login`;
        dispatch({type: TYPES.LOGIN_STATUS.PADDING});
        fetch(reqUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            //body: "username="+obj.username+"&password="+obj.password
            body: JSON.stringify({
                username: obj.username,
                password: obj.password,
            })
        }).then((response) => response.json())
            .then((responseData) => {

                console.log(responseData);
                if(responseData.code === 0){
                    dispatch({type: TYPES.LOGIN_STATUS.SUCCESS});
                }else{
                    dispatch({type: TYPES.LOGIN_STATUS.FAIL});
                }

            },(error) => {
                dispatch({type: TYPES.LOGIN_STATUS.FAIL});
            });
    }
}

export function loadInputJdUrl(urlText){

    let url = `http://m.jd.com/product/1744651.html?resourceType=jdapp_share&resourceValue=CopyURL&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL`;
    fetch(url).then((res)=>res.text()).then((html)=>{
        loadUrl(html);
    },(error) => {
        console.log(error.toString());
    }).done();
}

/**
 * 第一次 获得商品信息的分析方法
 * @param htmlText
 * @returns {{userid: string, title: string, skuId: string, img: string, price: string, createTime: string}}
 */
function loadUrl(htmlText){
    var jdGoodInfo ={
        userid:'',//影片名称
        title:'',//标题
        skuId:'',//JD唯一内码
        img:'',//物品图片
        price:'',//物品价格
        createTime:'',//创建时间
    };

    var $ = cheerio.load(htmlText);
    let imgBody = $('#slide').find('img');

    imgBody.each((i,a)=>{
        let aTag = $(a);
        if(i === 0){
            jdGoodInfo.title = aTag.attr('alt');
            jdGoodInfo.img = 'http:'+aTag.attr('src');
            jdGoodInfo.createTime = Date();
        }
    })

    let skuId = $('#detailInfo').attr('report-pageparam');
    jdGoodInfo.skuId = skuId;
    //alert(skuId);
    fetchJdPrice(skuId,(price1)=>{jdGoodInfo.price=price1;saveJdGoodInfo(jdGoodInfo)});
    /*promis.then((price1)=>{
        jdGoodInfo.price = price1;
        alert(price1);
        saveJdGoodInfo(jdGoodInfo);
    });*/
    // promis.then((price)=>{jdGoodInfo.price =price});
    // alert(jdGoodInfo.price);
    return jdGoodInfo;
}

/**
 * 通过ID 查询价格的方法
 * @param skuId
 * @returns {number}
 */
function fetchJdPrice(skuId,callback){
    let url = `https://pm.3.cn/prices/mgets?origin=2&skuIds=` + skuId;
    //[{"id":"1744651","p":"49.00","m":"52.00","op":"49.00"}]
      fetch(url).then((res)=>res.json()).then((http)=>{
        let price =  http[0].p;
          callback(price);
    },(error)=>{
        console.log(error);
    }).done();
}

export function fetchJdPriceData(){
    loadInputJdUrl("1")
    return (dispatch)=>{

        dispatch({type: TYPES.JD_PRICE_STATUS.START,ext:-1,});

        let data = fetchUserJdGoodInfo("Honda");

        //alert(data[4].goodpic);
        dispatch({type:TYPES.JD_PRICE_STATUS.SUCCESS,dataSource:data,ext:0})
    }
}