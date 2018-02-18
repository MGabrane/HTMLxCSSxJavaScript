$(document).ready(function(){
  $( ".candy" ).draggable({
    revert: 'invalid'
  });

  $('.cell').droppable({
    accept: '.candy',
    drop: function(event, ui){
    
      var $candy = ui.draggable;
       $candy.position({
        my: 'center',
        at: 'center',
        of: $(event.target)
      });

      $candy.addClass('is-in-the-box')
      countCndy();
  }
});
    function  countCndy() {
      console.info($('.is-in-the-box').length);
}
})
