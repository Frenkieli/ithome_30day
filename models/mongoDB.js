const schemaModels = require('./schemaModels');
const mongoose = require('mongoose');

function create (collectionName, inserObject) {
  return new Promise(function (resolve, reject) {
    let data = new schemaModels[collectionName];
    for (let key in inserObject) {
      data[key] = inserObject[key];
    }
    data.save(function (err, data, count) {
      if (err) reject(err);
      resolve(data);
    });
  })
}

function read (collectionName) {
  return schemaModels[collectionName].find().sort('time'); //可以加正負號 -號是小的在前
}

function update (collectionName, id, inserObject) {
  return new Promise(function (resolve, reject) {
    inserObject.time = moment().valueOf();
    schemaModels[collectionName].findById(id, function (err, data) {
      for (let key in inserObject) {
        data[key] = inserObject[key];
      }
      data.save(function (err, todo, count) {
        if (err) reject(err);
        resolve(data);
      });
    })
  })
}

function destroy (collectionName, id) {
  return new Promise(function (resolve, reject) {
    schemaModels[collectionName].findById(id, function (err, data) {
      data.remove(function (err, data) {
        if (err) return reject(err);
        resolve(data);
      });
    });
  });
};

mongoose.connect('mongodb+srv://ItHelp_Donkey:ItHelp_Donkey@cluster0.acbw6.gcp.mongodb.net/sample_analytics?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

module.exports = {
  create,
  read,
  update,
  destroy
};