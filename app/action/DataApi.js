/**
 * Created by zhanghao on 2016/9/20.
 */
import * as TYPES from './types';

const NEWS_APP_KEY="8f08bac949890d31179e20c8dc969f90";
const PAGESIZE=10;

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