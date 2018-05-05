import { ProsemirrorModule } from './prosemirror.module';

describe('ProsemirrorModule', () => {
  let prosemirrorModule: ProsemirrorModule;

  beforeEach(() => {
    prosemirrorModule = new ProsemirrorModule();
  });

  it('should create an instance', () => {
    expect(prosemirrorModule).toBeTruthy();
  });
});
