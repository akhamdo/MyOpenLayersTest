 /*
....................................................................
					ca.canadapost.LocationAnalysis
							February 2015
			This is a test for the  LocationAnalysis  PORTAL
					Project begins: February 05  2015
  ..................................................................
*/  
 //alert("HEEE");
      var layer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        noWrap: true,
        wrapX: false
      });
      var Ottawa = ol.proj.transform(
        [-75.5512755, 45.4507222],
        'EPSG:4326',
        'EPSG:3857'
      );
      var montreal = ol.proj.transform(
        [-73.56509, 45.6139],
        'EPSG:4326',
        'EPSG:3857'
      );
      var view = new ol.View({
        center: montreal,
        zoom: 12
      });
      var map = new ol.Map({
        renderer: 'canvas',
        target: 'map',
        layers: [layer],
        view: view
      });

      function moveTo(location) {
        map.getView().setCenter(location);
      }

      var checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', function() {
  var checked = this.checked;
  if (checked !== layer.getVisible()) {
    layer.setVisible(checked);
  }
});

layer.on('change:visible', function() {
  var visible = this.getVisible();
  if (visible !== checkbox.checked) {
    checkbox.checked = visible;
  }
});
 