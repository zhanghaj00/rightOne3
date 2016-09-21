/**
 * Created by zhanghao on 2016/9/20.
 */
import * as TYPES from './types';

const NEWS_APP_KEY="8f08bac949890d31179e20c8dc969f90";
const PAGESIZE=10;

export function fetchNewsData(pageNo){
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
}

export function fetchJuheData(tagname,tag){
    return getNewsData(tagname,tag,1);
}

function getNewsData(tagname,tag,pageNo){
    return (dispatch) => {
            let reqUrl = `http://v.juhe.cn/toutiao/index?type=${tag}&key=${NEWS_APP_KEY}&page=${pageNo}&limit=${PAGESIZE}`;
            console.log(reqUrl);
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
