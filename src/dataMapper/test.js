const dataMapper = require("./dataMapper.js");


async function test() {
  const tags = await dataMapper.getAllTags();
  console.log(tags);

  const user = await dataMapper.getUserById(1);
  console.log(user);

  console.log(user.getFullName());
}

test();
