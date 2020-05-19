import { CHANGE_TIMEZONE } from './types';

const initialState = {
  date: 0,
  cities: [
    {
      id: 1,
      name: 'Москва',
      timeDifference: 0,
    },
    {
      id: 2,
      name: 'Владивосток',
      timeDifference: 36000000,
    },
    {
      id: 3,
      name: 'Калининград',
      timeDifference: -3600000,
    },
    {
      id: 4,
      name: 'Красноярск',
      timeDifference: 25200000,
    },
  ],
};

export const Reducer = (state = initialState, action) => {
  switch (action.payload) {
    case CHANGE_TIMEZONE:
      return {
        ...state,
        date: action.payload,
      };

    default:
      return state;
  }
};
