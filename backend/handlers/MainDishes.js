const { db } = require("../util/admin");

exports.MainDishes = async (req, res) => {
    const mainDishesRef = db.collection('menu').doc('Main Dishes');
    const doc = await mainDishesRef.get();
    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        return res.status(201).json(doc.data());
    }
};