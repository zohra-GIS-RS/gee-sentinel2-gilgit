# 🛰️ Sentinel-2 Image Analysis of Gilgit

## 📌 Project Overview

This project demonstrates the acquisition, filtering, processing, and visualization of Sentinel-2 satellite imagery over Gilgit using Google Earth Engine (GEE).

The project focuses on creating a cloud-filtered median composite and visualizing the study area using true-color RGB imagery.

---

## 🎯 Objective

The main objective of this project is to develop a basic Google Earth Engine workflow for Sentinel-2 satellite image analysis.

The workflow includes:

- Loading the Gilgit Area of Interest (AOI)
- Accessing Sentinel-2 Surface Reflectance imagery
- Filtering imagery by location
- Filtering imagery by date
- Removing images with high cloud cover
- Creating a median composite
- Visualizing the imagery using RGB bands

---

## 🛰️ Data Source

### Sentinel-2

**Dataset:** Sentinel-2 Surface Reflectance Harmonized

**Google Earth Engine Collection:**
`COPERNICUS/S2_SR_HARMONIZED`

**Study Area:** Gilgit, Gilgit-Baltistan, Pakistan

**Analysis Period:** April 1 – July 31, 2024

**Cloud Cover:** Less than 20%

---

## 🔬 Methodology

The workflow follows these steps:

```text
Gilgit AOI
    ↓
Sentinel-2 Image Collection
    ↓
Spatial Filtering
    ↓
Date Filtering
    ↓
Cloud Filtering (<20%)
    ↓
Median Composite
    ↓
AOI Clipping
    ↓
RGB Visualization
