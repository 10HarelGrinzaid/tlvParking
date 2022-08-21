const fs = require("fs");
const db = require("dataBase.js");

// const getBySomething =async (selectBy, where, equalTo)=>{

//   try{
//   const res = JSON.parse(
//      await db.queryToDb(`SELECT ${selectBy} from public.t_parkings where ${where}$1`, [equalTo]));
//   return res;
// }
// catch (err){
//   console.log(err.stack);
//   return
// }
// }

// const delate= async (where, equalTo)=>{
  
// //   DELETE 
// // FROM   liat.sample_t_empl
// // WHERE  deptno = 'D21';

// try{
// const res = JSON.parse(
//   await db.queryToDb(`DELETE from public.t_parkings where ${where}$1`, [equalTo]));
// }
// catch (err){
//   console.log(err.stack);
//   return
// }
// }

// const getAll=async()=>{
//   console.log('here?')
//   try{
//   const res = JSON.parse(
//     await db.queryToDb(`SELECT * from public.t_parkings where ${where}$1`, [equalTo]));
//   return res;
// }
// catch (err){
//   console.log(err.stack);
//   return
// }
// }

// const createParking=async(newParking)=>{
  
//   try{
//     const res = JSON.parse(
//       await db.queryToDb(`INSERT INTO public.t_parkings (id,x_coord,y_coord,address,time) VALUES ${newParking}`));
//     return res;
//   }
//   catch (err){
//     console.log(err.stack);
//     return
//   }
// }


// module.exports = {
//   createParking,
//   getAll,
//   getBySomething,
//   delate,
// };

// // const fs = require("fs");
// // const { PARKINGS_JSON_PATH } = require("./definitions.js");
// // const db = require("dataBase.js");

// // function updateParkings(parkings) {
// //   fs.writeFileSync(PARKINGS_JSON_PATH, JSON.stringify(parkings), "utf8");

// // }

// // function getParkings() {
// //   return JSON.parse(fs.readFileSync(PARKINGS_JSON_PATH, "utf8"));
// // }

// // const pullFromDbBy = async (selectBy, where, equalTo) => {

// //   await db.connectToDb ();
// //   parkingsJson = await db.getParkings();


// //   const yahooOnly = JSON.parse(jsondata).filter(({website}) => website === 'yahoo');
// //   filteredParkings = parkingsJson.filter(({parking}) =>  === 'yahoo')

// //   return ;
  
  
// //   //const res = await client.query(`SELECT ${selectBy} from public.t_parkings where ${where}$1`, [equalTo]);
// //   //console.log(res.rows);

 
// // }

// // const insertToDb = (id, x_coord, y_coord, address, time) => {

// //   const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
// //   const values = ['brianc', 'brian.m.carlson@gmail.com'];

// //   try {
// //     const res = await client.query(text, values)
// //     console.log(res.rows[0])
// //     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
// //   } catch (err) {
// //     console.log(err.stack)
// //   }
// // }

