const fs = require("fs");
const db = require("./dataBase.js");

const getAll = async () => {
  return await db.query(`SELECT * FROM public.t_parkings`);
}

const getById = async () => {

}

const remove = async () => {

}
const create = async () => {

}


module.exports = {
  create,
  getAll,
  getById,
  remove,
};