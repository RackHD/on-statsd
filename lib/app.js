//Copyright 2014, Renasar Technologies Inc.
/* jshint node: true */

"use strict";

var di = require('di');

module.exports = Runner;
di.annotate(Runner, new di.Provide('Statsd'));


function Runner() {
    function start(){
        process.argv[2] = './lib/config.js';
        require('../node_modules/statsd/stats');
    }

    function stop(){
       process.nextTick(process.exit(0));
    }

    return {
        start: start,
        stop: stop
    };
}
