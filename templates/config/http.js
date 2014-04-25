/**
 * Configuration for HTTP request handling in Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */
 
module.exports.http = {
  
  middleware: {
    
    // The order in which middleware should be run for HTTP request.
    // (the Sails router is invoked by the "router" middleware below.)
    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ]

  },

  // The number of seconds to cache flat files on disk being served by
  // Express static middleware (by default, these files are in `.tmp/public`)
  // 
  // The HTTP static cache is only active in a 'production' environment, 
  // since that's the only time Express will cache flat-files.
  cache: 31557600000
};
