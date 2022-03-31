import { getConnection, sql, queries } from "../database";

export const getConcepto_ENLA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllConcepto_ENLA);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postConcepto_ENLA = async (req, res) => {
    const { Concepto } = req.body;
    if(Concepto == null){
        return res.status(400).json({msg: 'No se envió información'})
    } 

    try {
        const pool = await getConnection();
        await pool.request().input("Concepto", sql.VarChar, Concepto).query(queries.postNewConcepto_ENLA) 
        res.json({Concepto})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getConcepto_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getConcepto_ENLAById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteConcepto_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteConcepto_ENLA);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateConcepto_ENLAById = async (req, res) => {
  const { Concepto } = req.body;

  // validating
  if (Concepto == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Concepto", sql.VarChar, Concepto)
      .input("Id", req.params.Id)
      .query(queries.updateConcepto_ENLA);
    res.json({ Concepto });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};