const projectContainerArr = [
  {
    headline: "Featured Speakers",
    image: "../images/minister.jfif",
    name: "Eternalgratis",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Subtext:
      "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
  },
  {
    headline: "Featured Speakers",
    image: "../images/ministers.jfif",
    name: "Eternalgratis",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Subtext:
      "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
  },
  {
    headline: "Featured Speakers",
    image: "../images/ministerss.jfif",
    name: "Eternalgratis",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Subtext:
      "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
  },
  {
    headline: "Featured Speakers",
    image: "../images/ministersss.jfif",
    name: "Eternalgratis",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Subtext:
      "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
  },
  {
    headline: "Featured Speakers",
    image: "../images/ministerssss.jfif",
    name: "Eternalgratis",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Subtext:
      "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
  },
  {
    headline: "Featured Speakers",
    image: "../images/ministersssss.jfif",
    name: "Eternalgratis",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Subtext:
      "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
  },
];
const featureSection = document.querySelector(".all-viewmore");
for (let i = 0; i < projectContainerArr.length; i += 1) {
  featureSection.innerHTML = `
  <h3>${projectContainerArr[0].headline}</h3>
  <div class="mobile-speakers">
    <div class="ms-list1 view-more1">
      <img width="120" src="${projectContainerArr[0].image}" alt="picture">
      <div class="cite-quote"> 
      <cite id="anchor">${projectContainerArr[0].name}</cite>
      <blockquote><span id="subtext">${projectContainerArr[0].Text}</span>${projectContainerArr[0].Subtext}</blockquote>
      </div>
    </div>
    <div class="ms-list2 view-more2">
    <img width="120" src="${projectContainerArr[1].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[1].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[1].Text}</span>${projectContainerArr[1].Subtext}</blockquote>
    </div>
    </div>
    <div class="view-more" id="view-more3">
    <img width="120" src="${projectContainerArr[2].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[2].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[2].Text}</span>${projectContainerArr[2].Subtext}</blockquote>
    </div>
    </div>
    <div class="view-more" id="view-more4">
    <img width="120" src="${projectContainerArr[3].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[3].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[3].Text}</span>${projectContainerArr[3].Subtext}</blockquote>
    </div>
    </div>
    <div class="view-more" id="view-more5">
    <img width="120" src="${projectContainerArr[4].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[4].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[4].Text}</span>${projectContainerArr[4].Subtext}</blockquote>
    </div>
    </div>
    <div class="view-more" id="view-more6">
    <img width="120" src="${projectContainerArr[5].image}" alt="picture">
    <div class="cite-quote">
    <cite id="anchor">${projectContainerArr[5].name}</cite>
    <blockquote><span id="subtext">${projectContainerArr[5].Text}</span>${projectContainerArr[5].Subtext}</blockquote>
    </div>
    </div>
  </div>`;
}
// const capStoneObj = [
//   {
//     Header: "FeaturedSpeakers",
//     Image: "../images/minister.jfif",
//     Name: "eternalgratis",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     Subtext:
//       "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
//   },
//   {
//     Header: "FeaturedSpeakers",
//     Image: "../images/ministers.jfif",
//     Name: "eternalgratis",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     Subtext:
//       "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
//   },
//   {
//     Header: "FeaturedSpeakers",
//     Image: "../images/ministerss.jfif",
//     Name: "eternalgratis",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     Subtext:
//       "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
//   },
//   {
//     Header: "FeaturedSpeakers",
//     Image: "../images/ministersss.jfif",
//     Name: "eternalgratis",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     Subtext:
//       "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
//   },
//   {
//     Header: "FeaturedSpeakers",
//     Image: "../images/ministerssss.jfif",
//     Name: "eternalgratis",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     Subtext:
//       "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
//   },
//   {
//     Header: "FeaturedSpeakers",
//     Image: "../images/ministersssss.jfif",
//     Name: "eternalgratis",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     Subtext:
//       "Ratione cumque nostrum dolor unde doloribus at culpa eligendi impedit iste quam",
//   },
// ];
// let speakers = document.querySelector(".all-viewmore");
// for (let i = 0; i < capStoneObj.length; i += 1) {
//   speakers.innerHTML = `

// }