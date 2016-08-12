
// *** Action Types ***
export const UPDATE_AND_INSTANTIATE_LOCAL_PREFERENCES = 'UPDATE_AND_INSTANTIATE_LOCAL_PREFERENCES';
export const UPDATE_LOCAL_PREFERENCES = 'UPDATE_LOCAL_PREFERENCES';

// *** Category Enums ***
export const INTRODUCTION = 'INTRODUCTION';
export const VISUAL_DESCRIPTION = 'VISUAL_DESCRIPTION';
export const ART_PROCESS = 'ART_PROCESS';
export const HISTORICAL_CONTEXT = 'HISTORICAL_CONTEXT';
export const COMMENTARY_ANECDOTE = 'COMMENTARY_ANECDOTE';
export const ARCHIVAL_MATERIAL = 'ARCHIVAL_MATERIAL';
export const TACTILE_EXPERIENCE = 'TACTILE_EXPERIENCE';

// *** Action Creators ***

export function updateAndInstantiateLocalPreferences(audioContent, uuid, time) {
  return {
    type: UPDATE_AND_INSTANTIATE_LOCAL_PREFERENCES,
    audioContent,
    uuid,
    time,
  };
}

export function updateLocalPreferences(uuid, time) {
  return {
    type: UPDATE_LOCAL_PREFERENCES,
    uuid,
    time,
  };
}
