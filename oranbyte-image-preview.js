document.addEventListener('DOMContentLoaded', function(){
    new ImageViewer().init();
});

class ImageViewer {
    constructor() {
        this.IMAGE_CONTAINER_SELECTOR = '[data-image-preview="true"]';
        this.IMAGE_MODAL_SELECTOR = '.preview-modal';

        this.currentImageIndex = 0;
        this.currentImageList = [];
    }

    init() {

        this.enablePreview();
        this.setActionListerToAllImages();
    }

    enablePreview(){
        const modal = document.querySelector('.oranbyte-img-preview');
        if(!modal){
            this.createPreviewModal();
        }
    }

    setActionListerToAllImages() {
        const previewModal = document.querySelector(this.IMAGE_MODAL_SELECTOR);
        const previewImage = previewModal.querySelector("img");
        const imageTitle = previewModal.querySelector(".image-title");
        const closeBtn = previewModal.querySelector('.close-btn');
        const leftBtn = previewModal.querySelector('.left-btn');
        const rightBtn = previewModal.querySelector('.right-btn');

        document.querySelectorAll(this.IMAGE_CONTAINER_SELECTOR).forEach(container => {
            const imageList = Array.from(container.querySelectorAll('img'));

            imageList.forEach((image, index) => {
                image.addEventListener('click', (event) => {
                    this.currentImageList = imageList;
                    this.currentImageIndex = index;

                    this.updateModalContent(previewImage, imageTitle, image);
                    this.updateNavigationButtons(leftBtn, rightBtn);
                    this.show(previewModal);
                });
            });
        });

        closeBtn.addEventListener('click', () => {
            this.hide(previewModal);
        });

        leftBtn.addEventListener('click', () => {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
                const image = this.currentImageList[this.currentImageIndex];
                this.updateModalContent(previewImage, imageTitle, image);
                this.updateNavigationButtons(leftBtn, rightBtn);
            }
        });

        rightBtn.addEventListener('click', () => {
            if (this.currentImageIndex < this.currentImageList.length - 1) {
                this.currentImageIndex++;
                const image = this.currentImageList[this.currentImageIndex];
                this.updateModalContent(previewImage, imageTitle, image);
                this.updateNavigationButtons(leftBtn, rightBtn);
            }
        });

        window.onclick = (event) => {
            if (event.target == previewModal) {
                this.hide(previewModal);
            }
        };
    }

    updateModalContent(previewImage, imageTitle, image) {
        previewImage.src = image.src;
        const title = image.getAttribute('data-title');
        if (title) {
            imageTitle.textContent = title;
            imageTitle.classList.remove('hide');
        } else {
            imageTitle.classList.add('hide');
        }
    }

    updateNavigationButtons(leftBtn, rightBtn) {
        if (this.currentImageIndex === 0) {
            leftBtn.classList.add('disabled');
        } else {
            leftBtn.classList.remove('disabled');
        }
        
        if (this.currentImageIndex === this.currentImageList.length - 1) {
            rightBtn.classList.add('disabled');
        } else {
            rightBtn.classList.remove('disabled');
        }
    }

    hide(container) {
        container.classList.add('zoom-out');
        container.classList.remove('zoom-in');
    
        container.addEventListener('animationend', () => {
            container.classList.add('hide');
        }, { once: true });
    }
    
    show(container) {
        container.classList.remove('hide');
        container.classList.remove('zoom-out');
        container.classList.add('zoom-in');
    }
    
    createPreviewModal(){
        const previewModal = document.createElement('div');
        previewModal.className = 'oranbyte-img-preview preview-modal full-screen-container hide blackish';

        const imageWithTitle = document.createElement('div');
        imageWithTitle.className = 'image-with-title';

        const imageBox = document.createElement('div');
        imageBox.className = 'image-box';

        const img = document.createElement('img');
        img.src = '';
        img.alt = 'Preview-image';
        imageBox.appendChild(img);

        const imageTitle = document.createElement('div');
        imageTitle.className = 'image-title';

        imageWithTitle.appendChild(imageBox);
        imageWithTitle.appendChild(imageTitle);

        const actionButtons = document.createElement('div');
        actionButtons.className = 'action-buttons';

        const leftBtn = document.createElement('div');
        leftBtn.className = 'lib-btn left-btn';
        leftBtn.innerHTML = '&leftarrow;';

        const rightBtn = document.createElement('div');
        rightBtn.className = 'lib-btn right-btn';
        rightBtn.innerHTML = '&rightarrow;';

        const closeBtn = document.createElement('div');
        closeBtn.className = 'lib-btn close-btn';
        closeBtn.id = 'close-btn';
        closeBtn.innerHTML = '&times;';

        actionButtons.appendChild(leftBtn);
        actionButtons.appendChild(rightBtn);
        actionButtons.appendChild(closeBtn);

        previewModal.appendChild(imageWithTitle);
        previewModal.appendChild(actionButtons);

        document.body.appendChild(previewModal);

    }

}
