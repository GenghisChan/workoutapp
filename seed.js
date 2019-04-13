const faker = require("faker");
const request = require("request");

const postRequest = (name, email) => {
  request.post(
    "http://localhost:3000/users",
    {
      json: { name: name, email: email, password: "realperson" }
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
  );
};

const seed = () => {
  let i = 0;

  while (i < 21) {
    let name = faker.fake("{{name.firstName}} {{name.lastName}}");
    postRequest(name, name.split(" ")[0]);
  }
  i += 1;
};

seed();
