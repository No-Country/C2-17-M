import { Request, Response} from 'express';
import pool from '../database';

class ConceptoEgresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call  conceptosEgreso()');
        return res.json(todos[0]);
    }    

}

export const conceptoEgresosController = new ConceptoEgresosController();