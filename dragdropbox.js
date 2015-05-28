if (Meteor.isClient) {
  Template.divtemplate.rendered = function () {

  function draggableOnDragStart(e) {
      $("#draggable").addClass("hollow");
      $("#droptarget").text("Drop here.");
      $("#droptarget").removeClass("painted");
    }

    function draggableOnDrag(e) {

    }

    function draggableOnCancel(e) {
    }

    function draggableOnDragEnd(e) {

      var draggable = $("#draggable");

      if (!draggable.data("kendoDraggable").dropped) {
        // drag ended outside of any droptarget
        $("#droptarget").text("Try again!");
      }

      draggable.removeClass("hollow");
    }

    function droptargetOnDragEnter(e) {

      $("#droptarget").text("Now drop...");
      $("#droptarget").addClass("painted");
    }

    function droptargetOnDragLeave(e) {

      $("#droptarget").text("Drop here.");
      $("#droptarget").removeClass("painted");
    }

    function droptargetOnDrop(e) {

      $("#droptarget").text("You did great!");
      $("#draggable").removeClass("hollow");
    }

    $("#draggable").kendoDraggable({
      hint: function() {
        return $("#draggable").clone().css({
          "opacity": 0.6,
          "background-color": "#0cf"
        });
      },
      dragstart: draggableOnDragStart,
      drag: draggableOnDrag,
      dragend: draggableOnDragEnd,
      dragcancel: draggableOnCancel
    });

    $("#droptarget").kendoDropTarget({
      dragenter: droptargetOnDragEnter,
      dragleave: droptargetOnDragLeave,
      drop: droptargetOnDrop
    });
  };
}