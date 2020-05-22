import parser from 'ua-parser-js';
import {
    CustomerActivitiesModel
} from '../model/index';

//- tracking activities
let trackingActivities = async (req) => {
    //- should bring to background queue
    let ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;

    var userAgent = parser(req.headers['user-agent']);

    //- insert to table CustomerActivities
    await CustomerActivitiesModel.create({
        caUserAgent: userAgent.ua,
        caBrowser: userAgent.browser,
        caOS: userAgent.os,
        caRemoteAddress: ip,
        caMethod: req.method,
        caOriginalUrl: req.originalUrl,
        caParams: req.params,
        caQuery: req.query
    });
}

export {
    trackingActivities
}
