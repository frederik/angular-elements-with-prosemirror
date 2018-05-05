import { Injector, Renderer2 } from '@angular/core';
import { TestDataService } from '../test-data.service';

export class CustomView {
    renderer = this.injector.get(Renderer2);
    tds = this.injector.get(TestDataService);

    dom = this.renderer.createElement('my-element');

    action = (random) => {
        this.tds.reset(random.detail);
    };

    constructor(private node, private view, private getPos, private injector: Injector) {
        // changes from our custom element will come as events
        this.dom.addEventListener('result', this.action);
    }

    update(node, decorations): boolean {
        // we could setAttribute here
        return true;
    }

    selectNode() {
        // update the custom element
        this.dom.setAttribute('selected', true);
    }

    deselectNode() {
        // update the custom element
        this.dom.setAttribute('selected', false);
    }

    ignoreMutation() {
        return true;
    }

    stopEvent(event) {
        // we'll make sure that the element itself is selectable and draggable
        // all inner events are stopped (so we can use our custom controls)
        if (event.target === this.dom.children[0]) { return false; }
        return true;
    }

    destroy() {
        // clean up listeners
        this.dom.removeEventListener('result', this.action);
    }
}
