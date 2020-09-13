import { Request, Response, NextFunction } from 'express';
import UserModel from '@model/User';
import Logger from '@providers/Logger';
import ResponseBuilder from '@services/ResponseBuilder';
import * as httpStatusCodes from 'http-status-codes';

class User {
    public parseV1(req: Request, res: Response, next: NextFunction) {
        Logger.info('In v1 parse function');

        const rb =  new ResponseBuilder();
        const data = req.body.data;
        if (data) {
            const user = UserModel.parse(data.trim(), 'v1');

            if (user) {
                rb.statusCode = httpStatusCodes.OK;
                rb.data = user;
                return res.status(httpStatusCodes.OK).json(rb.ok());
            } else {
                return res.status(httpStatusCodes.BAD_REQUEST).json(rb.badRequest());
            }
        } else {
            return res.status(httpStatusCodes.BAD_REQUEST).json(rb.badRequest());
        }
    }
    public parseV2(req: Request, res: Response, next: NextFunction) {
        Logger.info('In v2 parse function');

        const rb =  new ResponseBuilder();
        const data = req.body.data;
        if (data) {
            const user = UserModel.parse(data.trim(), 'v2');
            if (user) {
                rb.data = user;
                return res.status(httpStatusCodes.OK).json(rb.ok());
            } else {
                return res.status(httpStatusCodes.BAD_REQUEST).json(rb.badRequest());
            }

        } else {
            return res.status(httpStatusCodes.BAD_REQUEST).json(rb.badRequest());
        }
    }
}

export default new User();
