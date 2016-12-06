import { environment } from './../../environments/environment';
import { LoggerDevService } from './logger-dev.service';
import { LoggerService } from './logger.service';

let loggerServiceFactory = () => {
    return environment.production ? new LoggerService() : new LoggerDevService();
};

export let LoggerServiceProvider =
    {
        provide: 'ILogger',
        useFactory: loggerServiceFactory,
        deps: []
    };

