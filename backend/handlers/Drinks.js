const { db } = require("../util/admin");

exports.Drinks = async (req, res) => {
    const drinksRef = db.collection('menu').doc('Drinks');
    const doc = await drinksRef.get();
    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        return res.status(201).json(doc.data());
    }
};