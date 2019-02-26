 $(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var qN1 = parseInt($("input:radio[name=1]:checked").val());
    var qN2 = parseInt($("input:radio[name=2]:checked").val());
    var qN3 = parseInt($("input:radio[name=3]:checked").val());
    var qN4 = parseInt($("input:radio[name=4]:checked").val());
    var qN5 = parseInt($("input:radio[name=5]:checked").val());
    $("#Youscore").text(qN1+qN2+qN3+qN4+qN5);
     });
});
