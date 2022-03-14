let projects = [
  {
    "projectName": "Soothing Sounds",
    "projectLink": "https://rohan-kiratsata.github.io/soothing-sounds/",
    "projectImgSrc": "img/soothing_sounds.png",
    "date": "NOV 2021",
    "description": "Soothing Sounds is a website that has various ambient sounds to relax, release stress, study or while working to keep you focused.",
    "tags": ["HTML & CSS", "JavaScript"]
  },
  {
    "projectName": "Brocode Cheatsheets",
    "projectLink": "https://rohan-kiratsata.github.io/brocode-cheatsheets/",
    "projectImgSrc": "img/brocode.png",
    "date": "MAY 2021",
    "description": "BroCode cheatsheets are comprehensive cheatsheets for popular programming languages and development tools.",
    "tags": ["Cheatsheets", "Programming Languages"]
  }
  ,
  {
    "projectName": "Fortune Game",
    "projectLink": "https://rohan-kiratsata.github.io/spend-ambani-fortune/",
    "projectImgSrc": "img/fortunegame.png",
    "date": "NOV 2021",
    "description": "Mukesh Ambani is India's richest person with a net worth of 95.7 Billion USD. Wonder If you can spend all of his wealth. What would you spend it on?",
    "tags": ["HTML & CSS", "JavaScript"]
  },
]

var container = document.getElementById('projects');

projects.map((project) => {
  const div = document.createElement('div');
  div.className = 'test item flex flex-col';
  div.innerHTML = `

    <div class="rounded-sm scale-div">
      <a href="`+ project.projectLink + `" target="_blank" rel="noopener noreferrer">
      <img src="`+ project.projectImgSrc + `" alt="" class="rounded-lg ">
      <div class="img-desc rounded-lg">
        <p class="text-xl text-bold">Visit Project →</p>
      </div>
      </a>
    </div>
    <p class="text-3xl my-3 font-semibold">`+ project.projectName + `</p>
    <p class="text-sm my-1">`+ project.date + `</p>
    <p class="text-lg my-1">`+ project.description + `</p>
  `;
  container.appendChild(div);
});