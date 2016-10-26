/**
 * Created by zhanghao on 2016/10/26.
 */
import Realm from 'realm';

const JdPriceCollect = {
    name: 'JdPriceCollect',
    properties: {
        username:  'string',
        goodname: 'string',
        goodkuid:'string',
        goodpic:"string",
        items:{type:'list',objectType:'JdPriceItem'}
    }
};
const JdPriceItem = {
    name: 'JdPriceItem',
    properties: {
        date:     'string',
        price: 'string',
    }
};

// Initialize a Realm with Car and Person models
const realm = new Realm({schema: [JdPriceCollect, JdPriceItem]});


export default realm;