import { Controller,Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    userService:UsersService;
    constructor(_userService:UsersService ){
        this.userService = _userService;
    }

    @Get("/Users")
    Users(){
     return this.userService.getUser();
    }

}
