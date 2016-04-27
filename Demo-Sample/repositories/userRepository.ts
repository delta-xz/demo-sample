import * as decorator from "nodedata/core/decorators/repository";
import {UserModel} from '../models/usermodel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@decorator.repository({ path: 'users', model: UserModel })
//@decorator.repository('/user', UserModel)
export default class UserRepository extends DynamicRepository {

    findByName() {
    }

    findByNameAndAge() {
    }

}
