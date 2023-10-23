const pool = require('../../db');
const queries = require('./queries');


const getOrderList = (req, res) => {
    pool.query(queries.getOrderList, (error, results) => {

        if (error) throw error;
        res.status(200).json(results.rows);

    })
};



const postOrder = (req, res) => {
    const { id, contact, method, name, selectedRestaurant, time, total, order } = req.body;
    console.log(req.body);
    pool.query(queries.postOrder, [id, contact, method, name, selectedRestaurant, time, total, order], (error, results) => {
        if (error) throw error;
        res.status(201).send("Order created successfully");
        console.log("Order created successfully");

    })
}

const deleteOrder = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getOrderListById, [id], (error, results) => {
        const noOrderFound = !results.rows.length;
        if (noOrderFound) {
            res.status(501)
            res.send("Order does not exist in the database,could not delete")
        } else {
            pool.query(queries.deleteOrder, [id], (error, results) => {
                if (error) throw error;
                res.status(200)
                res.send('Order deleted Successfully')
            })
        }

    })
}




module.exports = {
    getOrderList,
    postOrder,
    deleteOrder,

};