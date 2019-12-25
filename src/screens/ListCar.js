import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    ScrollView,
    TouchableHighlight,
    Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Constants, colors} from '../configs/theme';
import {Modalize} from 'react-native-modalize';
import CarDetail from '../components/CardDetail';
import {getData} from '../configs/googlesheet';

const ListCar = () => {
    const modalRef = React.useRef(null);
    const [isVisible, setVisible] = React.useState(false);
    const [data, setData] = React.useState([]);

    // const renderItem = ({item, index}) => {
    //     return (
    //         <View key={index}>
    //             <View style={styles.card}>
    //                 <View style={styles.cardImage}>
    //                     <Image
    //                         style={styles.image}
    //                         source={{uri: item.image}}
    //                     />
    //                 </View>
    //                 <View style={[styles.infoCar, {flex: 1}]}>
    //                     <View style={styles.cardHeader}>
    //                         <View style={styles.cardTitle}>
    //                             <Text>{item.carOwner}</Text>
    //                             <Text>{item.category}</Text>
    //                         </View>
    //                         <Text style={styles.cardSubTitle}>{item.address}</Text>
    //                     </View>
    //                     <View style={{flex: 3, marginLeft: 15, backgroundColor: grey50}}>
    //                         <Text>Nga Son di: {item.timeStart}</Text>
    //                         <Text>Ha Noi ve: {item.timeEnd}</Text>
    //                     </View>
    //                     <View style={styles.phone}>
    //                         <Feather name="phone-call" size={16} color="black"/>
    //                         <Text onPress={() => callPhone(item.phone)}> {item.phone}</Text>
    //                     </View>
    //                 </View>
    //             </View>
    //
    //         </View>
    //     )
    // }
    const callPhone = (phone) => {
        Linking.openURL(`tel:${phone}`);
    };
    const onOpen = () => {
        const modal = modalRef.current;

        if (modal) {
            modal.open();
        }
    };
    const close = () => {
        const modal = modalRef.current;
        if (modal) {
            modal.close();
        }
    };
    useEffect(() => {
        getData().then(resData => {
            setData(resData);
        });

    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.backgroundList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.categories}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', marginBottom: 12}}>Xe Khách</Text>
                            <Text>Tat ca</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {data.map((car, index) => {
                                return (
                                    <View style={styles.card} key={index}>
                                        <View style={styles.cardImage}>
                                            <TouchableHighlight style={{width: '100%', height: '100%'}}
                                                                onPress={onOpen}>
                                                <Image
                                                    style={styles.image}
                                                    source={{uri: car.image}}
                                                />
                                            </TouchableHighlight>
                                        </View>
                                        <View style={[styles.infoCar, {flex: 1}]}>
                                            <View style={styles.cardHeader}>
                                                <View style={styles.cardTitle}>
                                                    <Text style={{fontWeight: 'bold'}}>{car.carOwner}</Text>
                                                    <Text style={{fontSize: 11}}>{car.price}</Text>
                                                </View>
                                                <Text style={styles.cardSubTitle}>{car.address}</Text>
                                            </View>
                                            <View style={{flex: 3.5, fontSize: 10}}>
                                                <View style={{
                                                    marginTop: 5,
                                                    marginBottom: 5,
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Text style={{fontSize: 13}}>Nga Sơn</Text>
                                                    <Text style={{fontSize: 13}}>Ha Nội</Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    margin: 5,
                                                }}>
                                                    <View>
                                                        <Text style={{fontSize: 11}}>{car.timeStart}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{fontSize: 11}}>{'------->'} </Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{fontSize: 11}}>{car.timeEnd}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    margin: 5,
                                                }}>
                                                    <View>
                                                        <Text style={{fontSize: 11}}>9h</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{fontSize: 11}}>{'<-------'}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{fontSize: 11}}>6h</Text>
                                                    </View>
                                                </View>


                                            </View>
                                            <View style={styles.phone}>
                                                <Feather name="phone-call" size={12} color="black"/>
                                                <Text style={{fontSize: 12}}
                                                      onPress={() => callPhone('0' + car.phoneNumber)}> {'0' + car.phoneNumber}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}

                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <Modalize
                ref={modalRef}
                adjustToContentHeight
                modalStyle={styles.modal}
                // modalHeight={350}
                handleStyle={styles.handle}
                handlePosition="inside"
                // openAnimationConfig={{
                //     timing: { duration: 400 },
                //     spring: { speed: 100, bounciness: 10 },
                // }}
                // closeAnimationConfig={{
                //     timing: { duration: 400 },
                //     spring: { speed: 100, bounciness: 10 },
                // }}
            >
                <CarDetail closeModal={close} data={data}/>
            </Modalize>
        </View>
    );
};

export default ListCar;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.home,
        elevation: 0,
    },
    card: {
        height: 150,
        width: 250,
        backgroundColor: colors.white,
        borderRadius: Constants.borderRadius,
        flexDirection: 'row',
        marginRight: 16,
    },
    cardHeader: {
        flex: 1.5,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardSubTitle: {
        fontSize: 11,
        color: colors.text_gray,
    },
    cardImage: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'stretch',
        borderRadius: 15,
    },
    infoCar: {
        width: '60%',
        height: '100%',
        padding: 5,
    },
    phone: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    backgroundList: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.bg_app,
        borderTopStartRadius: Constants.borderRadius,
        borderTopEndRadius: Constants.borderRadius,
        padding: Constants.pad,
        paddingTop: 0,
    },
    categories: {
        marginBottom: 35,
    },
    modal: {
        backgroundColor: '#cac9dd',
        shadowOpacity: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    handle: {
        width: 150,
        backgroundColor: '#b0afbc',
    },
});
