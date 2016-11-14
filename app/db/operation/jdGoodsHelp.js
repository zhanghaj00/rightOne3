/**
 * Created by zhanghao on 2016/11/8.
 */


import realm from '../domain/userJdGoodsCollect';
const JD_PRICE_TABLE = 'JdPriceCollect';
const JD_PRICE_ITEM_TABLE = 'JdPriceItem';
/**
 * 通过URL 返回商品的基本信息
 * @param urlText
 * @param callback
 */


export function saveJdGoodInfo(obj){
    let good = {username: 'Honda',goodname:obj.title,skuId: obj.skuId, goodpic: obj.img}
    realm.write(() => {
        realm.create(JD_PRICE_TABLE,good );
    });
    saveJdGoodInfoItem(obj);
    return good;
}

export function saveJdGoodInfoItem(obj){
    let good = {skuId: obj.skuId, price: obj.price, date: obj.createTime}
    realm.write(() => {
        realm.create(JD_PRICE_ITEM_TABLE,good );
    });
    return good;
}

export function fetchUserJdGoodInfo(userId){
    let obj = realm.objects(JD_PRICE_TABLE).filtered(`username = "Honda"`);
    return [...obj];
}


export function fetchJdGoodItemInfo(skuId){
    let obj = realm.objects(JD_PRICE_ITEM_TABLE).filtered(`skuId = `+skuId);
    return [...obj];
}
