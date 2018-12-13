import kue from 'kue';
import config from '../config.json';
let queue = kue.createQueue({
    redis: {
    //   host: '127.0.0.1',
      host: config.REDIS_HOST,
      port: 6379
    }
});
import {
    sendEmail
} from './email';

let emailQueue = async (name, email, randomPassword) => {

    //- add jobs to queue
    const emailJob = await queue.create('sendEmail', {  // Job Type
        eName: name,                    // Job Data
        eEmail: email,
        eRandomPassword: randomPassword
    })
    .removeOnComplete(true) // REMOVE THE JOB FROM THE QUEUE ONCE IT'S COMPLETED
    .attempts(3)  // The maximum number of retries you want the job to have
    .backoff({delay: 60*1000, type: 'exponential'}) // Time between retries. Read docs.
    .save((err) => {
        if (err) throw err;
        console.log(`Job ${emailJob.id} saved to the queue.`);
    });
    
    //- on job failed
    emailJob.on('complete', function(result){
        console.log('Job completed with data ', result);
    }).on('failed attempt', function(errorMessage, doneAttempts){
        console.log('Trying to attempt executing job failed with error message', errorMessage);
    }).on('failed', function(errorMessage){
        console.log('Job failed with error', errorMessage);
    }).on('progress', function(progress, data){
        console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );
    });

    //- start job with process
    await queue.process('sendEmail', function(job, done) { 
        sendEmail(job.data, done);
    });
    
}

export {
    emailQueue
}