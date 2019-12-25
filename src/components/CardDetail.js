import React from 'react';
import {View, Text, Button, Linking} from "react-native";
import {colors, Constants} from "../configs/theme";

const CarDetail = ({navigation, closeModal, data}) => {
    const callPhone = (phone) => {
        Linking.openURL(`tel:${phone}`)
    }
    return (
        <View style={{flex:1, backgroundColor: colors.white, padding: Constants.pad}}>
            <View>
                <Text style={{fontWeight: 'bold'}}>
                    Thông tin chi tiết
                </Text>
            </View>
            <Text>Tên nhà xe: {data.carOwner}</Text>
            <Text>Địa chỉ: {data.address}</Text>
            <Text>SĐT liên hệ: {data.phone}</Text>
            <Text>Loại xe: Xe ghế ngồii 24 chỗ</Text>

            <Text>Xe xuất phát lúc: {data.timeStart}</Text>
            <Text>Thời gian dự kiến: {data.timeEnd}</Text>
            <Text>Giá vé: {data.price} VND</Text>
            <Text>Lộ trình di chuyển: Nga bach - Cau kenh - Nga Truong - Bim Son - Cao toc - Giap Bat - Truong Chinh - Lang - Tran Quoc Hoan - Nghia Trang Mai Dich - Nha van Hoa Bac tu Liem</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Button title={'Đóng'} onPress={closeModal} style={{backgroundColor: colors.disable, marginRight:12}}/>
                <Button title={'Gọi ngay'} onPress={() => callPhone('0901764393')} style={{backgroundColor: colors.access}}/>
            </View>
        </View>
    );
};

export default CarDetail;
