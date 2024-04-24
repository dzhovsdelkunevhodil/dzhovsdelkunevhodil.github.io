let starts = 0;

new Vue({ 
    el: '#app', 
    data: { 
        urls: [], 
        showSlideshow: false, 
        showAboutSection: false, 
        showContactSection: false, 
        showSuggestionsSection: false, 
        slideshowInterval: null, 
        currentImageIndex: 0, 
        showAlert: false, 
        isSlideshowStarted: false, 
        allowTabSwitch: false, 
        firstName: '', 
        lastName: '', 
        middleName: '', 
        birthYear: '', 
        movieSuggestion: '', 
        comments: '',
    }, 
    created: function () { 
        for (let i = 1; i != 194; i++) { 
            this.urls.push("img/и" + i + ".jpg"); 
        } 
    }, 
    methods: { 
        submitForm: function() { 
          alert('Форма отправлена!'); 
        }, 
        openUrl: function (url) { 
            window.open(url, "_blank"); 
        }, 
        startSlideshow: function () { 
     
            this.isSlideshowStarted = true; 
            this.showSlideshow = true; 
            document.getElementById("button_id").hidden = true; 
            if(starts == 0){
                starts++;
                new Audio("music/background_Music.mp3").play(); }
            this.changeImage(); 
        }, 
        changeImage: function () { 
            let images = document.getElementsByTagName("img"); 
            for (var i = 0; i < images.length; i++) { 
                images[i].style.display = "none"; 
            } 
            images[this.currentImageIndex].style.display = "block"; 
            this.currentImageIndex = (this.currentImageIndex + 1) % images.length; 
            this.slideshowInterval = setTimeout(this.changeImage, 300); 
        },
        toggleSlideshow: function () {
            
            if(!this.showSlideshow) return;
            if (this.isSlideshowStarted) {
                clearTimeout(this.slideshowInterval);
                this.isSlideshowStarted = false;
            } else {
                this.startSlideshow();
            }
        },
        stopSlideshow: function () {
            clearTimeout(this.slideshowInterval);
            this.isSlideshowStarted = false;
        },
        prevImage: function () {    
            if(!this.showSlideshow) return;

            this.stopSlideshow();
            this.currentImageIndex = (this.currentImageIndex - 1 + this.urls.length) % this.urls.length;
        },
        nextImage: function () {
            if(!this.showSlideshow) return;

            this.stopSlideshow();
            this.currentImageIndex = (this.currentImageIndex + 1) % this.urls.length;
        },
        showImages: function () { 
            if (!this.isSlideshowStarted) { 
                return; 
            } 
            this.showAboutSection = false; 
            this.showContactSection = false; 
            this.showSuggestionsSection = false; 
            this.showSlideshow = true; 
           // this.changeImage(); 
        }, 
        showAbout: function () { 
     
            this.showSlideshow = false; 
            this.showContactSection = false; 
            this.showSuggestionsSection = false; 
            this.showAboutSection = true; 
            clearTimeout(this.slideshowInterval); 
        }, 
        showSuggestions: function () { 


          this.showSlideshow = false; 
          this.showContactSection = false; 
          this.showAboutSection = false; 
          this.showSuggestionsSection = true; 
          clearTimeout(this.slideshowInterval); 

        }, 
             
        showContact: function () { 

            this.showSlideshow = false; 
            this.showAboutSection = false; 
            this.showSuggestionsSection = false; 
            this.showContactSection = true; 
            clearTimeout(this.slideshowInterval); 

        } 
    } 
  });
  