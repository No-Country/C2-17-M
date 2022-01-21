import { Router } from "express";
import { tipoEgresosController} from '../controllers/tipoEgresosController';
class TipoEgresosRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',tipoEgresosController.todos);        
    }
}

const tipoEgresosRoutes = new TipoEgresosRoutes();
export default tipoEgresosRoutes.router;