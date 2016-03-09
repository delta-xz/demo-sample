import * as decorator from "nodedata/decorators/repository";
import {TeacherModel} from '../models/Teachermodel';

@decorator.repository({ path: 'teachers', model: TeacherModel })
//@decorator.repository('/teacher', TeacherModel)
//@decorator.repository('/teacher', TeacherModel)
export default class TeacherRepository {
     constructor() {}
}
