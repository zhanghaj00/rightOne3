/**
 * Created by zhanghao on 2016/10/26.
 */
import realm from '../domain/userJdGoodsCollect';


export function saveJdGood(){
    realm.write(() => {
        realm.create('JdPriceCollect', {username: 'Honda', goodskuid: 'Accord', goodpic: 'awd',
                            item:{date:"2016-10-20",price:"19.29"}});
    });
}


export function queryJdGood(){
    let obj = realm.objects('JdPriceCollect').filtered('username = "Honda"');
}