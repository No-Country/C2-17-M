import { Router } from "express";
import { userController} from '../controllers/userController';
class UsersRoutes {

    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',userController.list);
        this.router.get('/:id',userController.getOne);
        this.router.post('/signup', userController.create); 
        this.router.post('/login', userController.auth); 
        this.router.delete('/:id', userController.delete);
        this.router.put('/:id', userController.update);
        
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;