import { getConnection, sql, queries } from "../database";

export const getSAN = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllSAN);
        res.json(result.recordset);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postSAN = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,Forjado,MediasCañas,TiposDiametro,PendienteTuboCimentacion,NumeroCimentacion,FechaRevisionCimentacion,FechaCumplimientoCimentacion,
    ConcentracionCimentacion,NivelSardinel,TipoDiametro,PendienteTuboEntrepiso,NumeroEntrepiso,FechaRevisionEntrepiso,FechaCumplimientoEntrepiso,ConcentracionEntrepiso,Geolocalizacion } = req.body;

    if(Forjado == null) Forjado = "";
    if(MediasCañas == null) MediasCañas = "";
    if(TiposDiametro == null) TiposDiametro = "";
    if(PendienteTuboCimentacion == null) PendienteTuboCimentacion = "";
    if(NumeroCimentacion == null) NumeroCimentacion = "";
    if(FechaRevisionCimentacion == null) FechaRevisionCimentacion = "";
    if(FechaCumplimientoCimentacion == null) FechaCumplimientoCimentacion = "";
    if(ConcentracionCimentacion == null) ConcentracionCimentacion = "";
    if(NivelSardinel == null) NivelSardinel = "";
    if(TipoDiametro == null) TipoDiametro = "";
    if(PendienteTuboEntrepiso == null) PendienteTuboEntrepiso = "";
    if(NumeroEntrepiso == null) NumeroEntrepiso = "";
    if(FechaRevisionEntrepiso == null) FechaRevisionEntrepiso = "";
    if(FechaCumplimientoEntrepiso == null) FechaCumplimientoEntrepiso = "";
    if(ConcentracionEntrepiso == null) ConcentracionEntrepiso = "";
    if(Geolocalizacion == null) Geolocalizacion = "";

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("Forjado", sql.Int, Forjado)
        .input("MediasCañas", sql.Int, MediasCañas)
        .input("TiposDiametro", sql.Float, TiposDiametro)
        .input("PendienteTuboCimentacion", sql.Int, PendienteTuboCimentacion)
        .input("NumeroCimentacion", sql.VarChar, NumeroCimentacion)
        .input("FechaRevisionCimentacion", sql.Date, FechaRevisionCimentacion)
        .input("FechaCumplimientoCimentacion", sql.Date, FechaCumplimientoCimentacion)
        .input("ConcentracionCimentacion", sql.VarChar, ConcentracionCimentacion)
        .input("NivelSardinel", sql.Int, NivelSardinel)
        .input("TipoDiametro", sql.Int, TipoDiametro)
        .input("PendienteTuboEntrepiso", sql.Int, PendienteTuboEntrepiso)
        .input("NumeroEntrepiso", sql.VarChar, NumeroEntrepiso)
        .input("FechaRevisionEntrepiso", sql.Date, FechaRevisionEntrepiso)
        .input("FechaCumplimientoEntrepiso", sql.Date, FechaCumplimientoEntrepiso)
        .input("ConcentracionEntrepiso", sql.VarChar, ConcentracionEntrepiso)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
        .query(queries.postNewSAN) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,Forjado,MediasCañas,TiposDiametro,PendienteTuboCimentacion,NumeroCimentacion,FechaRevisionCimentacion,FechaCumplimientoCimentacion,
        ConcentracionCimentacion,NivelSardinel,TipoDiametro,PendienteTuboEntrepiso,NumeroEntrepiso,FechaRevisionEntrepiso,FechaCumplimientoEntrepiso,ConcentracionEntrepiso,Geolocalizacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getSANById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getSANById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteSANById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteSAN);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateSANById = async (req, res) => {
  const { IdFormato,IdContratista,IdSupervisor,IdResidente,Forjado,MediasCañas,TiposDiametro,PendienteTuboCimentacion,NumeroCimentacion,FechaRevisionCimentacion,FechaCumplimientoCimentacion,
  ConcentracionCimentacion,NivelSardinel,TipoDiametro,PendienteTuboEntrepiso,NumeroEntrepiso,FechaRevisionEntrepiso,FechaCumplimientoEntrepiso,ConcentracionEntrepiso,Geolocalizacion } = req.body;

  // validating
  if (Forjado == null || MediasCañas == null || TiposDiametro == null || PendienteTuboCimentacion == null || NumeroCimentacion == null || FechaRevisionCimentacion == null || FechaCumplimientoCimentacion == null || ConcentracionCimentacion == null || NivelSardinel == null || TipoDiametro == null || PendienteTuboEntrepiso,NumeroEntrepiso == null || FechaRevisionEntrepiso == null || FechaCumplimientoEntrepiso == null || ConcentracionEntrepiso == null || Geolocalizacion == null) {
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
      .input("Forjado", sql.Int, Forjado)
      .input("MediasCañas", sql.Int, MediasCañas)
      .input("TiposDiametro", sql.Float, TiposDiametro)
      .input("PendienteTuboCimentacion", sql.Int, PendienteTuboCimentacion)
      .input("NumeroCimentacion", sql.VarChar, NumeroCimentacion)
      .input("FechaRevisionCimentacion", sql.Date, FechaRevisionCimentacion)
      .input("FechaCumplimientoCimentacion", sql.Date, FechaCumplimientoCimentacion)
      .input("ConcentracionCimentacion", sql.VarChar, ConcentracionCimentacion)
      .input("NivelSardinel", sql.Int, NivelSardinel)
      .input("TipoDiametro", sql.Int, TipoDiametro)
      .input("PendienteTuboEntrepiso", sql.Vit, PendienteTuboEntrepiso)
      .input("NumeroEntrepiso", sql.VarChar, NumeroEntrepiso)
      .input("FechaRevisionEntrepiso", sql.Date, FechaRevisionEntrepiso)
      .input("FechaCumplimientoEntrepiso", sql.Date, FechaCumplimientoEntrepiso)
      .input("ConcentracionEntrepiso", sql.VarChar, ConcentracionEntrepiso)
      .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateSAN);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,Forjado,MediasCañas,TiposDiametro,PendienteTuboCimentacion,NumeroCimentacion,FechaRevisionCimentacion,FechaCumplimientoCimentacion,
    ConcentracionCimentacion,NivelSardinel,TipoDiametro,PendienteTuboEntrepiso,NumeroEntrepiso,FechaRevisionEntrepiso,FechaCumplimientoEntrepiso,ConcentracionEntrepiso,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};