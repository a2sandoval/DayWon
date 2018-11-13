import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

// we just call the actions here and make sure they were running effectively
describe('saveWorkout', () => {
  it('has the correct type', () => {
    const action = saveWorkout();

    expect(action.type).toEqual(SAVE_WORKOUT);
  });

  it('has the correct payload', () => {
    const action = saveWorkout('New Workout');

    expect(action.payload).toEqual('New Workout');
  });
});
