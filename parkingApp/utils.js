const fs = require("fs");
const db = require("./dataBase.js");

const getAll = async () => {
  return await db.query(`SELECT * FROM public.t_parkings`);
}

const getById = async (parkingId) => {
  return await db.query(`SELECT * FROM public.t_parkings WHERE id=${parkingId}`);
}

const remove = async (parkingId) => {
  await db.query(`DELETE FROM public.t_parkings WHERE id=${parkingId}`);
}
const create = async (newParking) => {
  //console.log(`INSERT INTO public.t_parkings (id,x_coord,y_coord,address,time) VALUES (${newParking.id},${newParking.x_coord},${newParking.y_coord},${newParking.address},${newParking.time})`);
  await db.query(`INSERT INTO public.t_parkings (id,x_coord,y_coord,address,time)
  VALUES (${newParking.id},${newParking.x_coord},${newParking.y_coord},'${newParking.address}',${newParking.time})`);
}


module.exports = {
  create,
  getAll,
  getById,
  remove,
};