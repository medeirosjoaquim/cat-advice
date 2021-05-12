const getAdvice = (container) =>  {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(json => container.innerHTML = `<div>${json.slip.advice}</div>`)
} 
  


document.addEventListener("DOMContentLoaded", function(){
  rootContainer = document.getElementById('root');
  getAdvice(rootContainer)
  setInterval(() => 
  getAdvice(rootContainer)
  , 8000);  
});