<h1 align="center">
    Estoque
</h1>

<br>

## 🧪 Technologies
This project was developed using the following technologies:

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/)


## 🚀 Getting started

Clone the project and access the folder.

```bash
$ git clone https://github.com/lucmoraees/api-estoque.git
$ cd api-estoque
```

Configure the database connection:
<br>
<li>Configure the file .env</li>
<li>Run the SQL command&nbsp;&nbsp;<b>CREATE DATABSE estoque</b></li>
<br>

Follow the steps below:
```bash
# Install the dependencies
$ npm install
# Run the migrations
$ npm run typeorm -- -d ./src/database/index.ts migration:run
# Start the project
$ npm run dev
```
The api will be available for access on your browser at http://localhost:3338

To run tests with jest:
```bash
# Run the command
$ npm test
```

---

<p align="center">Made with 💜 by Lucas Moraes</p>
