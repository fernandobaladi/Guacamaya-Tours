import { SortByNamePipe } from './sort-by-name.pipe';

describe('SortStateByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
