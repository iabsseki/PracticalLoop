var numbers=[-30, 14, 66, 21, 72, -4]

function increaseNumber(event) {
  let int = parseInt(event.target.id) + 1
  let element = document.getElementById(event.target.id)
  element.innerHTML = int
  element.id = int
}

function printNumbers (numbers) {
  for(let i = 0; i < numbers.length; i++) {
    lineStart = document.createElement('div');
    lineStart.setAttribute("id", 'line');
    lineStart.innerHTML = "The number is "
    
    num = document.createElement('span');
    num.setAttribute("id", numbers[i]);
    num.innerHTML = numbers[i]
    
    lineStart.appendChild(num)
    
    lineEnd = document.createElement('span');
    let string = " and "
    
    if(numbers[i] < 0) {
      string += "the number is below 0"
    }
    if(numbers[i] > 50) {
      string += "the number is greater than 50"
    }
    if (numbers[i] == 14) {
      string += "the number equals 14"
    }
    
    lineEnd.innerHTML = string
    lineStart.appendChild(lineEnd)
    
    num.addEventListener('click', increaseNumber)
    document.body.appendChild(lineStart)
  }
}

printNumbers(numbers)