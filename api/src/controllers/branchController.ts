import { Request, Response} from 'express';
import pool from '../database';

class BranchController{
    public async list  (req: Request,res: Response):Promise<any>{
        const branches = await pool.query('CALL getAllBranches()'); 
        return res.json(branches[0]);        
    } 
}
export const branchController = new BranchController();

