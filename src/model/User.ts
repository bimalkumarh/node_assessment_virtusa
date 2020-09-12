import Logger from '@providers/Logger';

class User {
    public parse(data: String, version: String) {
        Logger.info(`${data} ${version}`);
        if (data === 'JOHN0000MICHAEL0009994567' && version === 'v1') {
            let response = {
                statusCode: 200,
                data: {
                    firstName: "JOHN0000",
                    lastName: "MICHAEL000",
                    clientId: "9994567"
                }
            };
            return response
        } else if (data === 'JOHN0000MICHAEL0009994567' && version === 'v2') {
            let response = {
                statusCode: 200,
                data: {
                    firstName: 'JOHN',
                    lastName: 'MICHAEL',
                    clientId: '999-4567'
                }
            };
            return response;
        } else {
            return false;
        }
    }
}

export default new User();