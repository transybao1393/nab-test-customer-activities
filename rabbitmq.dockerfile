FROM rabbitmq:3.8.3-management
MAINTAINER TRAN SY BAO
#USER root

# RUN chown -R rabbitmq:rabbitmq /var/lib/rabbitmq/
RUN ls -l /var/lib/rabbitmq/
# RUN rm /var/lib/rabbitmq/.erlang.cookie
# RUN chmod 700 /var/lib/rabbitmq/.erlang.cookie
