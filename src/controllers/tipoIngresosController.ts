import { Request, Response} from 'express';
import pool from '../database';

class TipoIngresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call  tipoIngreso()');
        return res.json(todos[0]);
    }    

}

export const tipoIngresosController = new TipoIngresosController();