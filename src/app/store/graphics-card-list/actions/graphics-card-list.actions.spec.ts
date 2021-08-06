import * as fromGraphicsCardList from './graphics-card-list.actions';

describe('loadGraphicsCardLists', () => {
  it('should return an action', () => {
    expect(fromGraphicsCardList.loadGraphicsCardLists().type).toBe('[GraphicsCardList] Load GraphicsCardLists');
  });
});
