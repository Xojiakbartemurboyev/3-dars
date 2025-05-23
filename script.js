   alert("Sizda hozir random sonlar chiqishini boshladi 😁");

  let son = Math.floor(Math.random() * 100);
  prompt("Random orqali chiqqan son:", son);


  let tasdiq = confirm("biz random sonni 2 ga ko‘paytirmoqchi va bo‘lmoqchimiz !");

  if (tasdiq) {
    
    let kopaytma = son * 2;
    let bolinma = (son / 2).toFixed(2);

    alert(`✅ Natijalar:\n${son} * 2 = ${kopaytma}\n${son} / 2 = ${bolinma}`);

    
    let img = document.createElement("img");
    img.style.width = "500px";
    img.style.marginTop = "20px";
    document.body.appendChild(img);
  }
  

