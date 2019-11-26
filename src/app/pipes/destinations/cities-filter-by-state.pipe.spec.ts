import { CitiesFilterByStatePipe } from './cities-filter-by-state.pipe';

describe('CitiesFilterByStatePipe', () => {
  it('create an instance', () => {
    const pipe = new CitiesFilterByStatePipe();
    expect(pipe).toBeTruthy();
  });
});
