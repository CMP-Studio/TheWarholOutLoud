
import {
  realmDeleteHelper,
  realmDeleteAllHelper,
  realmObjectHelper,
  allRealmObjectsHelper,
  realmObjectIsInvalidHelper,
} from '../realm';

export class AudioContent {
  static NAME = 'AudioContent'

  static schema = {
    name: AudioContent.NAME,
    primaryKey: 'uuid',
    properties: {
      uuid: { type: 'string' },
      category: { type: 'string' },
      title: { type: 'string' },
      duration: { type: 'int' },
      depth: { type: 'int', default: 0 },
      speaker: { type: 'string' },
      audioURL: { type: 'string' },
      transcript: { type: 'string' },
    },
  }

  // inserting is omitted on purpose because realm inserts are expensive
  // so should be done as a single block.

  static realmDelete(uuidKey) {
    return realmDeleteHelper(AudioContent.NAME, uuidKey);
  }

  static realmDeleteAll() {
    return realmDeleteAllHelper(AudioContent.NAME);
  }

  static realmObject(uuidKey) {
    return realmObjectHelper(AudioContent.NAME, uuidKey);
  }

  static allRealmObjects() {
    return allRealmObjectsHelper(AudioContent.NAME);
  }

  static json(realmObject) {
    if (realmObjectIsInvalidHelper(realmObject)) {
      return {};
    }

    return {
      uuid: realmObject.uuid,
      category: realmObject.category,
      title: realmObject.title,
      duration: realmObject.duration,
      depth: realmObject.depth,
      speaker: realmObject.speaker,
      audioURL: realmObject.audioURL,
      transcript: realmObject.transcript,
    };
  }
}
