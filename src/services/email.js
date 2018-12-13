import _ from 'lodash';
import moment from 'moment';
import nodemailer from 'nodemailer';

const sendEmail = (data, done) => {
    //- some variables
    var transporter =  nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        service: 'gmail',
        auth: {
            user: 'bao988@gmail.com',
            pass: 'transybao'
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: data.eName,
        to: data.eEmail,
        subject: 'Bao Bao system',
        text: 'Welcome to our service!',
        html: '<p>This is your random password <br> ' + data.eRandomPassword +' </p>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            return 0;
        } else {
            console.log('Message sent: ' +  info.response);
            return 1;
        }
    });
    done();

}

export {
    sendEmail
}