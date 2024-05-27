// Write your code here!

const mainelement = document.getElementById('main')
mainelement.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'ISMAIL is the champion';
document.body.appendChild(newHeader);