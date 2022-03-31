import { getConnection, sql, queries } from "../database";

export const getRevisiones_ENLA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllRevisiones_ENLA);
        res.json(result.recordset);   
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postRevisiones_ENLA = async (req, res) => {
    let { Revision } = req.body;
    if(Revision == null) Revision = 0;
    try {
        const pool = await getConnection();
        await pool.request()
        .input("Revision", sql.VarChar, Revision)
        .query(queries.postNewRevisiones_ENLA) 
        res.json({Revision})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getRevisiones_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getRevisiones_ENLAById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteRevisiones_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteRevisiones_ENLA);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateRevisiones_ENLAById = async (req, res) => {
  const { Revision } = req.body;

  // validating
  if (Revision == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Revision", sql.VarChar, Revision)
      .input("Id", req.params.Id)
      .query(queries.updateRevisiones_ENLA);
    res.json({ Revision });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};