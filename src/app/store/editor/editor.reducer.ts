import { createReducer, on } from '@ngrx/store';
import { EditorState } from '../../../types/editor.types';
import * as EditorActions from './editor.actions';

export const initialState: EditorState = {
  name: '',
  code: '',
  template: '<div><h1>Name:</h1><h1>Code:</h1></div>',
};

export const editorReducer = createReducer(
  initialState,
  on(EditorActions.setEditorCode, (state, { code }) => ({
    ...state,
    code,
  })),
  on(EditorActions.setEditorName, (state, { name }) => ({
    ...state,
    name,
  })),
  on(EditorActions.setEditorTemplate, (state, { template }) => ({
    ...state,
    template,
  }))
);
