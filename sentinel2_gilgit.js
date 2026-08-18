// ==========================================
// PROJECT 01
// Sentinel-2 Image Analysis of Gilgit
// Google Earth Engine
// ==========================================

// 1. Load Gilgit AOI
var aoi = ee.FeatureCollection(
  'projects/ee-gudia112211/assets/gilgit'
);

// 2. Display AOI
Map.centerObject(aoi, 10);

Map.addLayer(
  aoi,
  {},
  'Gilgit AOI'
);

// 3. Load Sentinel-2
var s2 = ee.ImageCollection(
  'COPERNICUS/S2_SR_HARMONIZED'
);

// 4. Filter Sentinel-2 imagery
var filtered = s2
  .filterBounds(aoi)
  .filterDate(
    '2024-04-01',
    '2024-07-31'
  )
  .filter(
    ee.Filter.lt(
      'CLOUDY_PIXEL_PERCENTAGE',
      20
    )
  );

// 5. Print number of images
print(
  'Number of images:',
  filtered.size()
);

// 6. Create median composite
var composite = filtered.median();

// 7. RGB visualization
var rgb = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000
};

// 8. Display Sentinel-2 image
Map.addLayer(
  composite.clip(aoi),
  rgb,
  'Sentinel-2 RGB'
);

// 9. Print composite
print(
  'Sentinel-2 Composite:',
  composite
);
