import {CONSTANTS} from '../actions'

let candidateID = 3


const initialState = [
  {
    title: "Applied",
    id: 0,
    cards: [
      {
        id: 0,
        name: "Jimmy",
      },
      {
        id: 1,
        name: "Sally",
      },
    ],
  },
  {
    title: "Phone Screen",
    id: 1,
    cards: [
      {
        id: 0,
        name: "Jimmy1",
      },
      {
        id: 1,
        name: "Sally1",
      },
    ],
  },
  {
    title: "On site",
    id: 2,
    cards: [
      {
        id: 0,
        name: "Jimmy2",
      },
      {
        id: 1,
        name: "Sally2",
      },
    ],
  },
  {
    title: "Offer",
    id: 3,
    cards: [
      {
        id: 0,
        name: "Jimmy3",
      },
      {
        id: 1,
        name: "Sally3",
      },
    ],
  },
  {
    title: "Rejected",
    id: 4,
    cards: [
      {
        id: 0,
        name: "Jimmy4",
      },
      {
        id: 1,
        name: "Sally4",
      },
      {
        id: 2,
        name: "Danny",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD:
      const newCandidate = {
        name: action.payload.name,
        id: candidateID
      }
      candidateID += 1;

      return  {
        cards: [...state[0].cards, newCandidate]
      }

    default:
      return state;
  }
};

export default listReducer;
