import * as Cesium from 'cesium';
import config from '@/config';
import 'cesium/Build/Cesium/Widgets/widgets.css';
export function createCesiumInstance(id) {
  let token = config.token;
  let viewer = new Cesium.Viewer(id, {
    showRenderLoopErrors: true,
    navigationHelpButton: false, //帮助按钮
    sceneModePicker: false,
    animation: false, //动画控制，默认true
    baseLayerPicker: false, //地图切换控件(底图以及地形图)是否显示,默认显示true
    fullscreenButton: false, //全屏按钮,默认显示true
    geocoder: false, //地名查找,默认true
    timeline: false, //时间线,默认true
    vrButton: false, //双屏模式,默认不显示false
    homeButton: false, //主页按钮，默认true
    infoBox: false, //点击要素之后显示的信息,默认true
    selectionIndicator: false, //选中元素显示,默认true
    sceneMode: Cesium.SceneMode.SCENE3D, //二三维切换，默认Cesium.SceneMode.SCENE3D,
    mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL,
    shouldAnimate: false,
    //关闭地球光环
    skyAtmosphere: new Cesium.SkyAtmosphere(),
    contextOptions: {
      webgl: {
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
      },
      allowTextureFilterAnisotropic: true,
    },
    creditContainer: undefined,
    creditViewport: undefined,

    //地形
    terrainProvider: new Cesium.CesiumTerrainProvider({
      url: 'https://tiles1.geovisearth.com/base/v1/terrain?token=' + token,
    }),
  });

  //创建影像图层
  let imageryProvider = new Cesium.UrlTemplateImageryProvider({
    url: 'https://tiles{s}.geovisearth.com/base/v1/img/{z}/{x}/{y}?format=webp&token=' + token,
    subdomains: '123',
  });

  //将图层添加到viewer中
  viewer.imageryLayers.addImageryProvider(imageryProvider, 0);

  //隐藏地面大气
  viewer.scene.globe.showGroundAtmosphere = false;
}
