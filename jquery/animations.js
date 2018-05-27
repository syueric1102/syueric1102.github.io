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
          $('#projects').slideToggle();
          $('#about').slideUp();
          $('#resume').slideUp();
          $('#contact').slideUp();
          $('html, body').animate({scrollTop: $('.menudiv2').offset().top}, 500);
        }); 
      $('.menudiv3')
        .click(function(){  //use # for id and . for class
          $('#resume').slideToggle();
          $('#about').slideUp();
          $('#projects').slideUp();       
          $('#contact').slideUp();
          $('html, body').animate({scrollTop: $('.menudiv3').offset().top}, 500);
        }); 
      $('.menudiv4')
        .click(function(){  //use # for id and . for class
          $('#contact').slideToggle();
          $('#about').slideUp();
          $('#projects').slideUp();
          $('#resume').slideUp();        
          $('html, body').animate({scrollTop: $('.menudiv4').offset().top}, 500);
        }); 

	  $('.menutype1')
	    .typistPause(1, function(){
	      $('.menutype1')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'ABOUT' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '關於' + '\xa0\xa0\xa0\xa0\xa0\xa0' + 'ÜBER MICH' + '\xa0\xa0' + '私について',
		    cursor: false
	      })
	    });
	  $('.menutype2')
	    .typistPause(700, function(){
	      $('.menutype2')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'PROJECTS' + '\xa0\xa0' + '工程' + '\xa0\xa0\xa0\xa0\xa0\xa0' + 'PROJEKTE' + '\xa0\xa0\xa0' + 'プロジェクト',
		    cursor: false
	      })
	    });
	  $('.menutype3')
	    .typistPause(1500, function(){
	      $('.menutype3')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'RÈSUMÈ' + '\xa0\xa0\xa0\xa0\xa0\xa0' + '履歴書' + '\xa0\xa0' + 'CV' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'リレキショ',
		    cursor: false
	      })
	    });
	  $('.menutype4')
	    .typistPause(2200, function(){
	      $('.menutype4')
	      .typistStop()
	      .typist({
    	    speed: 50,
		    text: 'CONTACT' + '\xa0\xa0\xa0\xa0' + '聯絡' + '\xa0\xa0\xa0\xa0\xa0\xa0' + 'KONTAKT' + '\xa0\xa0\xa0\xa0\xa0' + 'セショク',
		    cursor: true
	      })
	    });
	});