const { createLogger, format, transports } = require('winston');
const {Loggly} = require('winston-loggly-bulk');

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.printf(data => `[${data.timestamp}] (${data.level}): ${data.message}`)
  ),
  defaultMeta: { service: "UNQfy Logging" },
  transports: [
    new transports.File({ filename: `${__dirname}/logs/unqfy-errors.log`, level: "error" }),
    new transports.File({ filename: `${__dirname}/logs/unqfy-combined.log`, level: "debug" }),
    new Loggly({
      token: "0528b37e-977a-44e7-99d5-2bb58d4189e7",
      subdomain: "facundo",
      tags: ["Unqfy-Winston-NodeJS"],
      json: true
    })
  ],
});

module.exports = logger;