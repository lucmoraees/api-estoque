<h1 align="center">
    Estoque
</h1>

<br>

## 🧪 Technologies
This project was developed using the following technologies:

- [Nodejs](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/)
- [Jestjs](https://jestjs.io.io/)


## 🚀 Getting started

Clone the project and access the folder.

```bash
$ git clone https://github.com/lucmoraees/api-estoque.git
$ cd api-estoque
```

Configure the database connection:
<br>
<li>OBS: Utilizar banco de dados <b>POSTGRESQL</b></li>
<li>Configure the file .env</li>
<li>Run the SQL command&nbsp;&nbsp;<b>CREATE DATABSE estoque</b></li>
<br>

Follow the steps below:
```bash
# Install the dependencies
$ yarn
# Run the migrations
$ yarn typeorm -- -d ./src/database/index.ts migration:run
# Start the project
$ yarn dev
```
The api will be available for access on your browser at http://localhost:3338

To run tests with jest:
```bash
# Run the command
$ yarn test
```

---

<p align="center">Made with 💜 by Lucas Moraes</p>
