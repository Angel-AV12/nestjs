import { Injectable,Get } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users =[
        {
        id:1,
        name:"Angel",
        phone:"123456789"
        },

        {
            id:1,
            name:"Angel",
            phone:"123456789"
            },
    

    ];

    @Get("")
    getUser(){
        return this.users;
    }
}
