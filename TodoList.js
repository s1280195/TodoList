const button = document.getElementById('touroku');
  button.addEventListener('click', () => {
    const input = document.getElementById('yarukoto');

    const li = document.createElement('li');
    li.innerText = input.value;

    const doneButton = document.createElement('button');
    doneButton.innerText = '削除';
    li.appendChild(doneButton);
    doneButton.addEventListener('click', () =>{
      const li = doneButton.closest('li');
      li.classList.add('yokosen');
    });

    const ol = document.querySelector('ol');
    ol.appendChild(li);
  });
