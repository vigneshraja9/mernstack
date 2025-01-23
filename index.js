const express = require('express');
const nodemon = require('nodemon');
const app = express();
const connectDB = require('./databaseconnection');
const user = require('./model/user')
app.use(express.json());

connectDB();
const stu = [{
    "sno": 1,

    "name": "ravi ",
    "age": 70
}, {
    "sno": 2,
    "name": "sam",
    "age": 60
}];
const port = 3000
app.get('/', (req, res) => {
        res.send(stu)
    })
    // app.put('/:id', (req, res) => {
    //     const index = stu.indexOf(x => x.sno == req.params.sno);

// })

app.post('/', (req, res) => {
    let body = req.body
    if (body != null && body.sno && body.name && body.age) {
        stu.push(body)
        res.status(200).send(body)
    } else {
        res.status(400).send("invalid credentials")
    }
})
app.put('/:id', (req, res) => {
    let sno = req.params.id;
    let body1 = req.body;
    if (body1 != null && body1.sno && body1.name && body1.age) {
        let index = stu.findIndex(x => x.sno == sno);
        if (index != -1 && sno == body1.sno) {
            const stu1 = structuredClone(stu[index]);
            stu1.name = body1.name;
            stu1.age = body1.age;
            stu.splice(index, 1, stu1);
            res.status(200).send(stu1)
        } else {
            res.status(400).send("invalid crdentials tydfcfyd ")
        }
    } else {
        res.status(404).send("invalid crdentials ")
    }
})
app.delete('/:id', (req, res) => {
    let id = req.params.id;

    if (id !== null) {
        let index1 = stu.findIndex((x) => x.sno == id);
        const stu2 = structuredClone(stu[index1])
        stu.splice(index1, 1);
        res.status(200).send(`the id is deleted by ${id}`)

    } else {
        res.status(500).send("invaild")
    }
})



// app.put('/:id', (req, res) => {
//     let sno = req.params.id;
//     let item = req.body;
//     if (item != null && item.sno && item.name && item.age) {
//         let index = stu.findIndex(x => x.sno == sno);
//         const stu1 = structuredClone(stu[index]);
//         stu1.name = item.name;
//         stu1.age = item.age;
//         stu.splice(index, 1, stu1);
//         res.status(200).send(stu1)
//     } else {
//         res.status(404).send("invalid credentials")
//     }
// })



app.listen(port, () => {
    console.log(`we got server http://localhost:${port}`)
})