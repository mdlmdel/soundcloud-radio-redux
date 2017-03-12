import * as actionTypes from '../constants/actionTypes';

const initialState = {
    tracks: [],
    activeTrack: null
};

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
    // If we have no case above, then we will return this default.
    /*default:
      return state; */
    case actionTypes.TRACK_PLAY:
      return setPlay(state, action);
  }
  
}

function setTracks(state, action) {
  const { tracks } = action;
  // ...state means you're keeping everything originally in state
  // ...state = spread operator
  // ...tracks = rest operator
  // You know here which is a spread operator and which is a rest operator by which is an object
  return [ ...state, ...tracks ];
}

function setPlay(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track };
}