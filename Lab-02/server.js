const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === '/') {

        res.end(`
            Welcome to my Node.js Server

            Name: Ayush Ram Tripathi
            Scholar Number: 23145004
            Course: BCA
        `);

    }

    // About Route
    else if (req.url === '/about') {

        res.end(`
            About Me

            My name is Ayush Ram Tripathi.
            I am a BCA student.
            I am learning Node.js.
        `);

    }

    // College Route
    else if (req.url === '/college') {

        res.end(`
            College Information

            College: Dev Sanskriti Vishwavidyalaya
            Semester: BCA VII
        `);

    }

    // Profile Route - JSON Response
    else if (req.url === '/profile') {

        const profile = {
            name: "Ayush Ram Tripathi",
            scholarNumber: "23145004",
            course: "BCA",
            semester: "BCA VII",
            college: "Dev Sanskriti Vishwavidyalaya"
        };

        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(profile));

    }

    // Unknown Route - 404
    else {

        res.statusCode = 404;

        res.end('Page Not Found');

    }

});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});