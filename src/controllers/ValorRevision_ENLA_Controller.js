import { getConnection, sql, queries } from "../database";

export const getValorRevision_ENLA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllValorRevision_ENLA);
        res.json(result.recordset);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postValorRevision_ENLA = async (req, res) => {
    let { Valor } = req.body;

    if(Valor == null) Valor = " ";

    try {
        const pool = await getConnection();
        await pool.request()
        .input("Valor", sql.VarChar, Valor)
        .query(queries.postNewValorRevision_ENLA) 
        res.json({Valor})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getValorRevision_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getValorRevision_ENLAById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteValorRevision_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteValorRevision_ENLA);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateValorRevision_ENLAById = async (req, res) => {
  const { Valor } = req.body;

  // validating
  if (Valor == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Valor", sql.VarChar, Valor)
      .input("Id", req.params.Id)
      .query(queries.updateValorRevision_ENLA);
    res.json({ Valor });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};