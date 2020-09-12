import { Router } from 'express';
import UserController from '@controller/User';

const router = Router();

router.post('/parse', UserController.parseV2);

/*router.get('/test', (req,res)=>{
    res.send('v2');
});*/

export default router;