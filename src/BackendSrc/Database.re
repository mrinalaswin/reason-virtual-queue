let client =
  Mongo.make(
    ~uri=
      "mongodb+srv://root:root123%21%21%21@cluster0-eke7l.mongodb.net/test?retryWrites=true&w=majority",
    ~options=
      Mongo.options(~useNewUrlParser=true, ~useUnifiedTopology=true, ()),
  );

client->Mongo.connect(error => {
  switch (error |> Js.Nullable.toOption) {
  | None =>
    let doc =
      client
      ->Mongo.db(~dbName="sample_training")
      ->Mongo.collection(~collectionName="companies")
      ->Mongo.find(~filter=Mongo.filter());
    Js.log({j|documents: $doc|j});
    client->Mongo.close;
  | Some(err) => Js.log({j|Mongo connection Error: $err|j})
  }
});