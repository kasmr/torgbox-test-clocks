import {
  CHANGE_TIMEZONE_FOR_CLOCK_1,
  CHANGE_TIMEZONE_FOR_CLOCK_2,
} from './types';

const initialState = {
  hours1: 0,
  hours2: 0,
  cities: [
    {
      id: 1,
      name: 'Москва',
      hourDifference: 0,
    },
    {
      id: 2,
      name: 'Владивосток',
      hourDifference: 7,
    },
    {
      id: 3,
      name: 'Калининград',
      hourDifference: -1,
    },
    {
      id: 4,
      name: 'Красноярск',
      hourDifference: 4,
    },
  ],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TIMEZONE_FOR_CLOCK_1:
      return {
        ...state,
        hours1: action.payload,
      };
    case CHANGE_TIMEZONE_FOR_CLOCK_2:
      return {
        ...state,
        hours2: action.payload,
      };

    default:
      return state;
  }
};
