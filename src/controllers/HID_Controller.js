import { getConnection, sql, queries } from "../database";

export const getHID = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllHID);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postHID = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,PresionInicialPlantaBaja,HoraInicialPlantaBaja,PresionFinalPlantaBaja,HoraFinalPlantaBaja,FechaPlantaBaja,ObservacionesPlantaBaja,FechaRevisionPlantaBaja,DescripcionAcuerdoPlantaBaja,FechaCumplimientoPlantaBaja,PresionInicialPlantaAlta,HoraInicialPlantaAlta,PresionFinalPlantaAlta,HoraFinalPlantaAlta,FechaPlantaAlta,ObservacionesPlantaAlta,FechaRevisionPlantaAlta,DescripcionAcuerdoPlantaAlta,FechaCumplimientoPlantaAlta,Geolocalizacion } = req.body;

    if(PresionInicialPlantaBaja == null) PresionInicialPlantaBaja = "";
    if(HoraInicialPlantaBaja == null) HoraInicialPlantaBaja = "";
    if(PresionFinalPlantaBaja == null) PresionFinalPlantaBaja = "";
    if(HoraFinalPlantaBaja == null) HoraFinalPlantaBaja = "";
    if(FechaPlantaBaja== null) FechaPlantaBaja = "";
    if(ObservacionesPlantaBaja == null) ObservacionesPlantaBaja = "";
    if(FechaRevisionPlantaBaja == null) FechaRevisionPlantaBaja = "";
    if(DescripcionAcuerdoPlantaBaja == null) DescripcionAcuerdoPlantaBaja = "";
    if(FechaCumplimientoPlantaBaja == null) FechaCumplimientoPlantaBaja = "";
    if(PresionInicialPlantaAlta == null) PresionInicialPlantaAlta = "";
    if(HoraInicialPlantaAlta == null) HoraInicialPlantaAlta = "";
    if(PresionFinalPlantaAlta == null) PresionFinalPlantaAlta = "";
    if(HoraFinalPlantaAlta == null) HoraFinalPlantaAlta = "";
    if(FechaPlantaAlta == null) FechaPlantaAlta = "";
    if(ObservacionesPlantaAlta == null) ObservacionesPlantaAlta = "";
    if(FechaRevisionPlantaAlta == null) FechaRevisionPlantaAlta = "";
    if(DescripcionAcuerdoPlantaAlta == null) DescripcionAcuerdoPlantaAlta = "";
    if(FechaCumplimientoPlantaAlta == null) FechaCumplimientoPlantaAlta = "";
    if(Geolocalizacion == null) Geolocalizacion = "";

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("PresionInicialPlantaBaja", sql.VarChar, PresionInicialPlantaBaja)
        .input("HoraInicialPlantaBaja", sql.Time, HoraInicialPlantaBaja)
        .input("PresionFinalPlantaBaja", sql.VarChar, PresionFinalPlantaBaja)
        .input("HoraFinalPlantaBaja", sql.Time, HoraFinalPlantaBaja)
        .input("FechaPlantaBaja", sql.Date, FechaPlantaBaja)
        .input("ObservacionesPlantaBaja", sql.VarChar, ObservacionesPlantaBaja)
        .input("FechaRevisionPlantaBaja", sql.Date, FechaRevisionPlantaBaja)
        .input("DescripcionAcuerdoPlantaBaja", sql.VarChar, DescripcionAcuerdoPlantaBaja)
        .input("FechaCumplimientoPlantaBaja", sql.Date, FechaCumplimientoPlantaBaja)
        .input("PresionInicialPlantaAlta", sql.VarChar, PresionInicialPlantaAlta)
        .input("HoraInicialPlantaAlta", sql.Time, HoraInicialPlantaAlta)
        .input("PresionFinalPlantaAlta", sql.VarChar, PresionFinalPlantaAlta)
        .input("HoraFinalPlantaAlta", sql.Time, HoraFinalPlantaAlta)
        .input("FechaPlantaAlta", sql.Date, FechaPlantaAlta)
        .input("ObservacionesPlantaAlta", sql.VarChar, ObservacionesPlantaAlta)
        .input("FechaRevisionPlantaAlta", sql.Date, FechaRevisionPlantaAlta)
        .input("DescripcionAcuerdoPlantaAlta", sql.VarChar, DescripcionAcuerdoPlantaAlta)
        .input("FechaCumplimientoPlantaAlta", sql.Date, FechaCumplimientoPlantaAlta)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
        .query(queries.postNewHID) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,PresionInicialPlantaBaja,HoraInicialPlantaBaja,PresionFinalPlantaBaja,HoraFinalPlantaBaja,FechaPlantaBaja,ObservacionesPlantaBaja,FechaRevisionPlantaBaja,DescripcionAcuerdoPlantaBaja,FechaCumplimientoPlantaBaja,PresionInicialPlantaAlta,HoraInicialPlantaAlta,PresionFinalPlantaAlta,HoraFinalPlantaAlta,FechaPlantaAlta,ObservacionesPlantaAlta,FechaRevisionPlantaAlta,DescripcionAcuerdoPlantaAlta,FechaCumplimientoPlantaAlta,Geolocalizacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getHIDById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getHIDById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteHIDById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteHID);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateHIDById = async (req, res) => {
  let { IdFormato,IdContratista,IdSupervisor,IdResidente,PresionInicialPlantaBaja,HoraInicialPlantaBaja,PresionFinalPlantaBaja,HoraFinalPlantaBaja,FechaPlantaBaja,ObservacionesPlantaBaja,FechaRevisionPlantaBaja,DescripcionAcuerdoPlantaBaja,FechaCumplimientoPlantaBaja,PresionInicialPlantaAlta,HoraInicialPlantaAlta,PresionFinalPlantaAlta,HoraFinalPlantaAlta,FechaPlantaAlta,ObservacionesPlantaAlta,FechaRevisionPlantaAlta,DescripcionAcuerdoPlantaAlta,FechaCumplimientoPlantaAlta,Geolocalizacion } = req.body;

  // validating
  if (PresionInicialPlantaBaja == null || HoraInicialPlantaBaja == null || PresionFinalPlantaBaja == null || HoraFinalPlantaBaja == null || FechaPlantaBaja == null || ObservacionesPlantaBaja == null || FechaRevisionPlantaBaja == null || DescripcionAcuerdoPlantaBaja == null || FechaCumplimientoPlantaBaja == null || PresionInicialPlantaAlta == null || HoraInicialPlantaAlta == null || PresionFinalPlantaAlta == null || HoraFinalPlantaAlta == null || FechaPlantaAlta == null || ObservacionesPlantaAlta == null || FechaRevisionPlantaAlta == null || DescripcionAcuerdoPlantaAlta == null || FechaCumplimientoPlantaAlta == null || Geolocalizacion == null) {
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
        .input("PresionInicialPlantaBaja", sql.VarChar, PresionInicialPlantaBaja)
        .input("HoraInicialPlantaBaja", sql.Time, HoraInicialPlantaBaja)
        .input("PresionFinalPlantaBaja", sql.VarChar, PresionFinalPlantaBaja)
        .input("HoraFinalPlantaBaja", sql.Time, HoraFinalPlantaBaja)
        .input("FechaPlantaBaja", sql.Date, FechaPlantaBaja)
        .input("ObservacionesPlantaBaja", sql.VarChar, ObservacionesPlantaBaja)
        .input("FechaRevisionPlantaBaja", sql.Date, FechaRevisionPlantaBaja)
        .input("DescripcionAcuerdoPlantaBaja", sql.VarChar, DescripcionAcuerdoPlantaBaja)
        .input("FechaCumplimientoPlantaBaja", sql.Date, FechaCumplimientoPlantaBaja)
        .input("PresionInicialPlantaAlta", sql.VarChar, PresionInicialPlantaAlta)
        .input("HoraInicialPlantaAlta", sql.Time, HoraInicialPlantaAlta)
        .input("PresionFinalPlantaAlta", sql.VarChar, PresionFinalPlantaAlta)
        .input("HoraFinalPlantaAlta", sql.Time, HoraFinalPlantaAlta)
        .input("FechaPlantaAlta", sql.Date, FechaPlantaAlta)
        .input("ObservacionesPlantaAlta", sql.VarChar, ObservacionesPlantaAlta)
        .input("FechaRevisionPlantaAlta", sql.Date, FechaRevisionPlantaAlta)
        .input("DescripcionAcuerdoPlantaAlta", sql.VarChar, DescripcionAcuerdoPlantaAlta)
        .input("FechaCumplimientoPlantaAlta", sql.Date, FechaCumplimientoPlantaAlta)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateHID);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,PresionInicialPlantaBaja,HoraInicialPlantaBaja,PresionFinalPlantaBaja,HoraFinalPlantaBaja,FechaPlantaBaja,ObservacionesPlantaBaja,FechaRevisionPlantaBaja,DescripcionAcuerdoPlantaBaja,FechaCumplimientoPlantaBaja,PresionInicialPlantaAlta,HoraInicialPlantaAlta,PresionFinalPlantaAlta,HoraFinalPlantaAlta,FechaPlantaAlta,ObservacionesPlantaAlta,FechaRevisionPlantaAlta,DescripcionAcuerdoPlantaAlta,FechaCumplimientoPlantaAlta,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};