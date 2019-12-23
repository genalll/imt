document.getElementById("customRange1").addEventListener("change", function() {
    document.getElementById("ves").innerHTML = this.value;
  });

  document.getElementById("customRange3").addEventListener("change", function() {
    document.getElementById("rost").innerHTML = this.value;
  });

  click.onclick = function() {
    
    var testves = document.getElementById('ves');
    var testrost = document.getElementById('rost');

    var imt = testves.innerHTML /  ((testrost.innerHTML/100) * (testrost.innerHTML/100));
    if (isNaN(imt)){
        return alert("Введите адекватный рост и вес")
    }
    var imtresult = imt.toFixed(2);
    document.getElementById('imt').innerHTML=imtresult;

    if (imt<16) {
        var comments="Выраженный дефицит массы тела";
    }
    else if (imt>16 && imt < 18.5 ) {
        comments="Недостаточная масса тела";
    }
    else if (imt>18.5 && imt < 24.99 ) {
        comments="Норма";
    }
    else if (imt>25 && imt < 30 ) {
        comments="Избыточная масса тела (предожирение)";
    }
    else if (imt>30 && imt < 35 ) {
        comments="Ожирение";
    }
    else if (imt>35 && imt < 40 ) {
        comments="Ожирение резкое";
    }
    else if (imt>40) {
        comments="Очень резкое ожирение";
    }


    document.getElementById('imtcomment').innerHTML=comments;
  };

  clickhref.onclick = function() {
    location.reload(); 
    
  };

  moreinfo.onclick = function() {
    document.location.href = "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%BC%D0%B0%D1%81%D1%81%D1%8B_%D1%82%D0%B5%D0%BB%D0%B0";
    
    
  };