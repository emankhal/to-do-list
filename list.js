var showButton = document.getElementById('showFloatingElement');
var floatingElement = document.getElementById('display');
var display=document.getElementsByClassName('display')

    showButton.addEventListener('click', function() {
      if (floatingElement.style.display === '' || floatingElement.style.display === 'none') {
        floatingElement.style.display = 'inline flex';
        display.style.display='flex';
      } else {
        floatingElement.style.display = 'none';
      }
    });
    var text = document.querySelector('.text');
    var date = document.querySelector('.date');
    var button = document.querySelector('.btn');
    var list = document.querySelector('.list');
    
    button.addEventListener('click', function() {
      if (text.value === '' || date.value === '') {
        alert('Please enter the data.');
      } else {
        var divList = document.createElement('div');
        divList.className = 'list-data';
        divList.innerHTML = text.value + '  , ' + date.value + '     ' + `<i class="fa-solid fa-trash"></i>`;
        list.appendChild(divList);
    
        // Reset input fields
        text.value = '';
        date.value = '';
        floatingElement.style.display = 'none';
        divList.querySelector("i").addEventListener("click", function() {
          divList.remove();
        });
      }
    });