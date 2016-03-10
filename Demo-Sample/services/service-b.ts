import {service, inject} from 'nodedata/decorators';
import {ServiceA} from './service-a';

@service()
export class ServiceB {
    constructor( @inject() a: ServiceA) {
        console.log('ServiceB constructed');
        console.log(a.sayHello());
    }

    sayHello() {
        console.log('B - hello');
    }
}