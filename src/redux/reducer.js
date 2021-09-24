import { SET_MOVIES, SET_TOTAL_PAGES } from './types';
export const initialState = {
  category: 'Popular',
  drawer: {
    activeDrawer: '',
    movieId: null,
    movieDetails: {},
    isOpen: false
  },
  movies: [],
  pages: {
    current: 1,
    totalPages: 1
  }
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: payload
      };

    case SET_TOTAL_PAGES:
      return {
        ...state,
        pages: {
          ...state.pages,
          totalPages: payload
        }
      };
    default:
      return state;
  }
};
