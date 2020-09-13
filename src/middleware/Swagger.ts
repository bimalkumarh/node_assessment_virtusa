import Logger from '@providers/Logger';
import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../../swagger.json';

class Http {
    public static mount(express: Application) {
        Logger.info('Loading Swagger middlewares.');        
        express = express.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

        return express;
    }
}

export default Http;
