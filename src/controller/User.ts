import { Request, Response, NextFunction } from 'express';
import UserModel from '@model/User';
import Logger from '@providers/Logger';
import ResponseBuilder from '@services/ResponseBuilder';
import * as http_status_codes from 'http-status-codes';

class User {
    public parseV1(req: Request, res: Response, next: NextFunction) {
        Logger.info('In v1 parse function');

        const rb =  new ResponseBuilder();
        const data = req.body.data;
        if (data) {
            const user = UserModel.parse(data.trim(), 'v1');

            if (user) {
                rb.statusCode = http_status_codes.OK;
                rb.data = user;
                return res.json(rb.success()).status(http_status_codes.OK);
            } else {
                return res.json(rb.bad_request()).status(http_status_codes.BAD_REQUEST);
            }
        } else {
            return res.json(rb.bad_request()).status(http_status_codes.BAD_REQUEST);
        }
    }
    public parseV2(req: Request, res: Response, next: NextFunction) {
        Logger.info('In v2 parse function');

        const rb =  new ResponseBuilder();
        const data = req.body.data;
        if (data) {
            const user = UserModel.parse(data.trim(), 'v2');
            if (user) {
                rb.statusCode = http_status_codes.OK;
                rb.data = user;
                return res.json(rb.success()).status(http_status_codes.OK);
            } else {
                return res.json(rb.bad_request()).status(http_status_codes.BAD_REQUEST);
            }

        } else {
            return res.json(rb.bad_request()).status(http_status_codes.BAD_REQUEST);
        }
    }
}

export default new User();
