import * as decorator from "nodedata/core/decorators/repository";
import {PersonModel} from '../models/personModel';

@decorator.repository({path : 'person', model : PersonModel})
export default  class PersonRepository {

    findByName() {
    }

    findByNameAndAge() {
    }
    
    findByNameAndLastname(){
    }

}
