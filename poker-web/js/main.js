$(document).ready(function(){
  new Slider();
})


function Slider(){
  this.init();
}
Slider.prototype = {
  init: function(){
    this.container = $('.slider-container');
    this.slides = this.container.find('.slide');
    this.controls = $('.slider-wrapper').find('.dots').find('.dot');
    this.currentSlide = 1;
    self = this;
    $('.slider-wrapper').find('.left').click(function(e){
      self.slide(self.currentSlide - 1);
    });
    $('.slider-wrapper').find('.right').click(function(e){
      self.slide(self.currentSlide + 1);
    });
    this.controls.click(function(e){
      self.slide($(e.target).index());
    });
  },

  start: function(){
    this.slide(0);
  },

  slide: function(number){
    $(this.slides[this.currentSlide]).removeClass('active');
    $(this.controls[this.currentSlide]).removeClass('active');
    this.currentSlide = number;
    this.container.css('left', ((number - 1) * -315) + "px");
    $(this.slides[this.currentSlide]).addClass('active');
    $(this.controls[this.currentSlide]).addClass('active');
  }
}
