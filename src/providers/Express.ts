import express from 'express';
import Routes from '@providers/Routes';
import Bootstrap from '@middleware/Kernal';
import * as Locals from '@providers/Locals';
import Logger from '@providers/Logger';

class Express {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountRoutes();
    }

    private mountMiddlewares(): void {
        Bootstrap.init(this.express)
    }

    private mountRoutes(): void {
        Routes.mountApiRoutes(this.express);
    }

    public init(): any {
        this.express.listen(Locals.port, () => {
            Logger.info(`Server running. port: ${Locals.port}, env: ${Locals.env}`);
        });
    }
}

export default new Express();