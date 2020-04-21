import mongoose from 'mongoose';
import {getContacts}  from ('./control');
const { create, jsonMiddleware } = require('slspress');


mongoose.Promise=global.Promise;
  mongoose.connect('mongodb://localhost:27017/CRMdb',{
      useMongoClient: true
});


const handler = create();



handler.on('handle')
    .middleware(jsonMiddleware)
    .get('/contact', (req, res) => {

        return res.json(getContacts);
    });

module.exports = handler.export();
