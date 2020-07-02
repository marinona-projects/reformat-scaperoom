import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logoImg from '../../assets/images/logos/logo.jpg';
import cornerDesign from '../../assets/images/diploma/diplomaDecoration.png';
import cornerDesign2 from '../../assets/images/diploma/diplomaDecoration2.png';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 15
    },
    header: {
        flexGrow: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    footer: {
        flexGrow: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    centerImage: {
        alignSelf: "center",
        flexGrow: 4
    },
    body: {
        flexGrow: 2,
        marginTop: 20,
        textAlign: 'center',
    },
    text: {
        paddingBottom: 10,
    },
    userNameText: {
        fontSize: 40,
        fontWeight: 900,
        textDecoration: 'underline'
    },
    beforeText: { fontSize: 28 },
    afterText: { fontSize: 15 },
    body2: {
        marginLeft: 200,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleNameGroup: {
        flexGrow: 2,
        flexDirection: 'column'
    },
    titleText: { fontSize: 12 },
    nameText: { fontSize: 9 },
});

// Create Document Component
const DiplomaDocument = ({ userName }) => (
    <Document >
        <Page orientation='landscape' style={styles.page} size="A4">
            <View style={styles.header}>
                <Image src={cornerDesign} alt="disseny cantonada" />
            </View>
            <Image src={logoImg} style={styles.centerImage} alt="congrats image" />
            <View style={styles.body}>
                <Text style={{ ...styles.text, ...styles.beforeText }}>Diploma otorgat a</Text>
                <Text style={{ ...styles.text, ...styles.userNameText }}>{userName}</Text>
                <Text style={{ ...styles.text, ...styles.afterText, paddingTop: 25 }}>En reconeixement a l'esforç personal i resposta positiva a l'hora de treballar en equip.</Text>
                <Text style={{ ...styles.text, ...styles.afterText }}>Gràcies per participar en aquesta missió, tindrem en compte la vostra dedicació per a futures expedicions.</Text>
            </View>
            <View style={styles.body2}>
                <View style={styles.titleNameGroup}>
                    <Text style={styles.titleText}>Manel Prieto,</Text>
                    <Text style={styles.nameText}>Coordinador Pedagògic</Text>
                </View>
                <View style={{ ...styles.titleNameGroup }}>
                    <Text style={styles.titleText}>Maria Prieto, </Text>
                    <Text style={styles.nameText}>Directora de desenvolupament de projectes</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Image src={cornerDesign2} alt="disseny cantonada" />
            </View>
        </Page>
    </Document >
);


export default DiplomaDocument;