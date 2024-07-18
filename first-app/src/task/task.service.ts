import {Injectable,HttpCode, NotFoundException} from "@nestjs/common";
import { error } from "console";
import { NotFoundError } from "rxjs";
import { createTaskDto } from "./DTO/create-task.dto";
import { updateTaskDto } from "./DTO/update-task.dto";

export interface user{
    name:string;
    age:number;
}
@Injectable()
export class TaskService{
 private tasks = [];

    getTaks(){
        return this.tasks;     
    
    }

    getTak(id:string){
        
        const taskfound = this.tasks.find(task=> task.id == id);
        
        if(!taskfound){
            return new NotFoundException(`La tareas con el ${id} no fue encontrada`)
        }
        return taskfound;         
    }
    
    test(){
        return "test......"
    }


    createTask(task:createTaskDto){
        this.tasks.push({...task,id:this.tasks.length + 1})
        return task;
    }
    

    updateTask(task:updateTaskDto){
        console.log(task)
        return "Actualizando tarea"
    }


    deleteTask(){
        return "Eliminar tarea"
    }


 
    updateTaskId(){
        return "Actualizando ID de la tarea"
    }
}