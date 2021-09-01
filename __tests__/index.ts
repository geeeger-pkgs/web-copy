import copy from '../src';

describe('@geeeger/web-copy module', () => {
  it('copy', () => {
    copy('test')
    expect(document.querySelector('#super-coper-container')).toBeDefined();
  });
});
