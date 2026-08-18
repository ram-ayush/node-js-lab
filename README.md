## Lab 03 - Student Directory API

### Routes

- GET /items
  Returns the complete list of cricket players.

- GET /items/:id
  Returns one cricket player based on the ID.

- GET /students/course/BCA
  Returns only students who are enrolled in BCA.

- GET /students/:id
  Returns one student based on the ID.

- GET /students/abc
  Returns an error for a non-numeric student ID.

### req.url.split()

req.url.split('/') splits the URL into parts so that the ID can be extracted from the URL.