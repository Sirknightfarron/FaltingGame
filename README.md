# FaltingGame
Eine App bei der man sich eine Reihe von Nachrichten senden kann, die am Ende wie das Falt-Geschichten spiel endet und man eine wahrscheinlich zusammenhangslose aber lustige Geschichte herauskommt.

# Importante Commands
If something doesn't work run:
  ```zsh
  npm install
  or
  yarn install 
  or
  bun install
  ```
to install necessary dependencies for the app.


For MacOS, cocoapods may need to be installed via
  ```zsh
  sudo gem install cocoapods
  ```

# Start Frontend
In ...Faltinggame/FGfaltinggame/ :

```zsh
bun run ios

bun run android
```

You may exchange bun to yarn or npm with the respective "run xyz"
Bun seems to be the fastest.

Expo will open a separate terminal windwow after successfully building the app. Right now, the default from App.tsx will be shown