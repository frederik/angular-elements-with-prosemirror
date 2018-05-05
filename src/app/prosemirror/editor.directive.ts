import { Directive, ViewContainerRef, Injector } from '@angular/core';

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
      attrs: { value: { default: 'in the app and in ProseMirror' }, random: { default: -1 } },
      inline: false,
      draggable: true,
      selectable: true,
      atom: false,
      group: 'block',
      toDOM(node) {
        return ['div', { 'data-type': 'example', value: node.attrs.value }, ''];
      },
      parseDOM: [{
        // you could use my-element as a tag, but we want some additional features that come with the node view
        // the custom element would then completely take over the node and only communicate through its attributes
        tag: 'div[data-type=example]',
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
const heading = mySchema.nodes.heading;

@Directive({
  selector: '[appEditor]'
})
export class EditorDirective {

  view = new EditorView(this.viewContainerRef.element.nativeElement, {
    state: EditorState.create({
      doc: node('doc', {}, [
        heading.create({}, [text('Test document')]),
        example.create({}, []),
        paragraph.create({}, [text('Some paragraph to drag after')])
      ]),
      plugins: exampleSetup({ schema: mySchema }),
    }),
    nodeViews: {
      example: (node, nodeView, getPos) => new CustomView(node, nodeView, getPos, this.injector)
    }
  });

  constructor(public viewContainerRef: ViewContainerRef, private injector: Injector) { }

}
