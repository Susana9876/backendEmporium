import { getConnection, sql, queries } from "../database";

export const getConceptos_PRC = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllConceptos_PRC);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postConceptos_PRC = async (req, res) => {
    const { Conceptos } = req.body;
    if(Conceptos == null){
        return res.status(400).json({msg: 'No se envió información'})
    } 

    try {
        const pool = await getConnection();
        await pool.request().input("Conceptos", sql.VarChar, Conceptos).query(queries.postNewConceptos_PRC) 
        res.json({Conceptos})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getConceptos_PRCById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getConceptos_PRCById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteConceptos_PRCById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteConceptos_PRC);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateConceptos_PRCById = async (req, res) => {
  const { Conceptos } = req.body;

  // validating
  if (Conceptos == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Conceptos", sql.VarChar, Conceptos)
      .input("Id", req.params.Id)
      .query(queries.updateConceptos_PRC);
    res.json({ Conceptos });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};