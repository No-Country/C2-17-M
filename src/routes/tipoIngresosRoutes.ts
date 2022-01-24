import { Router } from "express";
import { tipoIngresosController} from '../controllers/tipoIngresosController';
class IngresosRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',tipoIngresosController.todos);        
    }
}

const tipoIngresosRoutes = new IngresosRoutes();
export default tipoIngresosRoutes.router;