import { StyleSheet, Text, ScrollView, Image, TextInput } from 'react-native';

const App = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('../../assets/images/icon.png')} />
        <Text>Which couse did you like</Text>
        <TextInput style={styles.input} placeholder='ex CS624' />
        <Text style={styles.heading}>Core Requirement(24 Credits)</Text>
        <Text style={styles.text}>
            CS504 Software Engineering<br />
            CS506 Programming for Computing<br />
            CS519 Cloud Computing<br />
            CS533 Computer Architecture<br />
            CS547 Secure Systems and Programs<br />
            CS622 Discrete Math and Algorithms for Computing<br />
            DS510 Artificial Intelligence for Data Science<br />
            DS620 Machine Learning & Deep Learning<br />
        </Text>
        <Text style={styles.heading}>Depth of study(6 Credits)</Text>
        <Text style={styles.text}>
            CS504 Software Engineering<br />
            DS620 Machine Learning & Deep Learning<br />
        </Text><Text style={styles.heading}>Electives(6 Credits)</Text>
        <Text style={styles.text}>
            DS510 Artificial Intelligence for Data Science<br />
            DS620 Machine Learning & Deep Learning<br />
        </Text>
        <Text style={styles.heading}>Capsstone(3 Credits)</Text>
        <Text style={styles.text}>
            DS620 Machine Learning & Deep Learning<br />
        </Text>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
    input: {
        padding: 15,
        borderWidth: 1,
    },
    heading: {
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 28,
        backgroundColor: 'yellow',
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 20,
    },
})

export default App
