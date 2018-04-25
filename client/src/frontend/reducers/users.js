const initialState = {
  usersList : [],
  currentUser : {}
};

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case 'INIT_USER':
      return Object.assign({}, state, {
        usersList : action.payload.users
      });
    case 'TRY_LOGIN':
      return Object.assign({}, state, {
        currentUser: action.payload
      });
    case 'ADD_USER':
      return Object.assign({}, state, {
        currentUser: 'qwe'
      });
    default:
      return state;
  }
  return state;
}
