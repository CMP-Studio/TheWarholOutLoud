
import {
  realmDeleteHelper,
  realmDeleteAllHelper,
  realmObjectHelper,
  allRealmObjectsHelper,
  realmObjectIsInvalidHelper,
} from '../realm';

import { AudioContent } from './audioContent';

export class TourStop {
  static NAME = 'TourStop'

  static schema = {
    name: TourStop.NAME,
    primaryKey: 'uuid',
    properties: {
      uuid: { type: 'string' },
      order: { type: 'int' },
      floor: { type: 'int' },
      shortTitle: { type: 'string' },
      longTitle: { type: 'string' },
      shortCreditAccessibilityLabel: { type: 'string', optional: true },
      regions: { type: 'string' }, // Stored as String, but converted from Array
      imageURL: { type: 'string', optional: true },
      imageAccessibilityLabel: { type: 'string', optional: true },
      imageWidth: { type: 'int' },
      imageHeight: { type: 'int' },
      shortCredit: { type: 'string' },
      longCredit: { type: 'string' },
      tags: { type: 'string' }, // Stored as String, but converted from Array
      initialAudio: { type: 'string' },
      audioContent: { type: 'list', objectType: 'AudioContent' },
    },
  }

  // inserting is omitted on purpose because realm inserts are expensive
  // so should be done as a single block.

  static realmDelete(uuidKey) {
    return realmDeleteHelper(TourStop.NAME, uuidKey);
  }

  static realmDeleteAll() {
    return realmDeleteAllHelper(TourStop.NAME);
  }

  static realmObject(uuidKey) {
    return realmObjectHelper(TourStop.NAME, uuidKey);
  }

  static allRealmObjects() {
    return allRealmObjectsHelper(TourStop.NAME);
  }

  static jsonAudioContent(realmObject) {
    return realmObject.audioContent
      .map((content) => {
        return AudioContent.json(content);
      });
  }

  static json(uuidKey) {
    const realmObject = TourStop.realmObject(uuidKey);

    if (realmObjectIsInvalidHelper(realmObject)) {
      return {};
    }

    return {
      uuid: realmObject.uuid,
      order: realmObject.order,
      floor: realmObject.floor,
      shortTitle: realmObject.shortTitle,
      longTitle: realmObject.longTitle,
      shortCreditAccessibilityLabel: realmObject.shortCreditAccessibilityLabel,
      regions: realmObject.regions.split(','),
      imageURL: realmObject.imageURL,
      imageAccessibilityLabel: realmObject.imageAccessibilityLabel,
      imageWidth: realmObject.imageWidth,
      imageHeight: realmObject.imageHeight,
      shortCredit: realmObject.shortCredit,
      longCredit: realmObject.longCredit,
      tags: realmObject.tags.split(','),
      initialAudio: realmObject.initialAudio,
      audioContent: TourStop.jsonAudioContent(realmObject),
    };
  }
}
