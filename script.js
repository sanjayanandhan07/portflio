
// Simple JS for mobile nav toggle and smooth scroll for internal anchors
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
