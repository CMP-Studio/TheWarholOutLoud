
import {
  AsyncStorage,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import { getRealmInstance } from '../realm';
import { TourStop } from '../models/tourStop';

import { tourStops } from './tourStops';

const realm = getRealmInstance();

function saveToRealm(tourStop) {
  realm.create(TourStop.NAME,
    {
      ...tourStop,
      tags: tourStop.tags.join(','),
      regions: tourStop.regions.join(','),
    }
  );
}

export default async function hydrate() {
  const appVersion = `${DeviceInfo.getVersion()}.${DeviceInfo.getBuildNumber()}`;

  try {
    const lastSavedVersion = await AsyncStorage.getItem('lastSavedVersion');

    if (lastSavedVersion == null || lastSavedVersion !== appVersion) {
      realm.write(() => {
        const realmObjects = realm.objects(TourStop.NAME);
        realm.delete(realmObjects);

        for (const tourStop of tourStops) {
          saveToRealm(tourStop);
        }
      });

      AsyncStorage.setItem('lastSavedVersion', appVersion);
    }
  } catch (e) {
    // If for some reason we cannot load AsyncStorage then just load
    // the current data anyway
    realm.write(() => {
      const realmObjects = realm.objects(TourStop.NAME);
      realm.delete(realmObjects);

      for (const tourStop of tourStops) {
        saveToRealm(tourStop);
      }
    });
  }
}
