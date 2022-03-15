const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage("jack"), err => {
  if (err) throw new Erorr(err);
  console.log('Portfolio complete! Check out index.html to see the output!');
});