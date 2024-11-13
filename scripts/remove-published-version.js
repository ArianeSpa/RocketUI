const inquirer = require("inquirer");
const { execSync } = require("child_process");

const question = [
  {
    name: "version",
    message:
      "Which version (format X.X.X) of 'roket-ui' package would you like to unpublish ?",
  },
];

inquirer.prompt(question).then((answers) => {
  const isValid = RegExp(/\d*\.\d*\.\d*/gm).exec(answers.version);
  if (!isValid) {
    return console.log(
      "Wrong format, version must be x.x.x for example 1.20.3"
    );
  }
  inquirer
    .prompt([
      {
        name: "confirm",
        message: `Do you really want to unpublish rocket-ui-dev-version@${answers.version} ? `,
        type: "confirm",
      },
    ])
    .then((confirmAnswers) => {
      if (confirmAnswers.confirm) {
        execSync(`npm unpublish rocket-ui-dev-version@${answers.version}`, {
          stdio: "inherit",
        });
      }
    });
});
