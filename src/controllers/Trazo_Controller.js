import { getConnection, sql, queries } from "../database";

export const getTrazo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllTrazo);
        res.json(result.recordset);  
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postTrazo = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,
      PuntosManzaneros,Lotificacion,PuntosRadio,Escuadras,PuntosControl,NivelesPlataforma,NivelGuarnicion,
      TomasDomicilarias,DescargasSanitarias,AcometidasElectricas,GasNatural } = req.body;

    /*if(PuntosManzaneros == null) PuntosManzaneros = "";
    if(Lotificacion == null) Lotificacion = "";
    if(PuntosRadio == null) PuntosRadio = "";
    if(Escuadras == null) Escuadras = "";
    if(PuntosControl == null) PuntosControl = "";
    if(NivelesPlataforma == null) NivelesPlataforma = "";
    if(NivelGuarnicion == null) NivelGuarnicion = "";
    if(TomasDomicilarias == null) TomasDomicilarias = "";
    if(DescargasSanitarias == null) DescargasSanitarias = "";
    if(AcometidasElectricas == null) AcometidasElectricas = "";
    if(GasNatural == null) GasNatural = "";
    if(Evidencia == null) Evidencia = "";
    if(Geolocalizacion == null) Geolocalizacion = "";*/

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("PuntosManzaneros", sql.Int, PuntosManzaneros)
        .input("Lotificacion", sql.Int, Lotificacion)
        .input("PuntosRadio", sql.Int, PuntosRadio)
        .input("Escuadras", sql.Int, Escuadras)
        .input("PuntosControl", sql.Float, PuntosControl)
        .input("NivelesPlataforma", sql.Float, NivelesPlataforma)
        .input("NivelGuarnicion", sql.Int, NivelGuarnicion)
        .input("TomasDomicilarias", sql.VarChar, TomasDomicilarias)
        .input("DescargasSanitarias", sql.VarChar, DescargasSanitarias)
        .input("AcometidasElectricas", sql.VarChar, AcometidasElectricas)
        .input("GasNatural", sql.VarChar, GasNatural)
        .query(queries.postNewTrazo) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,PuntosManzaneros,Lotificacion,PuntosRadio,Escuadras,PuntosControl,NivelesPlataforma,NivelGuarnicion,TomasDomicilarias,DescargasSanitarias,AcometidasElectricas,GasNatural})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getTrazoById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getTrazoById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteTrazoById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteTrazo);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateTrazoById = async (req, res) => {
  const { IdFormato,IdContratista,IdSupervisor,IdResidente,PuntosManzaneros,Lotificacion,PuntosRadio,Escuadras,PuntosControl,NivelesPlataforma,NivelGuarnicion,TomasDomicilarias,DescargasSanitarias,AcometidasElectricas,GasNatural } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFormato", sql.Int, IdFormato)
      .input("IdContratista", sql.Int, IdContratista)
      .input("IdSupervisor", sql.Int, IdSupervisor)
      .input("IdResidente", sql.Int, IdResidente)
      .input("PuntosManzaneros", sql.Int, PuntosManzaneros)
      .input("Lotificacion", sql.Int, Lotificacion)
      .input("PuntosRadio", sql.Int, PuntosRadio)
      .input("Escuadras", sql.Int, Escuadras)
      .input("PuntosControl", sql.Float, PuntosControl)
      .input("NivelesPlataforma", sql.Float, NivelesPlataforma)
      .input("NivelGuarnicion", sql.Int, NivelGuarnicion)
      .input("TomasDomicilarias", sql.VarChar, TomasDomicilarias)
      .input("DescargasSanitarias", sql.VarChar, DescargasSanitarias)
      .input("AcometidasElectricas", sql.VarChar, AcometidasElectricas)
      .input("GasNatural", sql.VarChar, GasNatural)
      .input("Id", req.params.Id)
      .query(queries.updateTrazo);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,PuntosManzaneros,Lotificacion,PuntosRadio,Escuadras,PuntosControl,NivelesPlataforma,NivelGuarnicion,TomasDomicilarias,DescargasSanitarias,AcometidasElectricas,GasNatural });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};