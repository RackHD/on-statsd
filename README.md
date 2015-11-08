# on-statsd [![Build Status](https://travis-ci.org/RackHD/on-statsd.svg?branch=master)](https://travis-ci.org/RackHD/on-statsd) [![Code Climate](https://codeclimate.com/github/RackHD/on-statsd/badges/gpa.svg)](https://codeclimate.com/github/RackHD/on-statsd) [![Coverage Status](https://coveralls.io/repos/RackHD/on-statsd/badge.svg?branch=master&service=github)](https://coveralls.io/github/RackHD/on-statsd?branch=master)


`on-statsd` wraps [etsy's statsD](https://github.com/etsy/statsd) and
furnishes it with a [config](./lib/config) file pointed where we expect
there to be a graphite (or equiv time-series data collector) backend
server.


to see your stats
-----------------
Clone into [ansible-graphite](https://github.com/dmichel1/ansible-graphite) and in
ansible-graphite/roles/graphite/templates/opt/graphite/webapp/graphite/local_settings.py.j2
set the TIME_ZONE variable to your local time. Then vagrant up in the ansible-graphite
directory. Now if you run node on-statsd/index.js (make sure you run it on the same
host as the clients you want it to hear from or configure the clients accordingly) it will
aggregate any stats it receives and periodically flush them to the graphite backend.
Configuration options, e.g. graphite host ip and flush interval
are set in [the lib config file](./lib/config.js)

