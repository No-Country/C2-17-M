import { Request, Response} from 'express';
import pool from '../database';

class IngresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call  ingresosTodos()');
        return res.json(todos[0]);
    } 
}

export const ingresosController = new IngresosController();