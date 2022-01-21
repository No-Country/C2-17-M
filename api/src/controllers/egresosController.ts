import { Request, Response} from 'express';
import pool from '../database';

class EgresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call egresosTodos()');
        return res.json(todos[0]);
    } 

    public async egresosxFecha  (req: Request,res: Response):Promise<any>{
        const {id,fechaInicio,fechaFin}=req.body;
        console.log(id+' '+fechaInicio + ' '+ fechaFin);
        const egresos = await pool.query('call  egresosxFecha(?,?,?)',[id,fechaInicio,fechaFin]);
        return res.json(egresos[0]);
    } 

    public async egresosxConcepto  (req: Request,res: Response):Promise<any>{
        const {id,fechaInicio,fechaFin}=req.body;    
        const egresos = await pool.query('call  egresosxConcepto(?)',[id]);
        return res.json(egresos[0]);
    } 

}

export const egresosController = new EgresosController();