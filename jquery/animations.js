$(document).ready(function($) {
      $('.menudiv1')
        .click(function(){  //use # for id and . for class
          $('#about').slideToggle();     // with parameters slow,fast, or a time in milisecond
          $('#projects').slideUp();
          $('#resume').slideUp();
          $('#contact').slideUp();
          $('html, body').animate({scrollTop: $('.menudiv1').offset().top}, 500);
        }); 
      $('.menudiv2')
        .click(function(){  //use # for id and . for class
          $('#about').slideUp();
          $('#projects').slideToggle();
          $('#resume').slideUp();
          $('#contact').slideUp();
          $('html, body').animate({scrollTop: $('.menudiv2').offset().top}, 500);
        }); 
      $('.menudiv3')
        .click(function(){  //use # for id and . for class
          $('#about').slideUp();
          $('#projects').slideUp();
           $('#resume').slideToggle();       
          $('#contact').slideUp();
          $('html, body').animate({scrollTop: $('.menudiv3').offset().top}, 500);
        }); 
      $('.menudiv4')
        .click(function(){  //use # for id and . for class
          $('#about').slideUp();
          $('#projects').slideUp();
           $('#resume').slideUp();        
          $('#contact').slideToggle();
          $('html, body').animate({scrollTop: $('.menudiv4').offset().top}, 500);
        }); 

	  $('.menutype1')
	    .typistPause(1, function(){
	      $('.menutype1')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'ABOUT | 關於 | ÜBER MICH | 私について',
		    cursor: false
	      })
	    });
	  $('.menutype2')
	    .typistPause(700, function(){
	      $('.menutype2')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'PROJECTS | 工程 | PROJEKTE | プロジェクト',
		    cursor: false
	      })
	    });
	  $('.menutype3')
	    .typistPause(1500, function(){
	      $('.menutype3')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'RÈSUMÈ | 履歴書 | CV | リレキショ',
		    cursor: false
	      })
	    });
	  $('.menutype4')
	    .typistPause(2200, function(){
	      $('.menutype4')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'CONTACT | 聯絡 | KONTAKT | セショク',
		    cursor: true
	      })
	    });
	});