import { Router } from "express";
import { ingresosController} from '../controllers/ingresosController';
class IngresosRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',ingresosController.todos);
    }
}

const ingresosRoutes = new IngresosRoutes();
export default ingresosRoutes.router;