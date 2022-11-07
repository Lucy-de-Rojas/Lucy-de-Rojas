


import mysql from 'serverless-mysql';



const db = mysql({
    host: 'localhost',
    port: 3306,
    database: 'lucy2',
    user: 'root',
    password: ''

});



export default async function executeQuery({query, values}) {

    try {

        const result = await db.query(query, values);
        await db.end();
        return result;

    }
    catch (error) {
        return {error};
    }




}

