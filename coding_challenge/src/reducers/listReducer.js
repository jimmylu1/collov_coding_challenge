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
        id: 2,
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
        id: 2,
        name: "Sally1",
      },
    ],
  },
];


const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
     
}

export default listReducer