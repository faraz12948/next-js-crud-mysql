import nc from "next-connect";
import { removeEmployeeById } from '../../controller/employee'
const handler = nc();
handler.delete(removeEmployeeById);
export default handler;