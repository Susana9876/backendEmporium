import { getConnection, sql, queries } from "../database";

export const getFormato = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllFormato);
        res.json(result.recordset);   
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postFormato = async (req, res) => {
    let { Id_Fraccionamiento,Id_Etapa,Fecha } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("Id_Fraccionamiento", sql.NVarChar, Id_Fraccionamiento)
        .input("Id_Etapa", sql.NVarChar, Id_Etapa)
        .input("Fecha", sql.Date, Fecha)
        .query(queries.postNewFormato) 
        res.json({Id_Fraccionamiento,Id_Etapa,Fecha})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getFormatoById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getFormatoById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteFormatoById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteFormato);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateFormatoById = async (req, res) => {
  const { Fecha, Id_Etapa } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_Etapa",sql.Int,Id_Etapa)
      .input("Fecha", sql.Date, Fecha)
      .input("Id", req.params.Id)
      .query(queries.updateFormato);
    res.json({ Fecha, Id_Etapa });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};