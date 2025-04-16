function generateNumber(){
    const min = Math.ceil (document.querySelector(".min").value)
    const max = Math.floor (document.querySelector(".max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Número sorteado: ${result}`;
  
    resultDiv.classList.remove("show");
    resultDiv.classList.add("show");
}





