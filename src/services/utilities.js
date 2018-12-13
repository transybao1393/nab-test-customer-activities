import _ from 'lodash';
import Chance from 'chance';
import moment from 'moment';
//- example
const groupBy = async (collection, t) => {
    return _.chain(collection).groupBy(t); 
}

const randomPass = async () => {
    let chance = new Chance();
    return chance.string({
        length: 13
    });
}

export {
    groupBy,
    randomPass
}