
import GoogleAnalytics from 'react-native-google-analytics-bridge';

// *** No State Changes Actions ***


// Content Analytics

// Beacon Analytics
export function analyticsTrackBeaconRegion(regions) {
  GoogleAnalytics.trackEvent('Beacon', 'RegionsDetected',
    {label: regions}
  );
}


// Device Analytics
// WARNING: This goes by if 'always show tutorial is on', which is a pretty error
// prone way to get this data
export function analyticsTrackDeviceType(isGuest) {
  GoogleAnalytics.trackEvent('Device', 'Type',
    {label: isGuest ? 'Guest' : 'Museum'}
  );
}

export function analyticsTrackDeviceAutoPlay(autoPlayOn) {
  GoogleAnalytics.trackEvent('Device', 'AutoPlayStatus',
    {label: autoPlayOn ? 'On' : 'Off'}
  );
}


// Accessibility Analytics
export function analyticsTrackScreenReaderStatus(ScreenReaderStatus) {
  GoogleAnalytics.trackEvent('Accessibility', 'ScreenReaderStatus',
    {label: ScreenReaderStatus ? 'On' : 'Off'}
  );
}

export function analyticsTrackTranscriptOpenned(tourStop, contentTitle) {
  GoogleAnalytics.trackEvent('Accessibility', 'TranscriptOpenned',
    {label: `${tourStop} ${contentTitle}`}
  );
}
