import { executeQuery } from '../config/db'
const getAllEmployee = async (req, res) => {

    let data = await executeQuery('select * from employee', []);
    res.send(data);
}
const getEmplyeeById = async (req, res) => {
    try {
        let data = await executeQuery(`select * from employee where EmpId=${req.body.id}`, []);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
const removeEmployeeById = async (req, res) => {
    try {
        let data = await executeQuery(`delete from employee where EmpId=${req.body.id}`, []);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
const postEmployee = async (req, res) => {
    try {
        let data = await executeQuery(`insert into employee(FirstName,LastName,Email,PhoneNo,Salary) values(?,?,?,?,?)`, [req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.salary]);
        // let data = await executeQuery(`insert into employee(FirstName,LastName,Email,PhoneNo,Salary) values(${req.body.firstname},${req.body.lastname},${req.body.email},${req.body.phone},${req.body.salary})`, []);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
export { getAllEmployee, getEmplyeeById, removeEmployeeById, postEmployee };