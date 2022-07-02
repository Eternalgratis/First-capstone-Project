const menu = document.querySelector('.hamburger');
const desktopnav = document.querySelector('.desktop-nav');
// ............ Adding click event to the hamburger.........................
menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  desktopnav.classList.toggle('active');
});
document.querySelectorAll('.ham-item').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('active');
  desktopnav.classList.remove('active');
}));

// Objects

const projectContainerArr = [
  {
    headline: 'Featured Speakers',
    image: './images/ministersssss.jfif',
    name: 'Eternalgratis',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Subtext:
      'Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam',
  },
  {
    headline: 'Featured Speakers',
    image: './images/ministers.jfif',
    name: 'Eternalgratis',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Subtext:
      'Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam',
  },
  {
    headline: 'Featured Speakers',
    image: './images/ministerss.jfif',
    name: 'Eternalgratis',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Subtext:
      'Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam',
  },
  {
    headline: 'Featured Speakers',
    image: './images/ministersss.jfif',
    name: 'Eternalgratis',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Subtext:
      'Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam',
  },
  {
    headline: 'Featured Speakers',
    image: './images/ministerssss.jfif',
    name: 'Eternalgratis',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Subtext:
      'Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam',
  },
  {
    headline: 'Featured Speakers',
    image: './images/ministersssss.jfif',
    name: 'Eternalgratis',
    Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Subtext:
      'Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam',
  },
];

const featureSection = document.querySelector('.all-viewmore');
for (let i = 0; i < projectContainerArr.length; i += 1) {
  featureSection.innerHTML = `
  <h3>${projectContainerArr[0].headline}</h3>
  <div class="mobile-speakers">
  <div class="speak-dir">
    <div class="view-more">
      <img src="${projectContainerArr[0].image}" alt="picture">
      <div class="cite-quote"> 
      <cite id="anchor">${projectContainerArr[0].name}</cite>
      <blockquote><span id="subtext">${projectContainerArr[0].Text}</span><br>${projectContainerArr[0].Subtext}</blockquote>
      </div>
    </div>
    <div class="view-more">
    <img src="${projectContainerArr[1].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[1].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[1].Text}</span><br>${projectContainerArr[1].Subtext}</blockquote>
    </div>
    </div>
    <div class="view-more view">
    <img src="${projectContainerArr[2].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[2].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[2].Text}</span<br>${projectContainerArr[2].Subtext}</blockquote>
    </div>
    </div>
  </div>

  <div class="speak-dir">
    <div class="view-more view">
    <img src="${projectContainerArr[3].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[3].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[3].Text}</span><br>${projectContainerArr[3].Subtext}</blockquote>
    </div>
    </div>

    <div class="view-more view">
    <img src="${projectContainerArr[4].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[4].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[4].Text}</span><br>${projectContainerArr[4].Subtext}</blockquote>
    </div>
    </div>

    <div class="view-more view">
    <img src="${projectContainerArr[5].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[5].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[5].Text}</span><br>${projectContainerArr[5].Subtext}</blockquote>
    </div>
    </div>
  </div>
  <button id="mobile-link1">MORE</button>
  </div>
  `;
}
