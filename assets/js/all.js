$(function(){
    $( ".cancelReplyForm" ).click(function() {
        $( ".replyForm" ).toggleClass( "d-none" );
      });
    $( ".showReplyForm" ).click(function() {
        $( ".replyForm" ).toggleClass( "d-none" );
    });
    $("#adminViewToggleId").click(function(){
        $("#adminViewModalFooterId").toggleClass( "d-none" );
        $(this).toggleClass( "rotate-180" );
    });

    // $("#navIndexPageId").addClass( "text-primary" );
    // $("#navAdminPageId").click(function(){
    //     $(this).toggleClass( "text-primary" );
    //     $("#navIndexPageId").toggleClass( "text-primary" );
    // });
    // $("#navIndexPageId").click(function(){
    //     $(this).toggleClass( "text-primary" );
    //     $("#navAdminPageId").toggleClass( "text-primary" );
    // });
});