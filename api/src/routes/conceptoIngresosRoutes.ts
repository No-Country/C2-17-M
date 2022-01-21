import { Router } from "express";
import { conceptoIngresosController} from '../controllers/conceptoIngresoController';
class ConceptoIngresosRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',conceptoIngresosController.todos);
        
    }
}

const conceptoIngresosRoutes = new ConceptoIngresosRoutes();
export default conceptoIngresosRoutes.router;