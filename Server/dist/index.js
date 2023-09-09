"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./src/app"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Rutas y middleware
// server.use('/match',router)
// (req: Request, res: Response) => {
//     res.send('¡Hola, mundo!');
//   });
// Iniciar el servidor
app_1.default.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
//# sourceMappingURL=index.js.map