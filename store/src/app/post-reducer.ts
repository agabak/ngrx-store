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

export function PostReducer() {
}
