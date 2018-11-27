import _ from 'lodash';

//- example
const groupBy = async (collection, t) => {
    return _.chain(collection).groupBy(t); 
}


export {
    groupBy
}