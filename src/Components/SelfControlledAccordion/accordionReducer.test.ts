import exp from 'constants';
import {accordionReducer, StateType, TOGGLE_COLLAPSED} from './accordionReducer';
import {bool} from 'prop-types';

test('reducer should change to opposit value', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //result
    const newState = accordionReducer(state, {type: TOGGLE_COLLAPSED})

    //expectation

    expect(newState.collapsed).toBe(true);
    expect(() => {
        accordionReducer(state, {type: 'FAKETYPE'})
    }).toThrowError();
})