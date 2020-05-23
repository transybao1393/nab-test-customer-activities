import {chain} from 'lodash';
import Chance from 'chance';

//- example
const groupBy = async (collection, t) => {
    return chain(collection).groupBy(t);
};

const randomPass = async () => {
    let chance = new Chance();
    return chance.string({
        length: 13
    });
};

export {
    groupBy,
    randomPass
};