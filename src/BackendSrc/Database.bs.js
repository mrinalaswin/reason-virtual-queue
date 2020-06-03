'use strict';

var Mongodb = require("mongodb");

var client = new Mongodb.MongoClient("mongodb+srv://root:root123%21%21%21@cluster0-eke7l.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

client.connect((function (error) {
        if (error == null) {
          var doc = client.db("sample_training").collection("companies").find({ });
          console.log("documents: " + (String(doc) + ""));
          client.close();
          return ;
        }
        console.log("Mongo connection Error: " + (String(error) + ""));
        
      }));

exports.client = client;
/* client Not a pure module */
