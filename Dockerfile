# Copyright 2016, EMC, Inc.

FROM rackhd/on-core

RUN mkdir -p /RackHD/on-statsd
WORKDIR /RackHD/on-statsd

COPY ./package.json /tmp/
RUN cd /tmp \
  && ln -s /RackHD/on-core /tmp/node_modules/on-core \
  && ln -s /RackHD/on-core/node_modules/di /tmp/node_modules/di \
  && npm install --ignore-scripts --production

COPY . /RackHD/on-statsd/
RUN cp -a /tmp/node_modules /RackHD/on-statsd/

EXPOSE 8125
EXPOSE 8125/udp

ENTRYPOINT [ "node" ]
CMD [ "/RackHD/on-statsd/index.js" ]
