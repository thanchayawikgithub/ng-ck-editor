import { createReducer, on } from '@ngrx/store';
import { EditorState } from '../../../types/editor.types';
import * as EditorActions from './editor.actions';

export const initialState: EditorState = {
  name: '',
  code: '',
  template: '',
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
  })),
  on(EditorActions.resetEditor, () => initialState)
);
