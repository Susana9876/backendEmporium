import { getConnection, sql, queries } from "../database";

export const getCAS = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllCAS);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postCAS = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,Madera,Desmoldante,Apoyo,NivelacionCimbra,Plomo,
      DesplantePb,JunteoBlockPb,Escalerilla3raPb,Escalerilla6taPb,Escalerilla9naPb,Escalerilla11vaPb,ConcretoPremezclado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,BajadasPluviales,RamaleosHidraulicos,RamaleosElectricos,PreparacionAireAcondicionado,Trazo,NivelacionEscalera,Cimbra,Armado,Concreto,Colado,TipoCastillo,TipoCerramiento,Varillas,Estribos,Refuerzos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,Vibrado,Recubrimiento,Curado,DesplantePa,JunteoBlockPa,Escalerilla3raPa,Escalerilla6taPa,Escalerilla9naPa,Escalerilla11vaPa,DesplantePre,JunteoBlockPre,Escalerilla3raPre,Escalerilla6taPre,Escalerilla9naPre,Escalerilla11vaPre } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("Madera", sql.Int, Madera)
        .input("Desmoldante", sql.Int, Desmoldante)
        .input("Apoyo", sql.Int, Apoyo)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("Plomo", sql.Int, Plomo)
        .input("DesplantePb", sql.Int, DesplantePb)
        .input("JunteoBlockPb", sql.Int, JunteoBlockPb)
        .input("Escalerilla3raPb", sql.Int, Escalerilla3raPb)
        .input("Escalerilla6taPb", sql.Int, Escalerilla6taPb)
        .input("Escalerilla9naPb", sql.Int, Escalerilla9naPb)
        .input("Escalerilla11vaPb", sql.Int, Escalerilla11vaPb)
        .input("ConcretoPremezclado", sql.Int, ConcretoPremezclado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("BajadasPluviales", sql.Int, BajadasPluviales)
        .input("RamaleosHidraulicos", sql.Int, RamaleosHidraulicos)
        .input("RamaleosElectricos", sql.Int, RamaleosElectricos)
        .input("PreparacionAireAcondicionado", sql.Int, PreparacionAireAcondicionado)
        .input("Trazo", sql.Int, Trazo)
        .input("NivelacionEscalera", sql.Int, NivelacionEscalera)
        .input("Cimbra", sql.Int, Cimbra)
        .input("Armado", sql.Int, Armado)
        .input("Concreto", sql.Int, Concreto)
        .input("Colado", sql.Int, Colado)
        .input("TipoCastillo", sql.Int, TipoCastillo)
        .input("TipoCerramiento", sql.Int, TipoCerramiento)
        .input("Varillas", sql.Int, Varillas)
        .input("Estribos", sql.Int, Estribos)
        .input("Refuerzos", sql.Int, Refuerzos)
        .input("Traslapes", sql.Int, Traslapes)
        .input("Dobleces", sql.Int, Dobleces)
        .input("Amarres", sql.Int, Amarres)
        .input("Anclajes", sql.Int, Anclajes)
        .input("Calzado", sql.Int, Calzado)
        .input("Bayoneteo", sql.Int, Bayoneteo)
        .input("Vibrado", sql.Int, Vibrado)
        .input("Recubrimiento", sql.Int, Recubrimiento)
        .input("Curado", sql.Int, Curado)
        .input("DesplantePa", sql.Int, DesplantePa)
        .input("JunteoBlockPa", sql.Int, JunteoBlockPa)
        .input("Escalerilla3raPa", sql.Int, Escalerilla3raPa)
        .input("Escalerilla6taPa", sql.Int, Escalerilla6taPa)
        .input("Escalerilla9naPa", sql.Int, Escalerilla9naPa)
        .input("Escalerilla11vaPa", sql.Int, Escalerilla11vaPa)
        .input("DesplantePre", sql.Int, DesplantePre)
        .input("JunteoBlockPre", sql.Int, JunteoBlockPre)
        .input("Escalerilla3raPre", sql.Int, Escalerilla3raPre)
        .input("Escalerilla6taPre", sql.Int, Escalerilla6taPre)
        .input("Escalerilla9naPre", sql.Int, Escalerilla9naPre)
        .input("Escalerilla11vaPre", sql.Int, Escalerilla11vaPre)
        .query(queries.postNewCAS) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,Madera,Desmoldante,Apoyo,NivelacionCimbra,Plomo,DesplantePb,JunteoBlockPb,Escalerilla3raPb,Escalerilla6taPb,Escalerilla9naPb,Escalerilla11vaPb,ConcretoPremezclado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,BajadasPluviales,RamaleosHidraulicos,RamaleosElectricos,PreparacionAireAcondicionado,Trazo,NivelacionEscalera,Cimbra,Armado,Concreto,Colado,TipoCastillo,TipoCerramiento,Varillas,Estribos,Refuerzos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,Vibrado,Recubrimiento,Curado,DesplantePa,JunteoBlockPa,Escalerilla3raPa,Escalerilla6taPa,Escalerilla9naPa,Escalerilla11vaPa,DesplantePre,JunteoBlockPre,Escalerilla3raPre,Escalerilla6taPre,Escalerilla9naPre,Escalerilla11vaPre})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getCASById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getCASById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteCASById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteCAS);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateCASById = async (req, res) => {
  const { IdFormato,IdContratista,IdSupervisor,IdResidente,Madera,Desmoldante,Apoyo,NivelacionCimbra,Plomo,DesplantePb,JunteoBlockPb,Escalerilla3raPb,Escalerilla6taPb,Escalerilla9naPb,Escalerilla11vaPb,ConcretoPremezclado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,BajadasPluviales,RamaleosHidraulicos,RamaleosElectricos,PreparacionAireAcondicionado,Trazo,NivelacionEscalera,Cimbra,Armado,Concreto,Colado,TipoCastillo,TipoCerramiento,Varillas,Estribos,Refuerzos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,Vibrado,Recubrimiento,Curado,DesplantePa,JunteoBlockPa,Escalerilla3raPa,Escalerilla6taPa,Escalerilla9naPa,Escalerilla11vaPa,DesplantePre,JunteoBlockPre,Escalerilla3raPre,Escalerilla6taPre,Escalerilla9naPre,Escalerilla11vaPre,Geolocalizacion } = req.body;

  // validating
  if (Madera == null || Desmoldante == null || Apoyo == null || NivelacionCimbra == null || Plomo == null || DesplantePb == null || JunteoBlockPb == null || Escalerilla3raPb == null || Escalerilla6taPb == null || Escalerilla9naPb == null || Escalerilla11vaPb == null || ConcretoPremezclado == null || fcConcreto == null || Revenimiento == null || Cilindro7dias == null || Cilindro14dias == null || Cilindro28dias == null || BajadasPluviales == null ||  RamaleosHidraulicos == null || RamaleosElectricos == null || PreparacionAireAcondicionado == null || Trazo == null || NivelacionEscalera == null || Cimbra == null || Armado == null || Concreto == null || Colado == null || TipoCastillo == null || TipoCerramiento  == null || Varillas  == null || Estribos  == null || Refuerzos  == null || Traslapes  == null || Dobleces  == null || Amarres  == null || Anclajes  == null || Calzado  == null || Bayoneteo  == null || Vibrado  == null || Recubrimiento  == null || Curado  == null || DesplantePa  == null || JunteoBlockPa  == null || Escalerilla3raPa  == null || Escalerilla6taPa  == null || Escalerilla9naPa  == null || Escalerilla11vaPa  == null || DesplantePre  == null || JunteoBlockPre  == null || Escalerilla3raPre  == null || Escalerilla6taPre  == null || Escalerilla9naPre  == null || Escalerilla11vaPre  == null || Geolocalizacion  == null) {
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
      .input("Madera", sql.Int, Madera)
      .input("Desmoldante", sql.Int, Desmoldante)
      .input("Apoyo", sql.Int, Apoyo)
      .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
      .input("Plomo", sql.Int, Plomo)
      .input("DesplantePb", sql.Int, DesplantePb)
      .input("JunteoBlockPb", sql.Int, JunteoBlockPb)
      .input("Escalerilla3raPb", sql.Int, Escalerilla3raPb)
      .input("Escalerilla6taPb", sql.Int, Escalerilla6taPb)
      .input("Escalerilla9naPb", sql.Int, Escalerilla9naPb)
      .input("Escalerilla11vaPb", sql.Int, Escalerilla11vaPb)
      .input("ConcretoPremezclado", sql.Int, ConcretoPremezclado)
      .input("fcConcreto", sql.Float, fcConcreto)
      .input("Revenimiento", sql.Float, Revenimiento)
      .input("Cilindro7dias", sql.Int, Cilindro7dias)
      .input("Cilindro14dias", sql.Int, Cilindro14dias)
      .input("Cilindro28dias", sql.Int, Cilindro28dias)
      .input("BajadasPluviales", sql.Int, BajadasPluviales)
      .input("RamaleosHidraulicos", sql.Int, RamaleosHidraulicos)
      .input("RamaleosElectricos", sql.Int, RamaleosElectricos)
      .input("PreparacionAireAcondicionado", sql.Int, PreparacionAireAcondicionado)
      .input("Trazo", sql.Int, Trazo)
      .input("NivelacionEscalera", sql.Int, NivelacionEscalera)
      .input("Cimbra", sql.Int, Cimbra)
      .input("Armado", sql.Int, Armado)
      .input("Concreto", sql.Int, Concreto)
      .input("Colado", sql.Int, Colado)
      .input("TipoCastillo", sql.Int, TipoCastillo)
      .input("TipoCerramiento", sql.Int, TipoCerramiento)
      .input("Varillas", sql.Int, Varillas)
      .input("Estribos", sql.Int, Estribos)
      .input("Refuerzos", sql.Int, Refuerzos)
      .input("Traslapes", sql.Int, Traslapes)
      .input("Dobleces", sql.Int, Dobleces)
      .input("Amarres", sql.Int, Amarres)
      .input("Anclajes", sql.Int, Anclajes)
      .input("Calzado", sql.Int, Calzado)
      .input("Bayoneteo", sql.Int, Bayoneteo)
      .input("Vibrado", sql.Int, Vibrado)
      .input("Recubrimiento", sql.Int, Recubrimiento)
      .input("Curado", sql.Int, Curado)
      .input("DesplantePa", sql.Int, DesplantePa)
      .input("JunteoBlockPa", sql.Int, JunteoBlockPa)
      .input("Escalerilla3raPa", sql.Int, Escalerilla3raPa)
      .input("Escalerilla6taPa", sql.Int, Escalerilla6taPa)
      .input("Escalerilla9naPa", sql.Int, Escalerilla9naPa)
      .input("Escalerilla11vaPa", sql.Int, Escalerilla11vaPa)
      .input("DesplantePre", sql.Int, DesplantePre)
      .input("JunteoBlockPre", sql.Int, JunteoBlockPre)
      .input("Escalerilla3raPre", sql.Int, Escalerilla3raPre)
      .input("Escalerilla6taPre", sql.Int, Escalerilla6taPre)
      .input("Escalerilla9naPre", sql.Int, Escalerilla9naPre)
      .input("Escalerilla11vaPre", sql.Int, Escalerilla11vaPre)
      .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateCAS);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,Madera,Desmoldante,Apoyo,NivelacionCimbra,Plomo,DesplantePb,JunteoBlockPb,Escalerilla3raPb,Escalerilla6taPb,Escalerilla9naPb,Escalerilla11vaPb,ConcretoPremezclado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,BajadasPluviales,RamaleosHidraulicos,RamaleosElectricos,PreparacionAireAcondicionado,Trazo,NivelacionEscalera,Cimbra,Armado,Concreto,Colado,TipoCastillo,TipoCerramiento,Varillas,Estribos,Refuerzos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,Vibrado,Recubrimiento,Curado,DesplantePa,JunteoBlockPa,Escalerilla3raPa,Escalerilla6taPa,Escalerilla9naPa,Escalerilla11vaPa,DesplantePre,JunteoBlockPre,Escalerilla3raPre,Escalerilla6taPre,Escalerilla9naPre,Escalerilla11vaPre,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};