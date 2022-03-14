const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};a();let c=[{projectName:"Soothing Sounds",projectLink:"https://rohan-kiratsata.github.io/soothing-sounds/",projectImgSrc:"img/soothing_sounds.png",date:"NOV 2021",description:"Soothing Sounds is a website that has various ambient sounds to relax, release stress, study or while working to keep you focused.",tags:["HTML & CSS","JavaScript"]},{projectName:"Brocode Cheatsheets",projectLink:"https://rohan-kiratsata.github.io/brocode-cheatsheets/",projectImgSrc:"img/brocode.png",date:"MAY 2021",description:"BroCode cheatsheets are comprehensive cheatsheets for popular programming languages and development tools.",tags:["Cheatsheets","Programming Languages"]},{projectName:"Fortune Game",projectLink:"https://rohan-kiratsata.github.io/spend-ambani-fortune/",projectImgSrc:"img/fortunegame.png",date:"NOV 2021",description:"Mukesh Ambani is India's richest person with a net worth of 95.7 Billion USD. Wonder If you can spend all of his wealth. What would you spend it on?",tags:["HTML & CSS","JavaScript"]}];var d=document.getElementById("projects");c.map(s=>{const o=document.createElement("div");o.className="test item flex flex-col",o.innerHTML=`

    <div class="rounded-sm scale-div">
      <a href="`+s.projectLink+`">
      <img src="`+s.projectImgSrc+`" alt="" class="rounded-lg ">
      <div class="img-desc rounded-lg">
        <p class="text-xl text-bold">Visit Project \u2192</p>
      </div>
      </a>
    </div>
    <p class="text-3xl my-3">`+s.projectName+`</p>
    <p class="text-sm my-1">`+s.date+`</p>
    <p class="text-lg my-1">`+s.description+`</p>
  `,d.appendChild(o)});
