import { Request, Response} from 'express';
import pool from '../database';

class TipoEgresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call  tipoEgreso()');
        return res.json(todos[0]);
    }    

}

export const tipoEgresosController = new TipoEgresosController();