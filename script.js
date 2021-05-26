function Gallery(galleryDOM) {
    this.init = function() {
        this.imageswrapper = galleryDOM.querySelector(".images");
        this.images = this.imageswrapper.querySelectorAll("img");
        if(this.images.length < 1) {
            throw new Exception("Gallery must have at least one image.");    
        }
        this.images[0].classList.add("active");
        this.activeImage = this.images[0];
        
        this.buttonswrapper = galleryDOM.querySelector(".buttons");
        for(let i = 0; i < this.images.length; i++) {
            this.buttonswrapper.insertAdjacentHTML("beforeend", "<div class='button'></div>");
        }

        this.buttons = this.buttonswrapper.querySelectorAll(".button");
        this.buttons[0].classList.add("active");
        this.activeButton = this.buttons[0];

        this.buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.setActiveImage(index);
            });
        });

        setInterval(() => {
            this.nextImage();
        }, 5000);
    }
    this.nextImage = function() {
        let nextImage = this.activeImage.nextElementSibling;
        if(nextImage == null) {
            nextImage = this.images[0];
        }

        this.activeImage.classList.remove("active");
        nextImage.classList.add("active");
        this.activeImage = nextImage;

        let nextButton = this.activeButton.nextElementSibling;
        if(nextButton == null) {
            nextButton = this.buttons[0];
        }

        this.activeButton.classList.remove("active");
        nextButton.classList.add("active");
        this.activeButton = nextButton;
    }
    this.setActiveImage = function(index) {
        let nextImage = this.images[index];
        this.activeImage.classList.remove("active");
        nextImage.classList.add("active");
        this.activeImage = nextImage;

        let nextButton = this.buttons[index];
        this.activeButton.classList.remove("active");
        nextButton.classList.add("active");
        this.activeButton = nextButton;
    }
}

const galleryDOMList = document.querySelectorAll(".gallery");
const galleryObjList = [];

galleryDOMList.forEach((galleryDOM) => {
    let galleryObj = new Gallery(galleryDOM);
    galleryObj.init();
    galleryObjList.push(galleryObj);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});