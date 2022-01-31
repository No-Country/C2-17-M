import { Request, Response } from 'express';
import pool from '../database';
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

class UserController {
    public async list(req: Request, res: Response): Promise<any> {
        const list = await pool.query('call  getAllUsers()');
        return res.json(list[0]);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const user = await pool.query('CALL getUser(?)', [id]);
        if (user.length > 1) {
            return res.json(user[0]);
        }
        res.status(400).json({ text: 'Usuario inexistente' });
    }

    public async create(req: Request, res: Response) {
        const { password, name, mail, status } = req.body
        const list = await pool.query('CALL  getAllUsers()');
        function finder(us: { mail: string }) { return us.mail === mail }
        let isReal = list[0].filter(finder)

        if (!isReal[0]) {
            let passwordHash = await bcryptjs.hash(password, 5);
            let id = Math.random().toString(36).slice(2)
            const query = `CALL createUser(?, ?, ?, ?, ?);`
            const created = await pool.query(query, [id, name, passwordHash, mail, status]);
            res.status(201).json(created);
        } else {
            res.status(400).json('The mail is already used')
        }


    }
    public async auth(req: Request, res: Response) {
        const { password, mail } = req.body
        const userEmail = await pool.query(`SELECT * FROM users WHERE mail= ?`, [mail],);
        if (!userEmail) {
            return res.status(401).send({ message: "The mail is not registered" });
        }
        const validate =await bcryptjs.compare(password, userEmail[0].password)
        if (!validate) {
            res.status(400).json('The password is incorrect')
        }
        const jwtToken = jwt.sign(
            {
              id: userEmail.id_user,
              email: userEmail.mail
            },
            "secret",
            { expiresIn: "1d" }
          );

          if (userEmail.status === "admin")
          return res.send({ token: jwtToken, message: "on", admin: "on" });
        return res.send({ token: jwtToken, message: "on" });
      


    }

    public delete(req: Request, res: Response) {
        res.json({ text: 'Eliminando Usuario ' + req.params.id });
    }

    public update(req: Request, res: Response) {
        res.json({ text: 'Actualizando Usuarios' });
    }

}

export const userController = new UserController();