import uuid from 'uuid/v4';
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducer;

// {type: 'ADD', task: "Walk the Dog"}
// {type: 'REMOVE', id: 156651}
// {type: 'EDIT', id: 112839, newTask: 'Walk Cat'}
