import { Router } from 'express';
import UserController from '@controller/User';

const router = Router();

router.post('/parse', UserController.parseV1);

router.get('/test', (req,res)=>{
    res.send('v1');
});

export default router;