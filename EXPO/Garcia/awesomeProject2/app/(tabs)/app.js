import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals(currentCourseGoals => [  
            ...currentCourseGoals,
            enteredGoalText,
        ]);
        setEnteredGoalText('');
    }

    function removeGoalHandler(goalToRemove) {
        setCourseGoals(currentCourseGoals => 
            currentCourseGoals.filter(goal => goal !== goalToRemove)
        );
    }

    return (
        <ImageBackground 
            source={require('@/assets/images/download.jpg')} // Change the path to your image
            style={styles.backgroundImage} 
        >
            <KeyboardAvoidingView 
                style={styles.keyboardAvoidingContainer}
            >
                <View style={styles.appContainer}>
                    <Text style={styles.header}>Start Your Day With a Goal!</Text>

                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Your Course Goal" 
                            placeholderTextColor="black"
                            onChangeText={goalInputHandler} 
                            value={enteredGoalText} 
                        />
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.goalsContainer}>
                        <Text>List of Goals:</Text>
                        {courseGoals.map((goal, index) => ( 
                            <View key={index} style={styles.goalItem}>
                                <Text style={styles.goalText}>{goal}</Text>
                                <TouchableOpacity onPress={() => removeGoalHandler(goal)}>
                                    <Text style={styles.removeText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        flex: 1,
    },
    appContainer: {
        paddingTop: 120,
        paddingHorizontal: 15,
        flex: 1,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black', 
        textAlign: 'left',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 1,
    },
    textInput: {
        borderWidth: 2, 
        borderColor: 'black', 
        width: '70%',  
        marginRight: 8, 
        padding: 13,  
    },
    goalsContainer: {
        marginBottom: 200,
        flex: 1,
    },
    goalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    goalText: {
        width: '70%',
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
});
