
import Realm from 'realm';

import { TourStop } from './models/tourStop';
import { AudioContent } from './models/audioContent';

const SCHEMAVERSION = 1;


/* eslint-disable */
if (__DEV__) {
  console.log(`Realm DB path is: ${Realm.defaultPath}`);
}
/* eslint-enable */


// *** Realm Instance ***
let realmInstance;
export const getRealmInstance = () => {
  if (realmInstance == null) {
    realmInstance = new Realm({
      schema: [TourStop, AudioContent],
      schemaVersion: SCHEMAVERSION,
    });
  }

  return realmInstance;
};


// *** Realm Helper Functions ***
export function realmDeleteHelper(realmType, uuidKey) {
  const realm = getRealmInstance();
  const realmObject = realm
    .objects(realmType)
    .filtered(`uuid == "${uuidKey}"`);

  realm.write(() => {
    realm.delete(realmObject);
  });

  return true;
}

export function realmDeleteAllHelper(realmType) {
  const realm = getRealmInstance();
  const realmObjects = realm.objects(realmType);

  realm.write(() => {
    realm.delete(realmObjects);
  });

  return true;
}

export function realmObjectHelper(realmType, uuidKey) {
  const realm = getRealmInstance();
  return realm
    .objects(realmType)
    .filtered(`uuid == "${uuidKey}"`);
}

export function allRealmObjectsHelper(realmType) {
  const realm = getRealmInstance();
  return realm.objects(realmType);
}

export function realmObjectIsInvalidHelper(realmObject) {
  return realmObject == null;
}
