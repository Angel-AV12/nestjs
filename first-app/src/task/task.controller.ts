import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "./task.service";
import { createTaskDto } from "./DTO/create-task.dto";
import { updateTaskDto } from "./DTO/update-task.dto";
@Controller({})
export class TaskController{
    taskService:TaskService;
    constructor(_taskService: TaskService){
        this.taskService = _taskService;
    }

    @Get("/task")
    getAllTask(@Query() query:any){
        console.log(query);
        return this.taskService.getTaks();
    }

    @Get("task/:id")
    getTask(@Param('id') id:string){
        console.log(id)
        return this.taskService.getTak(id);
    }

    @Post("/task")
    createTask(@Body() task:createTaskDto){
        return this.taskService.createTask(task);
    }

    @Put("/task")
    updateTask(@Body() task:updateTaskDto){
        return this.taskService.updateTask(task);
    }

    @Delete("/task")
    deleteTask(){
        return this.taskService.deleteTask();
    }

    @Patch("/task")
    UpdateTaskId(){
        return this.taskService.updateTaskId();
    }
}