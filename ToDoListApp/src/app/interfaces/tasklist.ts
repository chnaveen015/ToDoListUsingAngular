import { Task } from './task';
import { TasklistService } from '../services/tasklist.service';


export interface Tasklist {
    name:string;
    tasks:Task[];
    
}
