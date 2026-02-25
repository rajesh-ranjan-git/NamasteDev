const checkVotingEligibility = (x) => {
  if (x >= 18) {
    console.log(`Age is ${x}, so you are eligible to vote.`);
  } else if (x < 1) {
    console.log(`Age is ${x}, its invalid age, please provide a valid age.`);
  } else {
    console.log(`Age is ${x}, so you are not eligible to vote right now.`);
  }
};

checkVotingEligibility(3);
