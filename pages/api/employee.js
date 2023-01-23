import nc from "next-connect";
import { getEmplyeeById } from '../../controller/employee'
const handler = nc();
handler.get(getEmplyeeById);
export default handler;