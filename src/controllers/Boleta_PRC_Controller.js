import { getConnection, sql, queries } from "../database";

export const getBoleta_PRC = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllBoleta_PRC);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postBoleta_PRC = async (req, res) => {
    let { IdFormato,Id_Contratista,Id_RepresentanteProduccion,Id_RepresentantePostVenta } = req.body;

    if(IdFormato == null) IdFormato = 0;
    if(Id_Contratista == null) Id_Contratista = 0;
    if(Id_RepresentanteProduccion == null) Id_RepresentanteProduccion = 0;
    if(Id_RepresentantePostVenta == null) Id_RepresentantePostVenta = 0;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("Id_Contratista", sql.Int, Id_Contratista)
        .input("Id_RepresentanteProduccion", sql.Int, Id_RepresentanteProduccion)
        .input("Id_RepresentantePostVenta", sql.Int, Id_RepresentantePostVenta)
        .query(queries.postNewBoleta_PRC) 
        res.json({IdFormato,Id_Contratista,Id_RepresentanteProduccion,Id_RepresentantePostVenta})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getBoleta_PRCById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getBoleta_PRCById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteBoleta_PRCById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteBoleta_PRC);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateBoleta_PRCById = async (req, res) => {
  const { IdFormato,Id_Contratista,Id_RepresentanteProduccion,Id_RepresentantePostVenta } = req.body;

  // validating
  if (IdFormato == null || Id_Contratista == null || Id_RepresentanteProduccion == null || Id_RepresentantePostVenta == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFormato", sql.Int, IdFormato)
      .input("Id_Contratista", sql.Int, Id_Contratista)
      .input("Id_RepresentanteProduccion", sql.Int, Id_RepresentanteProduccion)
      .input("Id_RepresentantePostVenta", sql.Int, Id_RepresentantePostVenta)
      .input("Id", req.params.Id)
      .query(queries.updateBoleta_PRC);
    res.json({ IdFormato,Id_Contratista,Id_RepresentanteProduccion,Id_RepresentantePostVenta });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};