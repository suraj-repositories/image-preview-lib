# 🌻 Image & Video Viewer  

A lightweight, flexible media preview library — supports **images and videos**.  
  **Easy to use**, minimal setup, and mobile friendly.

---

## 🪶 Screenshots
<div style="display: flex;flex-direction: column; gap: 10px;">
  <div style="display: flex; gap: 10px;">
    <img src="screenshots/1.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
    <img src="screenshots/2.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
  </div>
</div>
<div style="display: flex;flex-direction: column; gap: 10px;">
  <div style="display: flex; gap: 10px;">
    <img src="screenshots/3.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
    <img src="screenshots/4.png" alt="screenshots" width="49%" style="border: 2px solid lightgreen"/>
  </div>
</div>

---

## 🐊 Usage  

Just include the stylesheet and script, and you’re ready to start!

---

###  Basic Image Preview  

Add the `data-media-preview="true"` attribute to any container to enable preview support.  

```html
<div data-media-preview="true">
  <img src="..." alt="Image">
  <img src="..." alt="Image">
  <img src="..." alt="Image">
</div>
```

---

###  Video Preview Support  

You can now preview **videos** by using `data-video-url` on a container element such as a <div>.

```html
<div data-media-preview="true">
  <img src="..." alt="Image">
  <div data-video-url="path/to/video.mp4" data-title="Sample Video"></div>
  <img src="..." alt="Image">
</div>
```

>  The viewer automatically handles both images (`<img>`) and elements with `data-media-url` or `data-video-url`.

---

###  With Title  

Add `data-title=""` to include a caption or title.

```html
<div data-media-preview="true">
  <img src="..." data-title="My title here" alt="Image">
</div>
```

---

###  Open Preview with External Buttons  

You can open previews using external buttons linked via attributes.

#### 🔹 Single Click Source (`data-click-source`)
```html
<div data-media-preview="true">
  <img src="..." data-click-source="#myButtonSource" alt="Image">
</div>

<button id="myButtonSource">Open Image</button>
```

#### 🔹 Multiple Click Sources (`data-click-sources`)
```html
<div data-media-preview="true">
  <img src="..." data-click-sources=".myButtonSource" alt="Image">
</div>

<button class="myButtonSource">Source 1</button>
<button class="myButtonSource">Source 2</button>
<button class="myButtonSource">Source 3</button>
```
Both attributes accept **any valid CSS selector**.

---

###  Enable Download Button  

You can allow downloading of specific or all images easily.

#### For Specific Images
```html
<div data-media-preview="true">
  <img src="..." alt="Image">
  <img src="..." alt="Image" data-media-downloadable="true">
</div>
```

#### For All Images
```html
<div data-media-preview="true" data-media-downloadable="true">
  <img src="..." alt="Image">
  <img src="..." alt="Image">
</div>
```

---

### 🎹 Keyboard Controls  

Once a preview is open:

- **← / →** → Navigate previous/next media  
- **Spacebar** → Play/Pause video (if video is active)  
- **ESC** → Close preview  
- Videos automatically **pause when the modal closes**

---

## 🪴 Upcoming Features  

-  Image scrolling via drag on mobile (in progress)  
-  Zoom & pinch gesture support  
-  Lazy loading for large galleries  
-  Dark/light theme toggle  

---

## Conclusion  

This project is under active development — more features and customizations coming soon!  

<br>
<div align="center">🍊 **COMMENT FOR FAST UPDATES** 🍊</div>
<br>