import { CustomFilter } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomFilter();
    expect(pipe).toBeTruthy();
  });
});
