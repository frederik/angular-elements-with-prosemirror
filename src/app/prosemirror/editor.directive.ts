import { Directive, ViewContainerRef } from '@angular/core';

import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { Schema, DOMParser } from "prosemirror-model"
import { schema } from "prosemirror-schema-basic"
import { addListNodes } from "prosemirror-schema-list"
import { exampleSetup } from "prosemirror-example-setup"

import { CustomView } from './custom-view';

const nodes = addListNodes(schema.spec.nodes, "paragraph block*", "block");

const mySchema = new Schema({
  nodes: nodes.append({
    example: {
      attrs: {},
      inline: false,
      draggable: true,
      selectable: true,
      atom: false,
      group: 'block',
      // If you are not using a nodeview, make sure your editor instance supplies a citationRenderer,
      // otherwise all citations RENDERERwill be rendered as NO RENDERER SUPPLIED.
      toDOM(node) {
        return ['my-element', {}, ''];
      },
      parseDOM: [{
        tag: 'my-element',
        getAttrs(dom) {
          return {};
        }
      }]
    }
  }),
  marks: schema.spec.marks
});

const node = mySchema.node.bind(mySchema);
const text = mySchema.text.bind(mySchema);
const example = mySchema.nodes.example;
const paragraph = mySchema.nodes.paragraph;

@Directive({
  selector: '[appEditor]'
})
export class EditorDirective {

  view = new EditorView(this.viewContainerRef.element.nativeElement, {
    state: EditorState.create({
      doc: node('doc', {}, [
        paragraph.create({}, [text('Test document')]),
        example.create({}, [])
      ]),
      plugins: exampleSetup({ schema: mySchema }),
      nodeViews: {
        example: CustomView
      }
    })
  });

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(this.viewContainerRef.element.nativeElement);
  }

}
