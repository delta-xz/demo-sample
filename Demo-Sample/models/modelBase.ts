import {RoleModel} from './rolemodel';
import {onetomany, manytoone, manytomany} from 'nodedata/decorators/association';
import {document} from 'nodedata/decorators/document'; 
import {field} from 'nodedata/decorators/field'; 

export class ModelBase {
    @field()
    _id: number;
    
    @field()
    name: string;
    
    @field()
    _links :any;    
}