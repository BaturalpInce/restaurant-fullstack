const { db } = require("../util/admin");

exports.Desserts = async (req, res) => {
    const dessertsRef = db.collection('menu').doc('Desserts');
    const doc = await dessertsRef.get();
    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        return res.status(201).json(doc.data());
    }
};