# FaltingGame
Eine App bei der man sich eine Reihe von Nachrichten senden kann, die am Ende wie das Falt-Geschichten spiel endet und man eine wahrscheinlich zusammenhangslose aber lustige Geschichte herauskommt.

# Importante Commands
If something doesn't work run:
  ```zsh
  npm install
  ```
  or
  ```zsh
  yarn install
  ```
  or
  ```zsh
  bun install
  ```
to install necessary dependencies for the app.


For MacOS, cocoapods may need to be installed via
  ```zsh
  sudo gem install cocoapods
  ```
If problems concerning YogaKit occur try to delete the FGFaltinggame/ios/Podfiles.lock with
  ```zsh
  rm -rf Podfiles.lock
  ```
and reinstall the pods with
  ```zsh
  pod install
  ```

# Start Frontend
In ...Faltinggame/FGfaltinggame/ :

```zsh
bun run ios
```
or

```zsh
bun run android
```

You may exchange bun to yarn or npm with the respective "run xyz"
Bun seems to be the fastest.

Expo will open a separate terminal windwow after successfully building the app. Right now, the default from App.tsx will be shown
