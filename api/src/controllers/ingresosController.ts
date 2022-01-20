import { Request, Response} from 'express';
import pool from '../database';

class IngresosController{
    public async todos  (req: Request,res: Response):Promise<any>{
        const todos = await pool.query('call  ingresosTodos()');
        return res.json(todos[0]);
    } 

    public async ingresosxFecha  (req: Request,res: Response):Promise<any>{
        const {id,fechaInicio,fechaFin}=req.body;
        console.log(id+' '+fechaInicio + ' '+ fechaFin);
        const ingresos = await pool.query('call  ingresosxFecha(?,?,?)',[id,fechaInicio,fechaFin]);
        return res.json(ingresos[0]);
    } 

    public async ingresosxConcepto  (req: Request,res: Response):Promise<any>{
        const {id,fechaInicio,fechaFin}=req.body;    
        const ingresos = await pool.query('call  ingresosxConcepto(?)',[id]);
        return res.json(ingresos[0]);
    } 

}

export const ingresosController = new IngresosController();