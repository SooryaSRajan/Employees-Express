const Express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./model/EmployeeModel");
const app = Express();
const PORT = process.env.PORT || 8081;
app.use(Express.json());
app.set('views', './views');
app.set('view engine', 'ejs');
require("dotenv").config();

let connection = mongoose.connect(
    process.env.DATABASE_USER_PASSWORD
);

connection.then(() => {
    console.log("Connection to the database successfully");
});
connection.catch((error) => {
    console.log(`Connection Refused...${error}`);
});

app.use('/css', Express.static(__dirname + '/public/css'))
app.use('/js', Express.static(__dirname + '/public/js'))

app.get('/submit', (req, res) => {
    console.log(req.query)

    if (req.query.employee_id === '' || req.query.salary === '' || req.query.name === '' || req.query.qualification === '' || req.query.desg === '') {
        res.sendFile(__dirname + '/views/failure.html')
    } else {
        const employeeData = new EmployeeModel({
            EmployeeId: req.query.employee_id,
            Name: req.query.name,
            Qualification: req.query.qualification,
            Designation: req.query.desg,
            Salary: req.query.salary,
        });

        employeeData.save().then(data => {
            console.log(data)
            res.sendFile(__dirname + '/views/success.html')
        })
            .catch(err => {
                console.log("ERROR")
                res.status(400).sendFile(__dirname + '/views/failure.html')
            })
            .finally(() => {
            });


    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/data', (req, res) => {
    EmployeeModel.find({}, function (err, data) {
        const dataMap = [];

        data.forEach(function (data) {
            dataMap.push(data)
        });

        res.status(200).send(dataMap);
    });
})

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/views/registration.html')
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
});
