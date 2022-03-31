import { getConnection, sql, queries } from "../database";

export const getValores_PRC = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllValores_PRC);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postValores_ENLA = async (req, res) => {
    let { IdBoleta,IdConcepto,Cumple,Observaciones,FechaValidacion } = req.body;

    if(IdBoleta == null) IdBoleta = "";
    if(IdConcepto == null) IdConcepto = "";
    if(Cumple == null) Cumple = "";
    if(Observaciones == null) Observaciones = "";
    if(FechaValidacion == null) FechaValidacion = "";

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdBoleta", sql.Int, IdBoleta)
        .input("IdConcepto", sql.Int, IdConcepto)
        .input("Cumple", sql.Bit, Cumple)
        .input("Observaciones", sql.VarChar, Observaciones)
        .input("FechaValidacion", sql.Date, FechaValidacion)
        .query(queries.postNewValores_PRC) 
        res.json({IdBoleta,IdConcepto,Cumple,Observaciones,FechaValidacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getValores_PRCById = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getValores_PRCById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteValores_PRCById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteValores_PRC);
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateValores_PRCById = async (req, res) => {
  const { IdBoleta,IdConcepto,Cumple,Observaciones,FechaValidacion } = req.body;

  // validating
  if (IdBoleta == null || IdConcepto == null || Cumple == null || IdConcepto == null || Observaciones == null || FechaValidacion == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdBoleta", sql.Int, IdBoleta)
      .input("IdConcepto", sql.Int, IdConcepto)
      .input("Cumple", sql.Bit, Cumple)
      .input("Observaciones", sql.VarChar, Observaciones)
      .input("FechaValidacion", sql.Date, FechaValidacion)
      .input("Id", req.params.Id)
      .query(queries.updateValores_PRC);
    res.json({ IdBoleta,IdConcepto,Cumple,Observaciones,FechaValidacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};