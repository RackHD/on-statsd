// Copyright 2015, EMC, Inc.

{
    backends: [ "statsd-elasticsearch-backend" ],

    // debug: true,
    flushInterval: 1000,
    port: 8125,

    elasticsearch: {
        countType:     "counter",
        formatter:     "default_format",
        gaugeDataType: "gauge",
        // host:          "elasticsearch",
        host:          "127.0.0.1",
        indexPrefix:   "statsd",
        // indexTimestamp: "month", // for index statsd-2015.01
        // indexTimestamp: "year",  // for index statsd-2015
        indexTimestamp: "day",      // for index statsd-2015.01.01
        path:           "/",
        port:           9200,
        timerDataType:  "timer_data",
        timerType:      "timer"
    }
}
