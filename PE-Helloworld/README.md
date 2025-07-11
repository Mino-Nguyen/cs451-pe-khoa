# CS451 PE01-HelloWorld
## Input
* Nothing
## Process
1. Import three React Native Components - StyleSheet, Text, and View.
2. Define the App functional component and export the component as the module's default export.
   1. Start the return statement of the App component, which returns JSX.
      1. A View component is used as a container. It applies styles from the styles.container object.
         1. A Text component displaying the string "Sam Chung".
         2. A Text component displaying the string "Team 0".
         3. A Text component displaying the string "SE A".
         4. A Text component displaying the string "MSCS".
         5. A Text component displaying the string "STC".
         2. Close the View component.
      2. Close the return statement of the App component.
   2. Close the App function definition.
3. Start the definition of the styles object using StyleSheet.create.
   1. Define the container style object.
      1. Set the flex property to 1, making the container take up the full available space.
      2. Set the background color property to yellow (#ffff00).
      3. Set the alignItems property to center, centering child components horizontally.
      4. Set the justifyContent property to center, centering child components vertically.
   2. Close the container style object.
4. Close the styles object definition.
## Output
* Display your name, team number with title, major, and school.