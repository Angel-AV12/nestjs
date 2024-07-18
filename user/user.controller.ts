import { Controller,Get } from '@nestjs/common';
import {UserService} from "./user.service"
@Controller()
export class UserController {
    userservice:UserService;
    constructor(userservice:UserService){
        this.userservice = userservice;
    }
    @Get('/users')
    getuser(){
        return this.userservice.getUser();
    }
    
}
