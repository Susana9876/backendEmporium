import { getConnection, sql, queries } from "../database";

export const getBoleta_ENLA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllBoleta_ENLA);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postBoleta_ENLA = async (req, res) => {
    let { IdFormato,Id_Coordinador,Id_Contratista,Id_Supervisor,Id_Residente } = req.body;

    if(IdFormato == null) IdFormato = 0;
    if(Id_Coordinador == null) Id_Coordinador = 0;
    if(Id_Contratista == null) Id_Contratista = 0;
    if(Id_Supervisor == null) Id_Supervisor = 0;
    if(Id_Residente == null) Id_Residente = 0;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("Id_Coordinador", sql.Int, Id_Coordinador)
        .input("Id_Contratista", sql.Int, Id_Contratista)
        .input("Id_Supervisor", sql.Int, Id_Supervisor)
        .input("Id_Residente", sql.Int, Id_Residente)
        .query(queries.postNewBoleta_ENLA) 
        res.json({IdFormato,Id_Coordinador,Id_Contratista,Id_Supervisor,Id_Residente})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getBoleta_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getBoleta_ENLAById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteBoleta_ENLAById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteBoleta_ENLA);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateBoleta_ENLAById = async (req, res) => {
  const { IdFormato,Id_Coordinador,Id_Contratista,Id_Supervisor,Id_Residente } = req.body;

  // validating
  if (IdFormato == null || Id_Coordinador == null || Id_Contratista == null || Id_Supervisor == null || Id_Residente == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFormato", sql.Int, IdFormato)
      .input("Id_Coordinador", sql.Int, Id_Coordinador)
      .input("Id_Contratista", sql.Int, Id_Contratista)
      .input("Id_Supervisor", sql.Int, Id_Supervisor)
      .input("Id_Residente", sql.Int, Id_Residente)
      .input("Id", req.params.Id)
      .query(queries.updateBoleta_ENLA);
    res.json({ IdFormato,Id_Coordinador,Id_Contratista,Id_Supervisor,Id_Residente });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};