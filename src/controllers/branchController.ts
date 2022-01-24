import { Request, Response } from 'express';
import pool from '../database';

class BranchController{
    public async list  (req: Request,res: Response):Promise<any>{
        const branches = await pool.query('CALL getAllBranches()'); 
        return res.json(branches[0]);        
    } 

    public async userBranch(req: Request,res: Response):Promise<any>{
        const id=req.params.id;
        const branches = await pool.query('CALL userxbranch(?)',[id]); 
        if (branches.length > 1){
            return res.json(branches[0]);
        }                    
        res.status(400).json({text: 'Usuario sin permisos en todas las sucursales'});
        
    }

    public async ingresosTodos(req: Request,res: Response):Promise<any>{        
        const ingresos = await pool.query('CALL ingresosTodos()'); 
        alert('ahhhhhhhhhhh');
        if (ingresos.length > 1){
            return res.json(ingresos[0]);
        }                    
        res.status(400).json({text: 'Sin Ingresos'});
        
    }
}
export const branchController = new BranchController();