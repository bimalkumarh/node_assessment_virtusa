import { Application } from 'express';
import Common from '@middleware/Common';
import Http from '@middleware/Http';
import StatusMonitor from '@middleware/StatusMonitor';

class Kernel {
    public static init (_express: Application) {
        _express = Common.mount(_express);
        _express = Http.mount(_express);
        _express  = StatusMonitor.mount(_express);
        return _express;
    }
}

export default Kernel;
