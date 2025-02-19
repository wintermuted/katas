
// Vote tally application
// return name of the winning candidate
// votes
// 1 vote per person
// no change in initial vote
// candidates
// individual 

type VoterRole = Record<string, number> 

let currentWinner = '';
let currentWinnerVoteCount = 0;

export function createVotingRoll(candidates: string[]): VoterRole {
  let roll: VoterRole = {}
  candidates.forEach((id: string) => {
    roll[id] = 0
  });

  return roll;
}

export function vote(voterRole: VoterRole, candidateId: string) {
  // 1 candidate vote per person
  if (voterRole.hasOwnProperty(candidateId)) {
    voterRole[candidateId] = voterRole[candidateId] += 1;
  }

  currentWinnerVoteCount = voterRole[currentWinner]
  const candidateTotal = voterRole[candidateId]

  if (candidateTotal > currentWinnerVoteCount) {
    console.log('set candidateagain', candidateId)
    currentWinner = candidateId;
  } else {
    const currentWinnerCount = tallyVotes(voterRole)
  }

  return voterRole;
}

export function tallyVotes(voterRole: VoterRole) {
  console.log('Hello, World!')

  const result = Object.entries(voterRole)

  const sortedVotes = result.sort((a, b) => a[1] - b[1])

  // break ties?

  return sortedVotes[sortedVotes.length - 1][0];
}

export function main() {
  // @ts-ignore
  tallyVotes(null)
}


const voterRoll = createVotingRoll(['Joe', 'Bob', 'Jill'])

console.log('initialVoter Role', voterRoll)

vote(voterRoll, 'Joe');
vote(voterRoll, 'Joe');
vote(voterRoll, 'Joe');
vote(voterRoll, 'Joe');



// tally
vote(voterRoll, 'Jill');
vote(voterRoll, 'Jill');
vote(voterRoll, 'Jill');
vote(voterRoll, 'Jill');



console.log(voterRoll)

const voteTally = tallyVotes(voterRoll)

console.log('voteTally', voteTally)
