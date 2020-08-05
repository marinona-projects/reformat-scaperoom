import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logoImg from '../../assets/images/logos/logo.jpg';
import bgImage from '../../assets/images/diploma/bg.png';
import vartaFontLight from '../../assets/images/diploma/varta font/Varta-Light.ttf';
import vartaFontBold from '../../assets/images/diploma/varta font/Varta-SemiBold.ttf';

Font.register({ family: 'VartaLight', src: vartaFontLight });
Font.register({ family: 'VartaBold', src: vartaFontBold });

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 15,
    },
    pageBackground: {
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '106%',
        width: '104%',
    },
    centerImage: {
        alignSelf: "center",
        flexGrow: 1,
        paddingTop: 50
    },
    body: {
        paddingTop: 20,
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
        textDecoration: 'underline',
        fontFamily: 'VartaBold',
    },
    beforeText: { fontSize: 26, fontFamily: 'VartaLight' },
    afterText: { fontSize: 15, fontFamily: 'VartaLight' },
    body2: {
        marginLeft: 200,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'VartaLight',

    },
    titleNameGroup: {
        flexGrow: 2,
        flexDirection: 'column',
        width: '25%'
    },
    titleText: { fontSize: 12, letterSpacing: 3 },
    nameText: { fontSize: 9, letterSpacing: 1 },
});

// Create Document Component
const DiplomaDocument = ({ userName }) => (
    <Document >
        <Page orientation='landscape' style={styles.page} size="A4">
            <Image src={bgImage} style={styles.pageBackground} />
            <Image src={logoImg} style={styles.centerImage} alt="logo reforma't image" />

            <View style={styles.body}>
                <Text style={{ ...styles.text, ...styles.beforeText }}>Diploma otorgat a</Text>
                <Text style={{ ...styles.text, ...styles.userNameText }}>{` ${userName} `}</Text>
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
        </Page>
    </Document >
);


export default DiplomaDocument;