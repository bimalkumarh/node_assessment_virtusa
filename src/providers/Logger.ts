import winston from 'winston';
import 'winston-daily-rotate-file';

const { Console } = winston.transports;

const logger = winston.createLogger({
    level: 'info'
});

if (process.env.NODE_ENV === 'production') {

    const fileFormat = winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    );
    const errTransport = new winston.transports.DailyRotateFile({
        filename: 'error_%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxSize: '20m',
        maxFiles: '14d',
        dirname: './logs',
        level: 'error'
    });

    const infoTransport = new winston.transports.DailyRotateFile({
        format: fileFormat,
        filename: 'combined_%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxSize: '20m',
        maxFiles: '14d',
        dirname: './logs'
    });
    logger.add(errTransport);
    logger.add(infoTransport);

} else {

    const errorStackFormat = winston.format((info) => {
        if (info.stack) {
            // tslint:disable-next-line:no-console
            console.log(info.stack);
            return false;
        }
        return info;
    });
    const consoleTransport = new Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            errorStackFormat()
        )
    });
    logger.add(consoleTransport);
}

export default logger;
