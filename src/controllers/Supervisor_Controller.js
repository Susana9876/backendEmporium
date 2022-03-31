import { getConnection, queries } from "../database";

export const getSupervisor = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllSupervisor);
        res.json(result.recordset);  
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};