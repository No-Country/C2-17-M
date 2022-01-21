"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const branchRoutes_1 = __importDefault(require("./routes/branchRoutes"));
const ingresosRoutes_1 = __importDefault(require("./routes/ingresosRoutes"));
const egresosRoutes_1 = __importDefault(require("./routes/egresosRoutes"));
const tipoEgresosRoutes_1 = __importDefault(require("./routes/tipoEgresosRoutes"));
const tipoIngresosRoutes_1 = __importDefault(require("./routes/tipoIngresosRoutes"));
const conceptoEgresosRoutes_1 = __importDefault(require("./routes/conceptoEgresosRoutes"));
const conceptoIngresosRoutes_1 = __importDefault(require("./routes/conceptoIngresosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/users', usersRoutes_1.default);
        this.app.use('/api/branches', branchRoutes_1.default);
        this.app.use('/api/ingresos', ingresosRoutes_1.default);
        this.app.use('/api/egresos', egresosRoutes_1.default);
        this.app.use('/api/tipoegresos', tipoEgresosRoutes_1.default);
        this.app.use('/api/tipoingresos', tipoIngresosRoutes_1.default);
        this.app.use('/api/conceptoegresos', conceptoEgresosRoutes_1.default);
        this.app.use('/api/conceptoingresos', conceptoIngresosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
