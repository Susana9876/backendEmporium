import { getConnection, sql, queries } from "../database";

export const getValores_ENLA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllValores_ENLA);
        res.json(result.recordset); 
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postValores_ENLA = async (req, res) => {
    let { IdBoleta,IdRevision,IdValorRevision,IdConcepto,Geolocalizacion } = req.body;

    if(IdBoleta == null) IdBoleta = "";
    if(IdRevision == null) IdRevision = "";
    if(IdValorRevision == null) IdValorRevision = "";
    if(IdConcepto == null) IdConcepto = "";
    if(Geolocalizacion == null) Geolocalizacion = "";

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdBoleta", sql.Int, IdBoleta)
        .input("IdRevision", sql.Int, IdRevision)
        .input("IdValorRevision", sql.Int, IdValorRevision)
        .input("IdConcepto", sql.Int, IdConcepto)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
        .query(queries.postNewValores_ENLA) 
        res.json({IdBoleta,IdRevision,IdValorRevision,IdConcepto,Geolocalizacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getValores_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getValores_ENLAById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteValores_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteValores_ENLA);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateValores_ENLAById = async (req, res) => {
  const { IdBoleta,IdRevision,IdValorRevision,IdConcepto,Geolocalizacion } = req.body;

  // validating
  if (IdBoleta == null || IdRevision == null || IdValorRevision == null || IdConcepto == null || Geolocalizacion == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdBoleta", sql.Int, IdBoleta)
      .input("IdRevision", sql.Int, IdRevision)
      .input("IdValorRevision", sql.Int, IdValorRevision)
      .input("IdConcepto", sql.Int, IdConcepto)
      .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateValores_ENLA);
    res.json({ IdBoleta,IdRevision,IdValorRevision,IdConcepto,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};