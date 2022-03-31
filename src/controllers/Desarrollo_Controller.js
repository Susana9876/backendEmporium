import { getConnection, queries } from "../database";

export const getDesarrollo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllDesarrollo);
        res.json(result.recordset);  
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};