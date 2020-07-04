const express = require("express");
const grapqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const object = [
    {name:"juliano",last_name:"Santos"},
    {name:"andre",last_name:"sant'anna"},
    {name:"murilo",last_name:"Santos"},
    {name:"larissa",last_name:"Silveira"},
];

const schema = buildSchema(`
    type Query {hello : String}
`);
const root = {hello : ()=>'Hello World!'};


app.use("/",grapqlHTTP({
    schema: schema,
    rootValue: root, 
    graphiql: true
}));

app.listen(3331);


/*
USANDO O GRAPHQL SEM O EXPRESS
const { graphql, buildSchema } = require("graphql"); 
const schema = buildSchema('type Query {hello : String}');

const root = {hello : ()=>'Hello World!'};

graphql(schema, '{hello}',root).then((response)=>{
    console.log(response)
});
 */