// $('body').bind('keydown', function(e) {
//   var keyCode = e.which;
//
//   switch(keyCode){
//     case 77:
//       var answer = confirm('M was pressed.');
//       if (answer){
//         window.open('mailto:ju.dmrq@gmail.com');
//       }
//       break;
//     case 84:
//       alert('T was pressed.');
//       break;
//     case 73:
//       alert('I was pressed.');
//       break;
//   }
// });


jQuery(function ($) {

  (function randomPageTitle() {
    var pageTitles = new Array('Edit me!','Supercalifragilist_', 'At least it\'s not lipsum', 'Are we there yet?', 'I want to believe');
    var pageTitle = pageTitles[Math.floor(Math.random() * pageTitles.length)];
    $('.random-title').text( pageTitle );
  })();


});
