import * as decorator from "nodedata/core/decorators/repository";
import {StudentModel} from '../models/studentmodel';

@decorator.repository({ path: 'students', model: StudentModel })
export default class StudentRepository {
     constructor() {}
}
