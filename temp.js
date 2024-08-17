// db.createCollection("nonFiction, {
//     validator: {
//         $jsonSchema: {
//             required:["name", "price"],
//             properties:{
//                 name:{
//                     bsonType: "string"
//                     description: "must be a string and required"
//                 },

//                 price:{
//                     bsonTyoe: "number"
//                     description: "must be a number and required"
//                 }
//             }
//         }
//     },
//     validationAction: "error" 
// })

db.createCollection("nonFiction", {
    validator: {
        $jsonSchema: {
            required: ["name", "price", "author"],
                properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and required",
                },
                price: {
                    bsonType: "number",
                    description: "must be a number and required",
                },
                author: {
                    bsonType: "array",
                    description: "must be a array and required",
                },
                }
        }
    },
    validationAction: "error"
})