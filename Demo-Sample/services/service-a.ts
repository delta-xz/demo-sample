import {service, inject} from 'nodedata/di/decorators';

@service()
export class ServiceA {
    constructor() {
        console.log('ServiceA constructed');
    }

    sayHello() {
        console.log('A - hello');
    }
}