import express from "express";
import config from "./config";
import AZ_Route  from "./routes/AZ_Route";
import Boleta_ENLA_Route from "./routes/Boleta_ENLA_Route";
import CAS_Route from "./routes/CAS_Route";
import CIM_Route from "./routes/CIM_Route";
import Concepto_ENLA_Route from "./routes/Concepto_ENLA_Route";
import ENT_Route from "./routes/ENT_Route";
import Formato_Route from "./routes/Formato_Route";
import HID_Route from "./routes/HID_Route";
import Reporte_Terminado_Route from "./routes/Reporte_Terminado_Route";
import Revisiones_ENLA_Route from "./routes/Revisiones_ENLA_Route";
import RevisionFinal_ENLA_Route from "./routes/RevisionFinal_ENLA_Route";
import SAN_Route from "./routes/SAN_Route";
import Trazo_Route from "./routes/Trazo_Route";
import Valores_ENLA_Route from "./routes/Valores_ENLA_Route";
import ValorRevision_ENLA_Route from "./routes/ValorRevision_ENLA_Route";
import Boleta_PRC_Route from "./routes/Boleta_PRC_Route";
import Conceptos_PRC_Route from "./routes/Conceptos_PRC_Route";
import Valores_PRC_Route from "./routes/Valores_PRC_Route";
import Contratista_Route from "./routes/Contratista_Route";
import Supervisor_Route from "./routes/Supervisor_Route";
import Desarrollo_Route from "./routes/Desarrollo_Route";
import Prototipo_Route from "./routes/Prototipo_Route";
const cors = require('cors')


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({}))

//settings
app.set('port', config.port);
app.use(AZ_Route);
app.use(Boleta_ENLA_Route);
app.use(Boleta_PRC_Route);
app.use(CAS_Route);
app.use(CIM_Route);
app.use(Concepto_ENLA_Route);
app.use(Conceptos_PRC_Route);
app.use(ENT_Route);
app.use(Formato_Route);
app.use(HID_Route);
app.use(Reporte_Terminado_Route);
app.use(Revisiones_ENLA_Route);
app.use(RevisionFinal_ENLA_Route);
app.use(SAN_Route);
app.use(Trazo_Route);
app.use(Valores_ENLA_Route);
app.use(Valores_PRC_Route);
app.use(ValorRevision_ENLA_Route);
app.use(Contratista_Route);
app.use(Supervisor_Route);
app.use(Desarrollo_Route);
app.use(Prototipo_Route);



export default app;