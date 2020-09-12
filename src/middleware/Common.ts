import express,{Request,Response, NextFunction} from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import { BAD_REQUEST } from 'http-status-codes';
import Logger from '@providers/Logger';

class Common {
    public static mount(_express: express.Application) {
        Logger.info('Mounted common middleware');

        _express.use(express.json());
        _express.use(express.urlencoded({extended: true}));
        _express.use(express.static(path.join(__dirname, 'public')));

        if (process.env.NODE_ENV === 'development') {
            _express.use(morgan('dev'));
        }

        if (process.env.NODE_ENV === 'production') {
            _express.use(helmet());
        }

        _express.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(BAD_REQUEST).json({
                error: err.message,
            });
        });

        return _express;
    }
}

export default Common;