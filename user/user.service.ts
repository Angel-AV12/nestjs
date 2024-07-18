import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    
    private user = [
        {
        "id":1,
        "name":"Angel",
        "phone":"04249360088"       
        },
        {
            "id":2,
            "name":"Popeye",
            "phone":"0424973738"       
            }
    ]
    getUser(){
        return this.user;
    }
}
