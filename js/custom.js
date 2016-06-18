var foodArray = ['alfredo.png', 'cake.png',
            'chicken.png', 'chicken-curry.png',
            'chickenburger.png', 'chickenwithrice.png',
            'cubanfood.png','hotdog.png',
            'ganesh-hondori.png','delicatefood.png',
            'dessert.png','donkatsu.png',
            'porkbellybbq.png','fish.png',
            'icecreamdessert.png', 'pulledpork.png',
            'pho-noodle.png','kimchifriedrice.png',
            'spaghettimeatballs.png','spicedchicken.png',
            'squid.png','sushi.png',
            'sushi2.png','taco.png',
            'tuna.png','varietydishes.png','thank-you-nick.png'];

var arrayLike = [];

$('.food').attr('src','img/foods/' + foodArray.shift());

/*global $*/
$.mobile.loading().hide();

    $('.food').on("swiperight",function() {
        console.log("Like");
        $('.food').fadeIn().attr('src','img/foods/' + foodArray[0]);
            if (foodArray.length === 0){
              //arrayLike.push(this);
             $('#happy').effect( "shake", "up" , {times:3}, 2500);
        	console.log("go to end of the or, up der page");
        	Changer(arrayLike);
        	console.log(arrayLike);
    }else{
        //foodArray.push(this);
        arrayLike.push( foodArray[0]); // 1. cake.
        $('#happy').effect( "shake", {times:3, direction:"up"},  2500);
        $('.food').fadeOut();
        $('.food').fadeIn().attr('src','img/foods/' + foodArray.shift());
        console.log(arrayLike);
    }
    });
    

  $('.food').on("swipeleft",function() {
    console.log("Dislike");
        if (foodArray.length === 0){
         $('#sad').effect( "shake" , {times:3}, 2500);
    	console.log("go to end of the order page");
    }else{
    $('.food').fadeOut();
    $('.food').fadeIn().attr('src','img/foods/' + foodArray.shift());
    $('#sad').effect( "shake" , {times:3}, 2500);
    }
  });
  
  var likeList = "";
  
  function Changer (arrayIn) {
       for (var i = 0; i < arrayIn.length; i++) {
           arrayIn[i].toString();
           likeList += arrayLike[i].slice(-3) + ", ";
       }
       console.log(likeList)
  }
  



  /*
  
function sendMail() {
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'YOUR API KEY HERE',
        'message': {
          'from_email': 'Nick-Spinosa@yandex.com,
          'to': [
              {
                'email': 'nickspinosa1022@gmail.com',
                'name': 'Nick Spinosa' ,
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Nick get your ass in gear! You have an Order!',
          'html': 'Here is the order: !'
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
}

*/

