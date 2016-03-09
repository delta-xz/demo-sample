import * as decorator from "nodedata/decorators/repository";
import {UserModel} from '../models/usermodel';
import {DynamicRepository} from 'nodedata/dynamic/dynamic-repository';

@decorator.repository({ path: 'users', model: UserModel })
//@decorator.repository('/user', UserModel)
export default class UserRepository extends DynamicRepository {

    findByName() {
    }

    findByNameAndAge() {
    }

}
