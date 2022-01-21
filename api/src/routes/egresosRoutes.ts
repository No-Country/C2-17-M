import { Router } from "express";
import { egresosController} from '../controllers/egresosController';
class EgresosRoutes{
    public router : Router = Router();

    constructor (){
        this.config();
    }

    config():void{
        this.router.get('/',egresosController.todos);
        this.router.post('/fecha', egresosController.egresosxFecha);
        this.router.post('/concepto', egresosController.egresosxConcepto);
    }
}

const egresosRoutes = new EgresosRoutes();
export default egresosRoutes.router;