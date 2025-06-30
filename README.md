# 🌻 Image Viewer

Image viewer an image-preview library. EASY TO USE

## 🪶 Screenshots
<div style="display: flex;flex-direction: column; grid-gap: 10px;">
     <div style="display: flex; grid-gap: 10px;">
        <img src="screenshots/1.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
        <img src="screenshots/2.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
    </div>
</div>
<div style="display: flex;flex-direction: column; grid-gap: 10px;">
     <div style="display: flex; grid-gap: 10px;">
        <img src="screenshots/3.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
        <img src="screenshots/4.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
    </div>
</div>

## 🐊 Usage
Just add the style and script to your page and your are ready to start!

### Basic 
Add data attribute `data-image-preview="true"` to make your container support to preview image
```html
<div data-image-preview="true">
    <img src="..." alt="Image">
    <img src="..." alt="Image">
    <img src="..." alt="Image">
    <img src="..." alt="Image">
    <img src="..." alt="Image">
</div>
```

### With title
You can also add title to your images. use `data-title=""` attribute for writing image title

```html
<div data-image-preview="true">
    <img src="..." data-title="My title here" alt="Image">
</div>
```

### Open Image Preview with External Buttons
You can open the image preview using external buttons by linking them with the image using either `data-click-source` (for a single button) or `data-click-sources` (for multiple buttons).

- Single Click Source (data-click-source)
Use an element ID selector to specify which button should open the image preview:

```html
<div data-image-preview="true">
    <img src="..." data-click-source="#myButtonSource" alt="Image">
</div>
<button id="myButtonSource">Open Image</button>
```

- Multiple Click Sources (data-click-sources)
Use a class selector to attach multiple buttons as triggers for the same image:
```html
<div data-image-preview="true">
    <img src="..." data-click-sources=".myButtonSource" alt="Image">
</div>

<button class="myButtonSource">Source 1</button>
<button class="myButtonSource">Source 2</button>
<button class="myButtonSource">Source 3</button>
```
 Both data-click-source and data-click-sources accept any valid CSS selector.

### Enable download button
You can enable the download functionality for specific images or all images by using the `data-image-downloadable` attribute.

- **Enable Download for Specific Images** - Only images explicitly marked with the `data-image-downloadable="true"` attribute will be downloadable.
```html
<div data-image-preview="true">
    <img src="..." alt="Image">
    <img src="..." alt="Image" data-image-downloadable="true">
    <img src="..." alt="Image">
</div>
```

- **Enable Download for All Images** - Set the `data-image-downloadable="true"` attribute on the parent container to make all child images downloadable.
```html
<div data-image-preview="true"  data-image-downloadable="true">
    <img src="..." alt="Image">
    <img src="..." alt="Image">
    <img src="..." alt="Image">
</div>
```

## 🪴 Upcommings...

- Enable escape button   ---------------------------- DONE
- Image scroll on Left-Right keys ------------------- DONE
- Extra button to open Preview ---------------------- DONE
- Download button ----------------------------------- DONE
- Image scroll using drag on small devices ----------

## 🍕 Conclution
This project is currently under development. We will add more customizations in the near future. 
<br><br>
<div align="center">🍊 COMMENT FOR FAST UPDATE</div>
<br><br>
