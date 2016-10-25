
import {
  // enums
  INTRODUCTION,
  VISUAL_DESCRIPTION,
  ART_PROCESS,
  HISTORICAL_CONTEXT,
  COMMENTARY_ANECDOTE,
  ARCHIVAL_MATERIAL,
  TACTILE_EXPERIENCE,

  // actions
  UPDATE_LOCAL_PREFERENCES,
} from '../actions/preferences';

import {
  PLAYER_STATUS_LOADING,
  AUDIO_DID_FINISH_PLAYING,
} from '../actions/audio';

const initialState = {
  global: [
    {
      category: INTRODUCTION,
      totalServed: 0,
      totalListened: 0,
      percentage: 1,
    },
    {
      category: VISUAL_DESCRIPTION,
      totalServed: 0,
      totalListened: 0,
      percentage: 0,
    },
    {
      category: ART_PROCESS,
      totalServed: 0,
      totalListened: 0,
      percentage: 1,
    },
    {
      category: HISTORICAL_CONTEXT,
      totalServed: 0,
      totalListened: 0,
      percentage: 1,
    },
    {
      category: COMMENTARY_ANECDOTE,
      totalServed: 0,
      totalListened: 0,
      percentage: 1,
    },
    {
      category: ARCHIVAL_MATERIAL,
      totalServed: 0,
      totalListened: 0,
      percentage: 0.5,
    },
    {
      category: TACTILE_EXPERIENCE,
      totalServed: 0,
      totalListened: 0,
      percentage: 1,
    },
  ],
  local: [],
};

function updateLocalPreferences(state, uuid, time) {
  const localPreferences = state.local.map((chapterPreferences) => {
    if (chapterPreferences.uuid === uuid &&
        chapterPreferences.listenedTo < time) {
      const chapterToUpdate = chapterPreferences;
      chapterToUpdate.listenedTo = time;
      return chapterToUpdate;
    }
    return chapterPreferences;
  });

  return localPreferences;
}

function instatitateLocalPreferences(audioContent) {
  let localPreferences;

  if (audioContent !== null) {
    localPreferences = audioContent.map((chapter) => {
      const chapterPreferences = {};
      chapterPreferences.uuid = chapter.uuid;
      chapterPreferences.category = chapter.category;
      chapterPreferences.duration = chapter.duration;
      chapterPreferences.listenedTo = 0;
      return chapterPreferences;
    });
  } else {
    localPreferences = initialState.local;
  }

  return localPreferences;
}

function localPreferencesIntoGlobal(localPreferences, globalPreferences) {
  const updatedGlobalPreferences = globalPreferences.map((categoryPreferences) => {
    const categoryToUpdate = categoryPreferences;

    for (let i = 0; i < localPreferences.length; i++) {
      const content = localPreferences[i];
      if (content.category === categoryToUpdate.category) {
        // then add this information to global preferences
        // of the same category
        categoryToUpdate.totalServed += content.duration;
        categoryToUpdate.totalListened += content.listenedTo;
      }
    }

    // Total listened: The number of seconds the user has listend to
    // content from a particular category
    // Total served: The number of seconds that the user has been presented
    // with content from that category
    if (categoryToUpdate.totalServed !== 0) {
      categoryToUpdate.percentage =
        categoryToUpdate.totalListened / categoryToUpdate.totalServed;
    }
    return categoryToUpdate;
  });
  return updatedGlobalPreferences;
}

export function preferences(state = initialState, action) {
  switch (action.type) {


    case PLAYER_STATUS_LOADING: {
      const updatedLocalPreferences = updateLocalPreferences(state, action.uuid, action.time);
      const globalPreferences = localPreferencesIntoGlobal(updatedLocalPreferences, state.global);
      const localPreferences = instatitateLocalPreferences(action.audioContent);

      return Object.assign({},
        state,
        {
          global: globalPreferences,
          local: localPreferences,
        }
      );
    }

    case AUDIO_DID_FINISH_PLAYING:
    case UPDATE_LOCAL_PREFERENCES: {
      const updatedLocalPreferences = updateLocalPreferences(state, action.uuid, action.time);

      return Object.assign({},
        state,
        {
          local: updatedLocalPreferences,
        }
      );
    }

    default:
      return state;
  }
}
