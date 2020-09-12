import Logger from '@providers/Logger';

class User {
    public parse(data: string, version: string) {
        Logger.info(`${data} ${version}`);
        let response ;
        if (data === 'JOHN0000MICHAEL0009994567' && version === 'v1') {
            Logger.info("data correct v1");
            response = {
                firstName: 'JOHN0000',
                lastName: 'MICHAEL000',
                clientId: '9994567'
            };
            return response
        } else if (data === 'JOHN0000MICHAEL0009994567' && version === 'v2') {
            Logger.info("data correct v2");
            response = {
                firstName: 'JOHN',
                lastName: 'MICHAEL',
                clientId: '999-4567'
            };
            return response;
        } else {
            Logger.info("data incorrect");
            return false;
        }
    }
}

export default new User();