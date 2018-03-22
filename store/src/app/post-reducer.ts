import * as PostActions from './post-action';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from './post-model';


export type Action = PostActions.All;

// Default app state
const defaultState: Post = {
  text: 'Hello. I am the default post',
  likes: 0
};

// Helper  function to create new state object

const newState = (state, newData) => {
 return Object.assign({}, state, newData);
};

export function PostReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case PostActions.EDIT_TEXT:
    return newState(state, {text: action.type});

    case PostActions.UPVOTE:
     return newState(state, {like: state.likes + 1});

    case PostActions.DOWNVOTE:
    return newState(state, {like: state.likes - 1});
    case PostActions.RESET:
    return defaultState;
  }
}
