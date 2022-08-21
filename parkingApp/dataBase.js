const { Client } = require('pg');
let client;

const connectToDb = async () => {
    client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'Aa123456',
        database: 'postgres'
    });

    await client.connect();
}

const disconnectFromDb = async () => {
    await client.end();
}

const query = async (textQuery) => {

    try {
        await connectToDb();

        const res = await client.query(textQuery);
        //console.log(await res.rows[0]);
        return res;

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        disconnectFromDb();
    }
}

module.exports = {
    query,
};



// function getParkings() {

//     const res = await client.query(`SELECT * from public.t_parkings`);
//     return JSON.parse(res);
// }

// function updateParkings(parkings) {
//     //client.writeFileSync(PARKINGS_JSON_PATH, JSON.stringify(parkings), "utf8");



// }

// const insertToDb = (id, x_coord, y_coord, address, time) => {

//     const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
//     const values = ['brianc', 'brian.m.carlson@gmail.com'];

//     try {
//         const res = await client.query(text, values)
//         console.log(res.rows[0])
//         // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//     } catch (err) {
//         console.log(err.stack)
//     }
// }