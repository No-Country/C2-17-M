import { Request, Response} from 'express';
import pool from '../database';

class UserController {
    public async list  (req: Request,res: Response):Promise<any>{
        const list = await pool.query('call  getAllUsers()');
        return res.json(list[0]);
    } 

    public async getOne(req: Request,res: Response):Promise<any>{
        const {id} = req.params;
        const user = await pool.query('CALL getUser(?)',[id]); 
        if (user.length > 1){
            return res.json(user[0]);
        }                    
        res.status(400).json({text: 'Usuario inexistente'});
    }

    public create(req: Request,res: Response){
        console.log(req.body);
        res.json({text: 'Creando Usuarios'});
    }

    public delete(req: Request,res: Response){
        res.json({text: 'Eliminando Usuario '+req.params.id});
    }

    public update(req: Request,res: Response){
        res.json({text: 'Actualizando Usuarios'});
    }

}

export const userController = new UserController();