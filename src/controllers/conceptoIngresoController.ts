import { Request, Response} from 'express';
import pool from '../database';

class ConceptoIngresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call  conceptosIngreso()');
        return res.json(todos[0]);
    }    

}

export const conceptoIngresosController = new ConceptoIngresosController();