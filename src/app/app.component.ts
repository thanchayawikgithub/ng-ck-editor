import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import * as EditorActions from './store/editor/editor.actions';
import { Store } from '@ngrx/store';
import {
  selectEditorCode,
  selectEditorName,
  selectEditorTemplate,
} from './store/editor/editor.selectors';
import { ClassicEditor } from 'ckeditor5';
import { editorConfig } from './editor-config';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CKEditorModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public isLayoutReady = false;
  public Editor = ClassicEditor;
  public config = editorConfig;
  public template$;
  public name$;
  public code$;
  public template: string = '';

  constructor(private store: Store) {
    this.template$ = this.store.select(selectEditorTemplate);
    this.name$ = this.store.select(selectEditorName);
    this.code$ = this.store.select(selectEditorCode);
  }

  public ngOnInit(): void {
    combineLatest([this.name$, this.code$]).subscribe(([name, code]) => {
      this.store.dispatch(
        EditorActions.setEditorTemplate({
          template: `<h1>Name: ${name}</h1><h1>Code: ${code}</h1>`,
        })
      );
    });

    this.template$.subscribe((template) => {
      this.template = template;
    });
  }

  setEditorName(event: Event): void {
    const name = (event.target as HTMLInputElement).value;
    this.store.dispatch(EditorActions.setEditorName({ name }));
  }

  setEditorCode(event: Event): void {
    const code = (event.target as HTMLInputElement).value;
    this.store.dispatch(EditorActions.setEditorCode({ code }));
  }

  setEditorTemplate(template: string): void {
    this.store.dispatch(EditorActions.setEditorTemplate({ template }));
  }
}
