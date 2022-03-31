import { getConnection, sql, queries } from "../database";

export const getRevisionFinal_ENLA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllRevisionFinal_ENLA);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postRevisionFinal_ENLA = async (req, res) => {
    let { IdRevision,Fecha,Observacion } = req.body;
    if(IdRevision == null) IdRevision = 0;
    if(Fecha == null) Fecha = 0;
    if(Observacion == null) Observacion = 0;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdRevision", sql.Int, IdRevision)
        .input("Fecha", sql.Date, Fecha)
        .input("Observacion", sql.VarChar, Observacion)
        .query(queries.postNewRevisionFinal_ENLA) 
        res.json({IdRevision,Fecha,Observacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getRevisionFinal_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getRevisionFinal_ENLAById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteRevisionFinal_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteRevisionFinal_ENLA);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateRevisionFinal_ENLAById = async (req, res) => {
  const { IdRevision,Fecha,Observacion } = req.body;

  // validating
  if (IdRevision == null || Fecha == null || Observacion == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdRevision", sql.Int, IdRevision)
      .input("Fecha", sql.Date, Fecha)
      .input("Observacion", sql.VarChar, Observacion)
      .input("Id", req.params.Id)
      .query(queries.updateRevisionFinal_ENLA);
    res.json({ Descripcion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};