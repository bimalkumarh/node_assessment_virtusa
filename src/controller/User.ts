import { Request, Response, NextFunction } from 'express';
import UserModel from '@model/User';
import Logger from '@providers/Logger';

class User {
    public parseV1(req: Request, res: Response, next: NextFunction) {
        Logger.info('In v1 parse function');
        const data = req.body.data;
        if (data) {
            const user = UserModel.parse(data.trim(), 'v1');
            return res.json(user);
        }
    }
    public parseV2(req: Request, res: Response, next: NextFunction) {
        Logger.info('In v2 parse function');
        const data = req.body.data;
        if (data) {
            const user = UserModel.parse(data.trim(), 'v2');
            return res.json(user);
        }
    }
}

export default new User();


