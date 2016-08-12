
import {
  LOAD_AUDIO_SUCCESS,
  UPDATE_AUDIO_CURRENT_TIME,
  TOGGLE_AUDIO_TRANSCRIPT,
  LOAD_AUDIO_FAILURE,
} from '../actions/audio';

const initialState = [
  // {
  //   active: false,
  //   uuid: '',
  //   category: '',
  //   title: '',
  //   lastPlayedTime: 0,
  //   duration: 10,
  //   showTranscript: false,
  //   speaker: '',
  //   audioURL: '',
  //   transcript: '',
  //   linksTo: [],
  // },
];

function addMissingProps(object, uuid) {
  return object
    .map((content) => {
      return Object.assign({},
        content,
        {
          active: content.uuid === uuid,
          lastPlayedTime: 0,
          showTranscript: false,
        }
      );
    });
}

function assignAudioContent(state, _audioContent, uuid, replaceAudioContent) {
  if (replaceAudioContent) {
    return addMissingProps(_audioContent, uuid);
  }

  return state
    .map((content) => {
      return Object.assign({},
        content,
        {
          active: content.uuid === uuid,
        }
      );
    });
}

export function audioContent(state = initialState, action) {
  switch (action.type) {

    case LOAD_AUDIO_SUCCESS: {
      const { content, activeAudio, replaceAudioContent } = action;

      return assignAudioContent(state, content, activeAudio.uuid, replaceAudioContent);
    }

    case UPDATE_AUDIO_CURRENT_TIME: {
      return state
        .map((content) => {
          if (content.uuid === action.uuid) {
            return Object.assign({},
              content,
              {
                lastPlayedTime: action.time,
              }
            );
          }

          return content;
        });
    }

    case TOGGLE_AUDIO_TRANSCRIPT: {
      return state
        .map((content) => {
          let show = content.showTranscript;
          if (content.uuid === action.uuid) {
            show = !show;
          }
          return Object.assign({},
            content,
            {
              showTranscript: show,
            }
          );
        });
    }

    case LOAD_AUDIO_FAILURE: {
      return initialState;
    }

    default:
      return state;
  }
}
