const getOrderList = 'SELECT * FROM "orderList" ORDER BY "time" DESC ;';
const getOrderListById = 'SELECT * FROM "orderList" WHERE id = $1;';
const postOrder = 'INSERT INTO "orderList" ("id","contact","method","name","selectedRestaurant","time","total","order") VALUES ($1,$2,$3,$4,$5,$6,$7,$8);';
const deleteOrder='DELETE FROM "orderList" WHERE id = $1;';

module.exports = {
    getOrderList,
    postOrder,
    deleteOrder,
    getOrderListById
};
