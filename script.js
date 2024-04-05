jQuery(document).ready(function($) {
    "use strict";
    $('#customers-NativeCarousal').owlCarousel( {
            loop: true,
            center: true,
            items: 1,
            
            autoplay: true,
            dots:true,
             nav:true,
            autoplayTimeout: 1500,
            
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                470: {
                    items: 2
                },
                768:{
                    items:2
                },
                1170: {
                    items: 5
                }
            }
        });
                    //   section3

        $('.projectfig').on('mouseover',function(){
            $('.projectcaption').css({'display':'block'})
            $('.projectimg1').css({'opacity': '0.5'})
        })  
        $('.projectfig').on('mouseleave',function(){
            $('.projectcaption').css({'display':'none'})
            $('.projectimg1').css({'opacity':'1'})
        })

        $('.projectfig2').on('mouseover',function(){
            $('.projectcaption2').css({'display':'block'})
            $('.projectimg2').css({'opacity': '0.5'})
        })  
        $('.projectfig2').on('mouseleave',function(){
            $('.projectcaption2').css({'display':'none'})
            $('.projectimg2').css({'opacity':'1'})
        })

        $('.projectfig3').on('mouseover',function(){
            $('.projectcaption3').css({'display':'block'})
            $('.projectimg3').css({'opacity': '0.5'})
        })  
        $('.projectfig3').on('mouseleave',function(){
            $('.projectcaption3').css({'display':'none'})
            $('.projectimg3').css({'opacity':'1'})
        })

        $('.projectfig4').on('mouseover',function(){
            $('.projectcaption4').css({'display':'block'})
            $('.projectimg4').css({'opacity': '0.5'})
        })  
        $('.projectfig4').on('mouseleave',function(){
            $('.projectcaption4').css({'display':'none'})
            $('.projectimg4').css({'opacity':'1'})
        })

        $('.projectfig5').on('mouseover',function(){
            $('.projectcaption5').css({'display':'block'})
            $('.projectimg5').css({'opacity': '0.5'})
        })  
        $('.projectfig5').on('mouseleave',function(){
            $('.projectcaption5').css({'display':'none'})
            $('.projectimg5').css({'opacity':'1'})
        })

        $('.projectfig6').on('mouseover',function(){
            $('.projectcaption6').css({'display':'block'})
            $('.projectimg6').css({'opacity': '0.5'})
        })  
        $('.projectfig6').on('mouseleave',function(){
            $('.projectcaption6').css({'display':'none'})
            $('.projectimg6').css({'opacity':'1'})
        })



        

        

        

        

       
        

       

      
    });