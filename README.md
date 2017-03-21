# The Warhol: Out Loud App

Targets:   
- iOS 9.0 or greater 

### Description

![The Warhol: Out Loud Screenshots](./appScreenshots.png)

Out Loud is The Andy Warhol Museum's inclusive audio guide. Learn about the life and art of pop artist Andy Warhol through different stories and a variety of voices, such as scholars, curators, and members of Warhol’s family. 

Out Loud is designed to be inclusive of users across abilities. For users who are blind or have low vision, the app is optimized to work with VoiceOver and Dynamic Type. The app also offers in-depth visual descriptions of Warhol artworks. At the museum, Out Loud uses bluetooth low-energy beacons to show visitors stories based on their location.

### Building and Running

1. Install all React Native dependencies  
[React Native getting started guide](https://facebook.github.io/react-native/docs/getting-started.html)
2. Install project dependencies  
  ```
  npm i
  ```  
3. Run on the iOS simulator  
  ```
  react-native run-ios
  ```
  
#### Building on a device is an exercise left to the reader. However, here are some minimal adjustments that need to be made (assuming you already have an Apple developer account):
<!-- -->

1. Open ios/AndyWarholAccessibilityProject.xcworkspace in XCode.
2. Select the project ("AndyWarholAccessibilityProject") in the top left.
3. In the main window, select the target and the "General" tab.
4. Change the bundle identifier to match your app signing settings in your developer account.
5. Under "Signing", select your team from the drop down menu.
6. Now you should be ready to select your device in the menu bar and choose "Build" from the Product menu.

### Intellectual Property

All files that are the intellectual property owned by The Andy Warhol Museum and other third-parties have been removed from this repo and replaced with placeholders. This includes all the images and audio files included in the App Bundle. Additional museum information remains in the code to give an overall sense of the app.
