import Logger from '@providers/Logger';
import { Application } from 'express';
import bodyParser from 'body-parser';

class Http {
    public static mount(express: Application) {
        Logger.info('Loading HTTP middlewares.');

        express.use(bodyParser.json());
        express.use(bodyParser.urlencoded({ extended: false }));

        return express;
    }
}

export default Http;