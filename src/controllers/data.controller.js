import fs from "fs";
const { log } = console;
import { fileURLToPath } from "url";
import path from "path";

const __filename=fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllData = async (req, res) => {
//   log(__dirname,__filename);
  let jsonData = fs.readFileSync(path.join(__dirname,"../data/json.json"),"utf-8");
  jsonData=JSON.parse(jsonData);
  res.status(200).json({ data: jsonData });
};

// get data by id
export const getDataById=async(req,res)=>{
    const {id}=req.params;
    let jsonData = fs.readFileSync(path.join(__dirname,"../data/json.json"),"utf-8");
    jsonData=JSON.parse(jsonData);
    let data=jsonData.filter(data=>data.id===Number(id))
    res.status(200).json({ data });
}