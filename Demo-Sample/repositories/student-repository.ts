import * as decorator from "nodedata/decorators/repository";
import {StudentModel} from '../models/studentmodel';

@decorator.repository({ path: 'students', model: StudentModel })
export default class StudentRepository {
     constructor() {}
}
