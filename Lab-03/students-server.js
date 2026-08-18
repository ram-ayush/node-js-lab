const http = require('http');

const items = [
    { id: 1, name: "Virat Kohli", team: "India" },
    { id: 2, name: "Rohit Sharma", team: "India" },
    { id: 3, name: "Jasprit Bumrah", team: "India" },
    { id: 4, name: "MS Dhoni", team: "India" },
    { id: 5, name: "Hardik Pandya", team: "India" }
];
const students = [
    { id: 1, name: "Aman", course: "BCA" },
    { id: 2, name: "Nandani", course: "BCA" },
    { id: 3, name: "Abhishek", course: "BIT" }
];

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    // Route 1: Get all items
    if (req.url === '/items') {

        res.end(JSON.stringify(items));

    }
    // Route 2: Get one item by ID
    else if (req.url.startsWith('/items/')) {

        const id = Number(req.url.split('/')[2]);

        const item = items.find(i => i.id === id);

        if (item) {
            res.end(JSON.stringify(item));
        }

        else {
            res.writeHead(404);

            res.end(JSON.stringify({
                error: "Item not found"
            }));
        }
    }

    // Route 3: BCA students
    else if (req.url === '/students/course/BCA') {

        const bcaStudents = students.filter(
            student => student.course === "BCA"
        );

        res.end(JSON.stringify(bcaStudents));
    }

    // Route 4: Student by ID
    else if (req.url.startsWith('/students/')) {

        const id = Number(req.url.split('/')[2]);

        if (isNaN(id)) {

            res.writeHead(400);

            res.end(JSON.stringify({
                error: "Invalid student ID"
            }));

            return;
        }

        const student = students.find(s => s.id === id);

        if (student) {
            res.end(JSON.stringify(student));
        }

        else {
            res.writeHead(404);

            res.end(JSON.stringify({
                error: "Student not found"
            }));
        }
    }

    // Route not found
    else {

        res.writeHead(404);

        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});