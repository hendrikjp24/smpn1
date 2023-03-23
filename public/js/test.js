const btCari = document.getElementById("btnSubmit");

const tableUjian = document.querySelector(".table-ujian");


// TEST REFRESH PAGE
console.log(window.performance);
if (window.performance) {
    console.info("window.performance works fine on this browser");
  }
  console.info(performance.navigation.type);
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
  } else {
    console.info( "This page is not reloaded");
  }

// //   check url
//   console.log(window.location.href);