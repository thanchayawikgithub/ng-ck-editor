import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditorState } from '../../../types/editor.types';

export const selectEditorState = createFeatureSelector<EditorState>('editor');

export const selectEditorCode = createSelector(
  selectEditorState,
  (state: EditorState) => state.code
);

export const selectEditorName = createSelector(
  selectEditorState,
  (state: EditorState) => state.name
);

export const selectEditorTemplate = createSelector(
  selectEditorState,
  (state: EditorState) => state.template
);
