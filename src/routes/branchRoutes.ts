import { Router } from "express";
import { branchController} from '../controllers/branchController';

class BranchRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',branchController.list);
        this.router.get('/:id',branchController.userBranch);        
    }
} 

const usersRoutes = new BranchRoutes();
export default usersRoutes.router;