import { getConnection,sql, queries } from "../database";

export const getCIM = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllCIM);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postCAS = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,SeccionMin,PendienteMinExcavacion,
      PendienteMinInstalacion,AlimentacionElectrica,ForjadoRegistros,MedidasCanas,TapasProvisionales,ProfundidadNivel,ConcretoTirado,fcConcreto,Cilindro7dias,Cilindro14dias,Cilindro28dias,Revenimiento,Alineacion,NivelacionCimbra,Sujecion,ColocacionHule,Desmoldante,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,PruebaHidraulica,TipoMallaZapata,TipoMallaFirme,TrabeCimentacionZapata,TrabeCimentacionFirme,VarillasTrabeZapata,VarillasTrabeFirme,EstriboTrabeZapata,EstriboTrabeFirme,RefuerzoMallaZapata,RefuerzoMallaFirme,ArmexCastilloZapata,ArmexCastilloFirme,RefuerzoCastilloZapata,
      RefuerzoCastilloFirme,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillo,ContraventeoBAP,Vibrado,Espesor,NivelacionColado,Acabado,Curado } = req.body;
    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("SeccionMin", sql.Int, SeccionMin)
        .input("PendienteMinExcavacion", sql.Int, PendienteMinExcavacion)
        .input("PendienteMinInstalacion", sql.Int, PendienteMinInstalacion)
        .input("AlimentacionElectrica", sql.Int, AlimentacionElectrica)
        .input("ForjadoRegistros", sql.Int, ForjadoRegistros)
        .input("MedidasCanas", sql.Int, MedidasCanas)
        .input("TapasProvisionales", sql.Int, TapasProvisionales)
        .input("ProfundidadNivel", sql.Int, ProfundidadNivel)
        .input("ConcretoTirado", sql.Int, ConcretoTirado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Alineacion", sql.Int, Alineacion)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("Sujecion", sql.Int, Sujecion)
        .input("ColocacionHule", sql.Int, ColocacionHule)
        .input("Desmoldante", sql.Int, Desmoldante)
        .input("UbicacionSalidas", sql.Int, UbicacionSalidas)
        .input("RevisionConexiones", sql.Int, RevisionConexiones)
        .input("DiametrosTuberia", sql.Int, DiametrosTuberia)
        .input("TipoTuberia", sql.Int, TipoTuberia)
        .input("PruebaHidraulica", sql.Int, PruebaHidraulica)
        .input("TipoMallaZapata", sql.Int, TipoMallaZapata)
        .input("TipoMallaFirme", sql.Int, TipoMallaFirme)
        .input("TrabeCimentacionZapata", sql.Int, TrabeCimentacionZapata)
        .input("TrabeCimentacionFirme", sql.Int, TrabeCimentacionFirme)
        .input("VarillasTrabeZapata", sql.Int, VarillasTrabeZapata)
        .input("VarillasTrabeFirme", sql.Int, VarillasTrabeFirme)
        .input("EstriboTrabeZapata", sql.Int, EstriboTrabeZapata)
        .input("EstriboTrabeFirme", sql.Int, EstriboTrabeFirme)
        .input("RefuerzoMallaZapata", sql.Int, RefuerzoMallaZapata)
        .input("RefuerzoMallaFirme", sql.Int, RefuerzoMallaFirme)
        .input("ArmexCastilloZapata", sql.Int, ArmexCastilloZapata)
        .input("ArmexCastilloFirme", sql.Int, ArmexCastilloFirme)
        .input("RefuerzoCastilloZapata", sql.Int, RefuerzoCastilloZapata)
        .input("RefuerzoCastilloFirme", sql.Int, RefuerzoCastilloFirme)
        .input("Traslapes", sql.Int, Traslapes)
        .input("Dobleces", sql.Int, Dobleces)
        .input("Amarres", sql.Int, Amarres)
        .input("Anclajes", sql.Int, Anclajes)
        .input("Calzado", sql.Int, Calzado)
        .input("Bayoneteo", sql.Int, Bayoneteo)
        .input("UbicacionCastillo", sql.Int, UbicacionCastillo)
        .input("ContraventeoBAP", sql.Int, ContraventeoBAP)
        .input("Vibrado", sql.Int, Vibrado)
        .input("Espesor", sql.Float, Espesor)
        .input("NivelacionColado", sql.Int, NivelacionColado)
        .input("Acabado", sql.Int, Acabado)
        .input("Curado", sql.Int, Curado)
        .query(queries.postNewCIM) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,SeccionMin,PendienteMinExcavacion,
          PendienteMinInstalacion,AlimentacionElectrica,ForjadoRegistros,MedidasCanas,TapasProvisionales,ProfundidadNivel,ConcretoTirado,fcConcreto,Cilindro7dias,Cilindro14dias,Cilindro28dias,Revenimiento,Alineacion,NivelacionCimbra,Sujecion,ColocacionHule,Desmoldante,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,PruebaHidraulica,TipoMallaZapata,TipoMallaFirme,TrabeCimentacionZapata,TrabeCimentacionFirme,VarillasTrabeZapata,VarillasTrabeFirme,EstriboTrabeZapata,EstriboTrabeFirme,RefuerzoMallaZapata,RefuerzoMallaFirme,ArmexCastilloZapata,ArmexCastilloFirme,RefuerzoCastilloZapata,RefuerzoCastilloFirme,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillo,ContraventeoBAP,Vibrado,Espesor,NivelacionColado,Acabado,Curado})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getCIMById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getCIMById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteCIMById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteCIM);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateCIMById = async (req, res) => {
  const { IdFormato,IdContratista,IdSupervisor,IdResidente,SeccionMin,PendienteMinExcavacion,
    PendienteMinInstalacion,AlimentacionElectrica,ForjadoRegistros,MedidasCanas,TapasProvisionales,ProfundidadNivel,ConcretoTirado,fcConcreto,Cilindro7dias,Cilindro14dias,Cilindro28dias,Revenimiento,Alineacion,NivelacionCimbra,Sujecion,ColocacionHule,Desmoldante,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,PruebaHidraulica,TipoMallaZapata,TipoMallaFirme,TrabeCimentacionZapata,TrabeCimentacionFirme,VarillasTrabeZapata,VarillasTrabeFirme,EstriboTrabeZapata,EstriboTrabeFirme,RefuerzoMallaZapata,RefuerzoMallaFirme,ArmexCastilloZapata,ArmexCastilloFirme,RefuerzoCastilloZapata,RefuerzoCastilloFirme,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillo,ContraventeoBAP,Vibrado,Espesor,NivelacionColado,Acabado,Curado,Geolocalizacion } = req.body;

  // validating
  if (SeccionMin == null || PendienteMinExcavacion == null || PendienteMinInstalacion == null || AlimentacionElectrica == null || ForjadoRegistros == null || MedidasCanas == null || TapasProvisionales == null || ProfundidadNivel == null || ConcretoTirado == null || fcConcreto == null || Cilindro7dias == null || Cilindro14dias == null || Cilindro28dias == null || Revenimiento == null|| Alineacion == null || NivelacionCimbra == null || Sujecion == null || ColocacionHule == null || Desmoldante == null || UbicacionSalidas == null || RevisionConexiones == null || DiametrosTuberia == null || TipoTuberia == null || PruebaHidraulica == null || TipoMallaZapata == null || TipoMallaFirme  == null || TrabeCimentacionZapata  == null || TrabeCimentacionFirme  == null || VarillasTrabeZapata  == null || VarillasTrabeFirme  == null || EstriboTrabeZapata  == null || EstriboTrabeFirme  == null || RefuerzoMallaZapata  == null || RefuerzoMallaFirme  == null || ArmexCastilloZapata  == null || ArmexCastilloFirme  == null || RefuerzoCastilloZapata  == null || RefuerzoCastilloFirme  == null || Traslapes  == null || Dobleces  == null || Amarres  == null || Anclajes  == null || Calzado  == null || Bayoneteo  == null || UbicacionCastillo  == null || ContraventeoBAP  == null || Vibrado  == null || Espesor  == null || NivelacionColado  == null || Acabado  == null || Curado  == null || Geolocalizacion  == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("SeccionMin", sql.Int, SeccionMin)
        .input("PendienteMinExcavacion", sql.Int, PendienteMinExcavacion)
        .input("PendienteMinInstalacion", sql.Int, PendienteMinInstalacion)
        .input("AlimentacionElectrica", sql.Int, AlimentacionElectrica)
        .input("ForjadoRegistros", sql.Int, ForjadoRegistros)
        .input("MedidasCanas", sql.Int, MedidasCanas)
        .input("TapasProvisionales", sql.Int, TapasProvisionales)
        .input("ProfundidadNivel", sql.Int, ProfundidadNivel)
        .input("ConcretoTirado", sql.Int, ConcretoTirado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Alineacion", sql.Int, Alineacion)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("Sujecion", sql.Int, Sujecion)
        .input("ColocacionHule", sql.Int, ColocacionHule)
        .input("Desmoldante", sql.Int, Desmoldante)
        .input("UbicacionSalidas", sql.Int, UbicacionSalidas)
        .input("RevisionConexiones", sql.Int, RevisionConexiones)
        .input("DiametrosTuberia", sql.Int, DiametrosTuberia)
        .input("TipoTuberia", sql.Int, TipoTuberia)
        .input("TipoMallaZapata", sql.Int, TipoMallaZapata)
        .input("TipoMallaFirme", sql.Int, TipoMallaFirme)
        .input("TrabeCimentacionZapata", sql.Int, TrabeCimentacionZapata)
        .input("TrabeCimentacionFirme", sql.Int, TrabeCimentacionFirme)
        .input("VarillasTrabeZapata", sql.Int, VarillasTrabeZapata)
        .input("VarillasTrabeFirme", sql.Int, VarillasTrabeFirme)
        .input("EstriboTrabeZapata", sql.Int, EstriboTrabeZapata)
        .input("EstriboTrabeFirme", sql.Int, EstriboTrabeFirme)
        .input("RefuerzoMallaZapata", sql.Int, RefuerzoMallaZapata)
        .input("RefuerzoMallaFirme", sql.Int, RefuerzoMallaFirme)
        .input("ArmexCastilloZapata", sql.Int, ArmexCastilloZapata)
        .input("ArmexCastilloFirme", sql.Int, ArmexCastilloFirme)
        .input("RefuerzoCastilloZapata", sql.Int, RefuerzoCastilloZapata)
        .input("RefuerzoCastilloFirme", sql.Int, RefuerzoCastilloFirme)
        .input("Traslapes", sql.Int, Traslapes)
        .input("Dobleces", sql.Int, Dobleces)
        .input("Amarres", sql.Int, Amarres)
        .input("Anclajes", sql.Int, Anclajes)
        .input("Calzado", sql.Int, Calzado)
        .input("Bayoneteo", sql.Int, Bayoneteo)
        .input("UbicacionCastillo", sql.Int, UbicacionCastillo)
        .input("ContraventeoBAP", sql.Int, ContraventeoBAP)
        .input("Vibrado", sql.Int, Vibrado)
        .input("Espesor", sql.Float, Espesor)
        .input("NivelacionColado", sql.Int, NivelacionColado)
        .input("Acabado", sql.Int, Acabado)
        .input("Curado", sql.Int, Curado)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateCIM);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,SeccionMin,PendienteMinExcavacion,
      PendienteMinInstalacion,AlimentacionElectrica,ForjadoRegistros,MedidasCanas,TapasProvisionales,ProfundidadNivel,ConcretoTirado,fcConcreto,Cilindro7dias,Cilindro14dias,Cilindro28dias,Revenimiento,Alineacion,NivelacionCimbra,Sujecion,ColocacionHule,Desmoldante,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,PruebaHidraulica,TipoMallaZapata,TipoMallaFirme,TrabeCimentacionZapata,TrabeCimentacionFirme,VarillasTrabeZapata,VarillasTrabeFirme,EstriboTrabeZapata,EstriboTrabeFirme,RefuerzoMallaZapata,RefuerzoMallaFirme,ArmexCastilloZapata,ArmexCastilloFirme,RefuerzoCastilloZapata,RefuerzoCastilloFirme,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillo,ContraventeoBAP,Vibrado,Espesor,NivelacionColado,Acabado,Curado,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};