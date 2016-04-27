import {onetomany, manytoone, manytomany} from 'nodedata/core/decorators';
import {field, document} from 'nodedata/mongoose/decorators';
import {IUser} from './user';
import {Types} from 'mongoose';
import {Strict} from 'nodedata/mongoose/enums';

@document({ name: 'persons', strict: Strict.true })
export class PersonModel {
}

export default PersonModel;