
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

export default function hydrate(newVersion) {
  if (newVersion) {
    realm.write(() => {
      const realmObjects = realm.objects(TourStop.NAME);
      realm.delete(realmObjects);

      for (const tourStop of tourStops) {
        saveToRealm(tourStop);
      }
    });
  }
}
