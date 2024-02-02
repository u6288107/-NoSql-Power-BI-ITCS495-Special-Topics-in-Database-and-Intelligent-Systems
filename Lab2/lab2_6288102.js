/* Practical Laboratory 2 : Krissanapong Palakham 6288102 */

// 1.	Populate the data from here into the database as JSON. 
use lab2_6288102

db.item.insertMany([
    {
        item: 'pencil',
        qty: 20,
        status: 'A',
        size: {
            h: 10,
            w: 0.5,
            uom: 'cm'
        },
        tag: ['black', 'red']
    },
    {
        item: 'ruler',
        qty: 10,
        status: 'D',
        size: {
            h: 12,
            w: 1,
            uom: 'in'
        },
        tag: ['red', 'blue', 'plain']
    },
    {
        item: 'pen',
        qty: 15,
        status: 'A',
        size: {
            h: 10,
            w: 0.5,
            uom: 'cm'
        },
        tag: ['black', 'red', 'blue']
    },
    {
        item: 'stickynote',
        qty: 23,
        status: 'D',
        size: {
            h: 5,
            w: 5,
            uom: 'cm'
        },
        tag: ['black', 'red', 'blue', 'pink']
    },
])

// 2.	Populate one item item: "postcard", qty: 30, status: "A", size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue", "red"  ]. 
db.item.insertOne({
    item: "postcard", 
    qty: 30, 
    status: "A", 
    size: { 
        h: 10, 
        w: 15.25, 
        uom: "cm" 
        
    }, 
    tags: ["blue", "red"]
})

// 3.	Search for the items that have status equals to A. 
db.item.find({status: 'A'})

// 4.	Search for the items that have h equals to 10. 
db.item.find({'size.h': {$eq: 10}})

// 5.	Search for the items that have status equals to either A or D. 
db.item.find({$or: [{status: 'A'}, {status: 'D'}]})

// 6.	Search for the items that have status equals to A and qty is less than 20. 
db.item.find({status: 'A', qty: {$lt: 20}})

// 7.	Search for the items that have status equals to either A or D and qty is less than 30. 
db.item.find({$or: [{status: 'A'}, {status: 'D'}], qty: {$lt: 30}})

// 8.	Search for the items that have name starts with the character p. 
db.item.find({item: {$regex: /^p.*/}})

// 9.	Search for the items that have tag contains red. 
db.item.find({tag: 'red'})

// 10.	Search for the name of all items. 
db.item.find({}, {item: 1})

// 11.	Search for the name and status of the items that have w greater than 10. 
db.item.find({"size.w": {$gt: 10}}, {item: 1, status: 1})

// 12.	Search for the name and size of the items that have tag contains blank.  
db.item.find({tag: null}, {item:1, size:1})

// 13.	Search for the name, status, and qty of the items that have status equals to A and qty is less than 20 or the name starts with s. 
db.item.find({status: 'A', $or: [{qty: {$lt: 20}}, {item: {$regex: /^s.*/}}]}, {item:1, status:1, qty:1})


