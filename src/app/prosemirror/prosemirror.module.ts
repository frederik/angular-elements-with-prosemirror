import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorDirective } from './editor.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorDirective],
  exports: [EditorDirective]
})
export class ProsemirrorModule { }
