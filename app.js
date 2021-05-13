const getAdvice = async (container) =>  {
  container.classList.add('fade')
   await fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(json => container.innerHTML = `<div>${json.slip.advice}</div>`)
  container.classList.remove('fade')
} 
  


document.addEventListener("DOMContentLoaded", function(){
  rootContainer = document.getElementById('root');
  getAdvice(rootContainer)
  setInterval(() =>  getAdvice(rootContainer)
  , 6000);  
});