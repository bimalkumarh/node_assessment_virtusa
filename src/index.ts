import './LoadEnv';
import os from 'os';
import cluster from 'cluster';
import App from '@providers/App';
import NativeEvent from '@providers/NativeEvent';

if (cluster.isMaster) {

    NativeEvent.process();

    const CPUS: any = os.cpus();
    CPUS.forEach(() => cluster.fork());

    NativeEvent.cluster(cluster);

} else {

    App.loadServer();

}