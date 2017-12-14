import * as decorator from "nodedata/core/decorators/repository";
import { TeacherModel } from '../models/teacherModel';
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@decorator.repository({ path: 'teacher', model: TeacherModel })
//@decorator.repository('/user', UserModel)
export default class TeacherRepository extends DynamicRepository {

}
