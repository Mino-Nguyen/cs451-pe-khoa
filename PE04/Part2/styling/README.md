# ProfileCard Scaling App

## Input
* Static data array containing 6 user profiles.
  * Each profile has:
    * `image` (local asset)
    * `name` (string)
    * `occupation` (string)
    * `description` (string)
    * `showThumbnail` (boolean)

## Process
1. Import necessary React, React Native, and supporting libraries.
   1. `React`, `Component` from 'react'.
   2. `PropTypes` for type checking props.
   3. `immutability-helper` to update nested state immutably.
   4. React Native components: `Platform`, `Image`, `StyleSheet`, `Text`, `View`, `ScrollView`, `TouchableHighlight`.
2. Define a functional component **`ProfileCard`**.
   1. Accepts props: `image`, `name`, `occupation`, `description`, `onPress`, `showThumbnail`.
   2. Builds a `containerStyles` array:
      1. Always includes `styles.cardContainer`.
      2. Adds `styles.cardThumbnail` if `showThumbnail` is true.
   3. Renders a `TouchableHighlight` that wraps:
      1. Profile image inside a styled container.
      2. Name, occupation, and description text blocks.
3. Define the **`App`** class component.
   1. Initialize state with the `data` array.
   2. Create `handleProfileCardPress` method:
      1. Toggles the `showThumbnail` boolean for the tapped profile.
      2. Uses `immutability-helper` to update the state immutably.
   3. In `render`:
      1. Map over `this.state.data` to create a `ProfileCard` for each profile.
      2. Pass down props including `onPress` bound to `handleProfileCardPress` for each card.
      3. Render all `ProfileCard` components inside a `ScrollView` with `styles.container` for layout.
4. Define `styles` using `StyleSheet.create`.
   1. `container`:
      * `flexDirection: 'row'`, `flexWrap: 'wrap'`, `justifyContent: 'space-between'`.
   2. `cardContainer`:
      * Fixed size `width: 300`, `height: 400`, blue background, border, rounded corners.
      * Platform-specific shadows (`shadowColor`, `shadowOffset`, `elevation`).
   3. `cardImageContainer`:
      * Circular container for profile image with white background, border, shadow, and padding.
   4. `cardImage`:
      * Fixed size `width: 80`, `height: 80`.
   5. `cardName`, `cardOccupation`, `cardDescription`:
      * Styled text elements with font weight, margins, borders, italic style, and text shadows.
   6. `cardThumbnail`:
      * Applies `transform: [{ scale: 0.2 }]` to shrink the card when in thumbnail mode.

## Output
* A scrollable, wrapping grid of profile cards.
  * Tapping a thumbnail expands it to full size.
  * Tapping a full-size card collapses it back to a thumbnail.
