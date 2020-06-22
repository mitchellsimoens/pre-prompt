const prompt = (question: string): Promise<string> => {
  const { stdin, stdout } = process;

  return new Promise((resolve) => {
    stdin.resume();
    stdout.write(`${question} `);

    stdin.once('data', (data) => resolve(data.toString()));
  });
};

const choiceRe = /^\s*(y|yes|sure|yep|ok)\s*$/i;

const run = async (): Promise<void> => {
  const choice = await prompt('Are you sure you want to run that? (no)');

  if (choiceRe.exec(choice)) {
    process.exit();
  }

  console.log();
  console.log('*** did not receive yes... stopping');
  console.log();

  process.exit(1);
};

export default run;
