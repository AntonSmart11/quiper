//SLIDER
(function(){

    var propSlider = {

        slider: document.getElementById('slider'),
        slider2: document.getElementById('slider2'),
        primerSlide: null,
        primerSlide2: null
    
    }
    
    var metSlider = {
    
        inicio: function() {
            setInterval(metSlider.moverSlide, 3000);
        },
    
        moverSlide: function() {
            propSlider.slider.style.transition = 'all 1s ease';
            propSlider.slider.style.marginLeft = '-100%';
            propSlider.slider2.style.transition = 'all 1s ease';
            propSlider.slider2.style.marginLeft = '-100%';
    
            setTimeout(function() {
                propSlider.primerSlide = propSlider.slider.firstElementChild;
                propSlider.slider.appendChild(propSlider.primerSlide);
                propSlider.slider.style.transition = 'unset';
                propSlider.slider.style.marginLeft = '0';
    
                propSlider.primerSlide2 = propSlider.slider2.firstElementChild;
                propSlider.slider2.appendChild(propSlider.primerSlide2);
                propSlider.slider2.style.transition = 'unset';
                propSlider.slider2.style.marginLeft = '0';
            }, 2000)
        }
    }
    
    metSlider.inicio();

}())

