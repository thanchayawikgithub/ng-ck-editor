import { createAction, props } from '@ngrx/store';
export const setEditorCode = createAction(
  '[Editor] Set Code',
  props<{ code: string }>()
);

export const setEditorName = createAction(
  '[Editor] Set Name',
  props<{ name: string }>()
);

export const setEditorTemplate = createAction(
  '[Editor] Set Template',
  props<{ template: string }>()
);
