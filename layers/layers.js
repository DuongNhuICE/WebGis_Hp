var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CMB_PhaoBaoHieuTau_2 = new ol.format.GeoJSON();
var features_CMB_PhaoBaoHieuTau_2 = format_CMB_PhaoBaoHieuTau_2.readFeatures(json_CMB_PhaoBaoHieuTau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMB_PhaoBaoHieuTau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMB_PhaoBaoHieuTau_2.addFeatures(features_CMB_PhaoBaoHieuTau_2);
var lyr_CMB_PhaoBaoHieuTau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMB_PhaoBaoHieuTau_2,
maxResolution:14.00223307613098,
 minResolution:1.4002233076130983,

                style: style_CMB_PhaoBaoHieuTau_2,
                interactive: true,
    title: 'CMB_PhaoBaoHieuTau<br />\
    <img src="styles/legend/CMB_PhaoBaoHieuTau_2_0.png" /> Phao Đỏ<br />\
    <img src="styles/legend/CMB_PhaoBaoHieuTau_2_1.png" /> Phao Trắng<br />\
    <img src="styles/legend/CMB_PhaoBaoHieuTau_2_2.png" /> Phao Vàng<br />\
    <img src="styles/legend/CMB_PhaoBaoHieuTau_2_3.png" /> Phao Xanh<br />\
    <img src="styles/legend/CMB_PhaoBaoHieuTau_2_4.png" /> <br />'
        });
var format_CMB_CangHaiPhong_DuongThuy_3 = new ol.format.GeoJSON();
var features_CMB_CangHaiPhong_DuongThuy_3 = format_CMB_CangHaiPhong_DuongThuy_3.readFeatures(json_CMB_CangHaiPhong_DuongThuy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMB_CangHaiPhong_DuongThuy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMB_CangHaiPhong_DuongThuy_3.addFeatures(features_CMB_CangHaiPhong_DuongThuy_3);
var lyr_CMB_CangHaiPhong_DuongThuy_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMB_CangHaiPhong_DuongThuy_3,
maxResolution:140.0223307613098,
 minResolution:1.4002233076130983,

                style: style_CMB_CangHaiPhong_DuongThuy_3,
                interactive: true,
                title: '<img src="styles/legend/CMB_CangHaiPhong_DuongThuy_3.png" /> CMB_CangHaiPhong_DuongThuy'
            });
var format_CMB_VungNuocCangBienHaiPhong_4 = new ol.format.GeoJSON();
var features_CMB_VungNuocCangBienHaiPhong_4 = format_CMB_VungNuocCangBienHaiPhong_4.readFeatures(json_CMB_VungNuocCangBienHaiPhong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMB_VungNuocCangBienHaiPhong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMB_VungNuocCangBienHaiPhong_4.addFeatures(features_CMB_VungNuocCangBienHaiPhong_4);
var lyr_CMB_VungNuocCangBienHaiPhong_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMB_VungNuocCangBienHaiPhong_4, 
                style: style_CMB_VungNuocCangBienHaiPhong_4,
                interactive: true,
                title: '<img src="styles/legend/CMB_VungNuocCangBienHaiPhong_4.png" /> CMB_VungNuocCangBienHaiPhong'
            });
var format_CMB_VungNeoVaVungDonTraHoaTieu_5 = new ol.format.GeoJSON();
var features_CMB_VungNeoVaVungDonTraHoaTieu_5 = format_CMB_VungNeoVaVungDonTraHoaTieu_5.readFeatures(json_CMB_VungNeoVaVungDonTraHoaTieu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMB_VungNeoVaVungDonTraHoaTieu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMB_VungNeoVaVungDonTraHoaTieu_5.addFeatures(features_CMB_VungNeoVaVungDonTraHoaTieu_5);
var lyr_CMB_VungNeoVaVungDonTraHoaTieu_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMB_VungNeoVaVungDonTraHoaTieu_5, 
                style: style_CMB_VungNeoVaVungDonTraHoaTieu_5,
                interactive: true,
                title: '<img src="styles/legend/CMB_VungNeoVaVungDonTraHoaTieu_5.png" /> CMB_VungNeoVaVungDonTraHoaTieu'
            });
var format_CMB_CangHaiPhong_TenBenCang_6 = new ol.format.GeoJSON();
var features_CMB_CangHaiPhong_TenBenCang_6 = format_CMB_CangHaiPhong_TenBenCang_6.readFeatures(json_CMB_CangHaiPhong_TenBenCang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMB_CangHaiPhong_TenBenCang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMB_CangHaiPhong_TenBenCang_6.addFeatures(features_CMB_CangHaiPhong_TenBenCang_6);
var lyr_CMB_CangHaiPhong_TenBenCang_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMB_CangHaiPhong_TenBenCang_6, 
                style: style_CMB_CangHaiPhong_TenBenCang_6,
                interactive: true,
                title: '<img src="styles/legend/CMB_CangHaiPhong_TenBenCang_6.png" /> CMB_CangHaiPhong_TenBenCang'
            });
var format_CMB_CangHaiPhong_BenCang_7 = new ol.format.GeoJSON();
var features_CMB_CangHaiPhong_BenCang_7 = format_CMB_CangHaiPhong_BenCang_7.readFeatures(json_CMB_CangHaiPhong_BenCang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMB_CangHaiPhong_BenCang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMB_CangHaiPhong_BenCang_7.addFeatures(features_CMB_CangHaiPhong_BenCang_7);
var lyr_CMB_CangHaiPhong_BenCang_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMB_CangHaiPhong_BenCang_7, 
                style: style_CMB_CangHaiPhong_BenCang_7,
                interactive: true,
    title: 'CMB_CangHaiPhong_BenCang<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_0.png" /> Đất phát triển đô thị<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_1.png" /> Đê chắn sóng Nam Đồ Sơn<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_2.png" /> Hiện trạng<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_3.png" /> Hiện trạng, di dời 2025<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_4.png" /> Hiện trạng, di dời 2030<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_5.png" /> Khu công nghiệp<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_6.png" /> Quy hoạch 2025<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_7.png" /> Quy hoạch 2030<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_8.png" /> Quy hoạch sau 2030<br />\
    <img src="styles/legend/CMB_CangHaiPhong_BenCang_7_9.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_CMB_PhaoBaoHieuTau_2.setVisible(true);lyr_CMB_CangHaiPhong_DuongThuy_3.setVisible(true);lyr_CMB_VungNuocCangBienHaiPhong_4.setVisible(true);lyr_CMB_VungNeoVaVungDonTraHoaTieu_5.setVisible(true);lyr_CMB_CangHaiPhong_TenBenCang_6.setVisible(true);lyr_CMB_CangHaiPhong_BenCang_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_CMB_PhaoBaoHieuTau_2,lyr_CMB_CangHaiPhong_DuongThuy_3,lyr_CMB_VungNuocCangBienHaiPhong_4,lyr_CMB_VungNeoVaVungDonTraHoaTieu_5,lyr_CMB_CangHaiPhong_TenBenCang_6,lyr_CMB_CangHaiPhong_BenCang_7];
lyr_CMB_PhaoBaoHieuTau_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ten': 'Tên Phao', 'phanLoai': 'Phân loại', 'style': 'Màu sắc', });
lyr_CMB_CangHaiPhong_DuongThuy_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gid': 'gid', 'phanloai': 'Phân loại', 'thongtin': 'Thông tin', 'style': 'Vị trí', 'ten_loai_d': 'ten_loai_d', 'chu_giai': 'chu_giai', 'Shape_Length': 'Shape_Length', });
lyr_CMB_VungNuocCangBienHaiPhong_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ThongTin': 'Thông tin', 'Shape_Length': 'Chiều dài (m)', 'Shape_Area': 'Diện tích (m2)', });
lyr_CMB_VungNeoVaVungDonTraHoaTieu_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'phanloai': 'Phân loại', 'thongtin': 'Thông tin', 'style': 'style', 'Shape_Length': 'Shape_Length', });
lyr_CMB_CangHaiPhong_TenBenCang_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gid': 'gid', 'refname': 'refname', 'text': 'Tên bến cảng', 'ten_loai_d': 'ten_loai_d', 'chu_giai': 'chu_giai', });
lyr_CMB_CangHaiPhong_BenCang_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gid': 'gid', 'style': 'style', 'phanloai': 'Phân loại', 'stt': 'stt', 'ten': 'Tên công trình', 'dvikhaitha': 'Đơn vị khai thác', 'vtribencan': 'Vị trí bến cảng', 'congnangkt': 'Công năng khai thác', 'slcaucang': 'Số lượng cầu cảng', 'chieudai': 'Chiều dài', 'cotautn': 'Cỡ tàu tiếp nhận', 'nlucthongq': 'Năng lực thông qua', 's_chiemdat': 'Diện tích chiếm đất', 'coquanqlnn': 'Cơ quan QLNN', 'qd_congbo': 'Quyết định công bố', 'khuben': 'Khu bến', 'ten_loai_d': 'ten_loai_d', 'chu_giai': 'Chú giải', 'Shape_Length': 'Chiều dài (m)', 'Shape_Area': 'Diện tích (m2)', 'toaDoVungDat': 'Tọa độ vùng đất', 'toaDoVungNuoc': 'Tọa độ vùng nước', });
lyr_CMB_PhaoBaoHieuTau_2.set('fieldImages', {'OBJECTID': 'Hidden', 'ten': 'TextEdit', 'phanLoai': 'TextEdit', 'style': 'TextEdit', });
lyr_CMB_CangHaiPhong_DuongThuy_3.set('fieldImages', {'OBJECTID': 'Hidden', 'gid': 'Hidden', 'phanloai': 'TextEdit', 'thongtin': 'TextEdit', 'style': 'TextEdit', 'ten_loai_d': 'Hidden', 'chu_giai': 'Hidden', 'Shape_Length': 'Hidden', });
lyr_CMB_VungNuocCangBienHaiPhong_4.set('fieldImages', {'OBJECTID': 'Hidden', 'ThongTin': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CMB_VungNeoVaVungDonTraHoaTieu_5.set('fieldImages', {'OBJECTID': 'Hidden', 'phanloai': 'TextEdit', 'thongtin': 'TextEdit', 'style': 'Hidden', 'Shape_Length': 'Hidden', });
lyr_CMB_CangHaiPhong_TenBenCang_6.set('fieldImages', {'OBJECTID': 'Hidden', 'gid': 'Hidden', 'refname': 'Hidden', 'text': 'TextEdit', 'ten_loai_d': 'Hidden', 'chu_giai': 'Hidden', });
lyr_CMB_CangHaiPhong_BenCang_7.set('fieldImages', {'OBJECTID': 'Hidden', 'gid': 'Hidden', 'style': 'Hidden', 'phanloai': 'TextEdit', 'stt': 'Hidden', 'ten': 'TextEdit', 'dvikhaitha': 'TextEdit', 'vtribencan': 'TextEdit', 'congnangkt': 'TextEdit', 'slcaucang': 'TextEdit', 'chieudai': 'TextEdit', 'cotautn': 'TextEdit', 'nlucthongq': 'TextEdit', 's_chiemdat': 'TextEdit', 'coquanqlnn': 'TextEdit', 'qd_congbo': 'TextEdit', 'khuben': 'TextEdit', 'ten_loai_d': 'Hidden', 'chu_giai': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'toaDoVungDat': 'TextEdit', 'toaDoVungNuoc': 'TextEdit', });
lyr_CMB_PhaoBaoHieuTau_2.set('fieldLabels', {'ten': 'inline label', 'phanLoai': 'inline label', 'style': 'inline label', });
lyr_CMB_CangHaiPhong_DuongThuy_3.set('fieldLabels', {'phanloai': 'inline label', 'thongtin': 'inline label', 'style': 'inline label', });
lyr_CMB_VungNuocCangBienHaiPhong_4.set('fieldLabels', {'ThongTin': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', });
lyr_CMB_VungNeoVaVungDonTraHoaTieu_5.set('fieldLabels', {'phanloai': 'inline label', 'thongtin': 'inline label', });
lyr_CMB_CangHaiPhong_TenBenCang_6.set('fieldLabels', {'text': 'inline label', });
lyr_CMB_CangHaiPhong_BenCang_7.set('fieldLabels', {'phanloai': 'inline label', 'ten': 'inline label', 'dvikhaitha': 'inline label', 'vtribencan': 'inline label', 'congnangkt': 'inline label', 'slcaucang': 'inline label', 'chieudai': 'inline label', 'cotautn': 'inline label', 'nlucthongq': 'inline label', 's_chiemdat': 'inline label', 'coquanqlnn': 'inline label', 'qd_congbo': 'inline label', 'khuben': 'inline label', 'chu_giai': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', 'toaDoVungDat': 'inline label', 'toaDoVungNuoc': 'inline label', });
lyr_CMB_CangHaiPhong_BenCang_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});