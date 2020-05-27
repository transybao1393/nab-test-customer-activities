import amqp from 'amqplib/callback_api';
import config from '../config.json';
import {
    CustomerActivitiesModel
} from '../model/index';

let publishMessage = (jsonData) => {
    amqp.connect(config.RABBITMQ_URI, function(err, connection) {
        if (err) throw err;
        connection.createChannel(function(err1, channel) {
            if (err1) throw err1;

            var queue = 'daily.customer.activities';

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(jsonData)));

            console.log("[*] Sent %s", jsonData);
        });
    });
};

let consumeMessage = () => {
    amqp.connect(config.RABBITMQ_URI, function(err, connection) {
        if (err) throw err;
        connection.createChannel(function(err1, channel) {
            if (err1) throw err1;
            var queue = 'daily.customer.activities';
            channel.assertQueue(queue, {
                durable: false
            });

            console.log("[*] Message Broker - Waiting for messages from queue %s. To exit press CTRL+C", queue);

            channel.consume(queue, async function(msg) {
                let JSONDataReceived = JSON.parse(msg.content);

                console.log("[*] Received json %s", JSONDataReceived);
                try {
                    await CustomerActivitiesModel.create(JSONDataReceived);
                    console.log("[*] Logged customer activity %s", JSONDataReceived);
                } catch(err) {
                    console.log("[*] Insert failed with errors %s", err);
                }
            }, {
                noAck: true
            });
        });
    });
};

export {
    publishMessage,
    consumeMessage
};
