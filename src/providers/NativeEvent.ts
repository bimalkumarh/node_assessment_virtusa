import Logger from '@providers/Logger';

class NativeEvent {
	public cluster(cluster: any): void {
		cluster.on('listening', (worker: any) =>
			Logger.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected!`)
		);

		cluster.on('online', (worker: any) =>
			Logger.info(`Server :: Cluster with ProcessID '${worker.process.pid}' has responded after it was forked!`)
		);

		cluster.on('disconnect', (worker: any) =>
			Logger.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Disconnected!`)
		);

		cluster.on('exit', (worker: any, code: any, signal: any) => {
			Logger.info(`Server :: Cluster with ProcessID '${worker.process.pid}' is Dead with Code '${code}, and signal: '${signal}'`);
			cluster.fork();
		});
	}

	public process(): void {
		process.on('uncaughtException', (exception) =>
			Logger.error(exception.stack)
		);

		process.on('warning', (warning) =>
			Logger.warn(warning.stack)
		);
	}
}

export default new NativeEvent();
