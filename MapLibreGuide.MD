## MapLibre Guide

In React-native, we can use [MapLibre React Native](https://www.npmjs.com/package/@maplibre/maplibre-react-native#installation) to add map to our app.



Change pod file for Post_install like below:

  post_install do |installer|
    # https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L197-L202
    react_native_post_install(
      installer,
      config[:reactNativePath],
      :mac_catalyst_enabled => false,
      # :ccache_enabled => true
    )
    // ... added only below this line
    $MLRN.post_install(installer)
  end




REFERENCE:
- [MapLibre React Native](https://www.npmjs.com/package/@maplibre/maplibre-react-native#installation)
- [MapLibre React Native Setup](https://maplibre.org/maplibre-react-native/docs/setup/react-native)


Edited By [Joizel Team](https://github.com/joizelmorojo)

Contact me: joizel@indulgevent.com