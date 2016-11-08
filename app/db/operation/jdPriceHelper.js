/**
 * Created by zhanghao on 2016/10/26.
 */
import realm from '../domain/userJdGoodsCollect';

const JD_TABLE = 'JdPriceCollect';

export function saveJdGood(){

    let good = {username: 'Honda', goodskuid: 'Accord', goodpic: 'awd',
        item:{date:"2016-10-20",price:"19.29"}}
    realm.write(() => {
        realm.create(JD_TABLE,good );
    });
    return good;
}


export function queryJdGood(){
    let obj = realm.objects(JD_TABLE).filtered(`username = "Honda"`);
    return [...obj];
}