import {service, inject} from 'nodedata/di/decorators';
import {ServiceC} from './services/service-c';
import UserRepository from './repositories/userRepository';

export class TestDI {
    @inject()
    private repo: UserRepository;

    @inject() c: ServiceC
    constructor() {
    }

    sayHello() {
        this.c.sayHello();
    }

    showUsers() {
        this.repo.findAll().then(result => {
            console.log('ShowUsers: Got result')
            console.log(result)
        });
        console.log('ShowUsers: Got promise');
    }
}
