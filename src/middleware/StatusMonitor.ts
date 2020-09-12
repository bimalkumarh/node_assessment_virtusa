import { Application } from 'express';
import expressStatusMonitor from 'express-status-monitor';

class StatusMonitor {
	public mount (_express: Application): Application {
		// Define your status monitor config
		const monitorOptions: object = {
			title: 'Express Status',
			path: '/status-monitor',
			spans: [
				{
					interval: 1, 		// Every second
					retention: 60		// Keep 60 data-points in memory
				},
				{
					interval: 5,
					retention: 60
				},
				{
					interval: 15,
					retention: 60
				}
			],
			chartVisibility: {
				mem: true,
				rps: true,
				cpu: true,
				load: true,
				statusCodes: true,
				responseTime: true
			}
		};

		// Loads the express status monitor middleware
		_express.use(expressStatusMonitor(monitorOptions));

		return _express;
	}
}

export default new StatusMonitor();
