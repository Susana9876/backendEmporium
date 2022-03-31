import { getConnection, sql, queries } from "../database";

export const getReporte_Terminado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllReporte_Terminado);
        res.json(result.recordset);   
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postReporte_Terminado = async (req, res) => {
    let { IdFormato,Observaciones } = req.body;
    if(IdFormato == null) IdFormato = 0;
    if(Observaciones == null) Observaciones = 0;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("Observaciones", sql.VarChar, Observaciones)
        .query(queries.postNewReporte_Terminado) 
        res.json({IdFormato,Observaciones})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getReporte_TerminadoById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getReporte_TerminadoById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteReporte_TerminadoById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteReporte_Terminado);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateReporte_TerminadoById = async (req, res) => {
  const { IdFormato,Observaciones } = req.body;

  // validating
  if (IdFormato == null || Observaciones == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFormato", sql.Int, IdFormato)
      .input("Observaciones", sql.VarChar, Observaciones)
      .input("Id", req.params.Id)
      .query(queries.updateReporte_Terminado);
    res.json({ IdFormato,Observaciones });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};