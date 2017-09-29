# on-statsd [![Build Status](https://travis-ci.org/RackHD/on-statsd.svg?branch=master)](https://travis-ci.org/RackHD/on-statsd) [![Code Climate](https://codeclimate.com/github/RackHD/on-statsd/badges/gpa.svg)](https://codeclimate.com/github/RackHD/on-statsd) [![Coverage Status](https://coveralls.io/repos/RackHD/on-statsd/badge.svg?branch=master&service=github)](https://coveralls.io/github/RackHD/on-statsd?branch=master)


`on-statsd` wraps [etsy's statsD](https://github.com/etsy/statsd) and
furnishes it with a [config](./lib/config) file pointed where we expect
there to be a graphite (or equiv time-series data collector) backend
server.

Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved. 

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


## Licensing

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

RackHD is a Trademark of Dell EMC
