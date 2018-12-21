// “适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作”

var googleMap = {
  show: function(){
      console.log( '开始渲染谷歌地图' );
  }
};

var baiduMap = {
  display: function(){
      console.log( '开始渲染百度地图' );
  }
};

var baiduMapAdapter = {
  show: function(){
      return baiduMap.display();
  }
};

  renderMap( googleMap );        // 输出：开始渲染谷歌地图
  renderMap( baiduMapAdapter );    // 输出：开始渲染百度地图”