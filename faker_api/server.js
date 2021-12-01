const { response } = require("express");
const express = require("express");

const app = express();
const port = 8000;

const faker = require("faker");
const { fake } = require("faker/locale/zh_TW");

const createUser = () => {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const createCompany = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};

app.get("/api", (req, res) => res.send("OK"));

app.get("/api/users/new", (request, response) => {
  response.json(createUser());
});

app.get("/api/companies/new", (request, response) => {
  response.json(createCompany());
});

app.get("/api/user/company", (request, response) => {
  response.json({ user: createUser(), company: createCompany() });
});

app.listen(port, () => console.log(`listening on port: ${port}`));
