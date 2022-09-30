
    // document.body.addEventListener("click", function (e) {
    //   if(e.button !== 2) {
    //     window.openLink("clickTag1");
    //   }
    // });
    var start = document.querySelector('.start');
    var end = document.querySelector('.end');
    var brownbee = document.querySelector('#brown');
    var whitebee = document.querySelector('#white');
    var dgreenbee = document.querySelector('#dgreen');
      var d2greenbee = document.querySelector('#d2green');
    var lgreenbee = document.querySelector('#lgreen');
      var l2greenbee = document.querySelector('#l2green');
          var l3greenbee = document.querySelector('#l3green');
          
  //   brownbee.onclick = function() {
  //     document.getElementById('finder').classList.add('hide');
  
  // };
  
  
   var clicks = 0;
   
      function click() {
          clicks += 1;
          document.getElementById("clicks").innerHTML = clicks;
      };
  
      function isEnd() {
          if (clicks == 5){
        document.getElementById('finder2').classList.remove('hide');
        }
    };
  
    brownbee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!brownbee.classList.contains('found') == true){
          click()
          }
          document.getElementById('brown').classList.add('found')
          e.stopPropagation();
         isEnd() 
      }
  });
  
    whitebee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!whitebee.classList.contains('found') == true){
          click()
          }
              document.getElementById('white').classList.add('found')
          e.stopPropagation();
          console.log("buzz")
          isEnd() 
      }
  });
    dgreenbee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!dgreenbee.classList.contains('found') == true){
          click()
          }
            document.getElementById('dgreen').classList.add('found')
          e.stopPropagation();
          console.log("buzz")
          isEnd() 
      }
  });
    d2greenbee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!d2greenbee.classList.contains('found') == true){
          click()
          }
            document.getElementById('d2green').classList.add('found')
          e.stopPropagation();
          console.log("buzz")
          isEnd() 
      }
  });
    lgreenbee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!lgreenbee.classList.contains('found') == true){
          click()
          }
            document.getElementById('lgreen').classList.add('found')
          e.stopPropagation();
          console.log("buzz")
          isEnd() 
      }
  });
    l2greenbee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!l2greenbee.classList.contains('found') == true){
          click()
          }
            document.getElementById('l2green').classList.add('found')
          e.stopPropagation();
          console.log("buzz")
          isEnd() 
      }
  });
    l3greenbee.addEventListener("click", function(e) {
      if (e.button !== 2) {
          if (!l3greenbee.classList.contains('found') == true){
          click()
          }
            document.getElementById('l3green').classList.add('found')
          e.stopPropagation();
          console.log("buzz")
          isEnd() 
      }
  });
  
  start.onclick = function() {
      document.getElementById('finder').classList.add('hide');
  };
  
  end.addEventListener("click", function(e) {
      if (e.button !== 2) {
          e.stopPropagation();
          window.openLink("clickTag1");
      }
  });