import sql from 'mssql';

const dbSettings = {
    user: 'susana',
    password: 'enkontrol2022',
    server: '187.237.144.46',
    database: 'AseguramientoCalidad',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }, 

};
/*const dbSettings = {
    user: 'sa',
    password: 'alba123',
    server: 'localhost',
    database: 'AseguramientoCalidad',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }, 

};*/

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.error(error);
    }
}

export {sql};