import express, {Application} from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import usersRoutes from './routes/usersRoutes';
import branchRoutes from './routes/branchRoutes';
import ingresosRoutes from './routes/ingresosRoutes';
import egresosRoutes from './routes/egresosRoutes';
import tipoEgresosRoutes from './routes/egresosRoutes';
import tipoIngresosRoutes from './routes/egresosRoutes';

class Server {
    public app: Application;

    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT||4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/users', usersRoutes);
        this.app.use('/api/branches', branchRoutes);
        this.app.use('/api/ingresos', ingresosRoutes);
        this.app.use('/api/egresos', egresosRoutes);
        this.app.use('/api/tipoegresos', tipoEgresosRoutes);
        this.app.use('/api/tipoingresos', tipoIngresosRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port',this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();