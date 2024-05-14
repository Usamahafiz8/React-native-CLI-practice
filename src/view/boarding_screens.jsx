import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const BoardingScreens = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 4;
    const boardingData = [
        "Welcome to the App!",
        "Customize your experience.",
        "Set your preferences.",
        "You're all set to go!"
    ];

    const handleNextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.replace('Dashboard');  // Navigate to Dashboard screen
        }
    };

    const handleSkip = () => {
        navigation.replace('Dashboard');  // Directly navigate to Dashboard screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{boardingData[currentStep]}</Text>
            <View style={styles.buttonContainer}>
                {currentStep < totalSteps - 1 ? (
                    <Button title="Next" onPress={handleNextStep} />
                ) : (
                    <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
                )}
                <Button title="Skip" onPress={handleSkip} color="red" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    titleText: {
        fontSize: 24,
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
});

export default BoardingScreens;
