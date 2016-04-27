import {service, inject} from 'nodedata/decorators';
import {ServiceA} from './service-a';
import {ServiceB} from './service-b';

@service()
export class ServiceC {
    constructor( @inject() a: ServiceA, @inject() b: ServiceB) {
        console.log('ServiceC constructed');
        console.log(a.sayHello());
        console.log(b.sayHello());
    }

    sayHello() {
        console.log('C - hello');
    }
}
