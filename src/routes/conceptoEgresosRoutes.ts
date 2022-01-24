import { Router } from "express";
import { conceptoEgresosController} from '../controllers/conceptoEgresoController';
class ConceptoEgresosRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',conceptoEgresosController.todos);
        
    }
}

const conceptoEgresosRoutes = new ConceptoEgresosRoutes();
export default conceptoEgresosRoutes.router;