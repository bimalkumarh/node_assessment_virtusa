import { Application } from 'express';
import apiRoutes from '@routes/Api';

class Routes {

    public mountApiRoutes(express: Application) {
        return express.use('/api',apiRoutes);
    }
}

export default new Routes();