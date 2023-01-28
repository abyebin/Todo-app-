const main = document.querySelector('.right-main');
export default function todaysTodo() {
  const box = document.createElement('div');
  box.classList.add('box');
  main.appendChild(box);

  //main > box > h1
  const title = document.createElement('h1');
  title.textContent = 'Text Temp Title';
  box.appendChild(title);

  //mian box > Date
  const dateBox = document.createElement('h3');
  dateBox.textContent = '28/01/2023';
  box.appendChild(dateBox);

  //main > box > para
  const para = document.createElement('p');
  para.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime numquam recusandae eveniet, ipsam minima ex fugit doloremque ratione consectetur est?';
  box.appendChild(para);
}
