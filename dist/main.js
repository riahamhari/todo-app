(()=>{"use strict";let e=0,t=[];function c(t){e++;const c=document.querySelector("#taskListSection"),n=document.createElement("li");n.classList.add("list-group-item","taskItem");const a=document.createElement("div");a.classList.add("taskName");const o=document.createElement("input");o.classList.add("form-check-input","me-1"),o.setAttribute("type","checkbox"),o.setAttribute("id",`todo${e}`);const r=document.createElement("label");r.classList.add("form-check-label"),r.setAttribute("data-bs-toggle","collapse"),r.setAttribute("data-bs-target",`#collapseDetails${e}`),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls",`collapseDetails${e}`),r.setAttribute("type","button"),r.textContent=` ${t.name}`;const s=document.createElement("div");s.classList.add("taskAction"),document.createElement("div").classList.add("card"),document.createElement("div").classList.add("card-body");const i=document.createElement("div");i.classList.add("collapse"),i.setAttribute("id",`collapseDetails${e}`);const l=document.createElement("div");l.classList.add("card","card-body");const d=document.createElement("span");d.classList.add("list-group-item"),d.innerHTML=`<b>Due Date:</b> ${t.date} ${t.time}`;const u=document.createElement("span");u.classList.add("list-group-item"),u.innerHTML=`<b>Description:</b> ${t.description}`;const m=document.createElement("span");m.classList.add("list-group-item"),m.innerHTML=`<b>Priority:</b> ${t.priority}`;const p=document.createElement("i");p.classList.add("fa-regular","fa-pen-to-square","tt"),p.setAttribute("data-bs-placement","bottom"),p.setAttribute("title","edit");const b=document.createElement("i");b.classList.add("fa-solid","fa-flag","tt"),b.setAttribute("data-bs-placement","bottom"),b.setAttribute("title","Change Priority");const y=document.createElement("i");y.classList.add("fa-solid","fa-circle-arrow-right","tt"),y.setAttribute("data-bs-placement","bottom"),y.setAttribute("title","Move To Project");const f=document.createElement("i");f.classList.add("fa-regular","fa-trash-can","tt"),f.setAttribute("data-bs-placement","bottom"),f.setAttribute("title","Delete"),a.append(o,r),s.append(p,b,y,f),n.append(a,s),c.appendChild(n),l.append(d,u,m),i.appendChild(l),c.appendChild(i)}let n=[];function a(){const e=document.querySelectorAll(".sidebar-item");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){let e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}const o=()=>{document.querySelector("#taskListSection").innerHTML=""},r=e=>{document.querySelector("#projectTitle").innerText=e},s=e=>t.filter((t=>t.projectSelected===e));(function(){const e=document.querySelectorAll(".sidebar-item");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){let e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))})(),document.querySelector("#submitTaskBtn").addEventListener("click",(function(){(function(){const e={name:document.querySelector("#taskNameInput").value,description:document.querySelector("#taskDescription").value,date:document.querySelector("#taskDueDate").value,time:document.querySelector("#todoTime").value,priority:document.querySelector("#taskPriority").value,projectSelected:document.querySelector("#taskProject").value};t.push(e),c(e)})(),document.querySelector("#taskNameInput").value="",document.querySelector("#taskDescription").value="",document.querySelector("#taskDueDate").value="",document.querySelector("#todoTime").value="",document.querySelectorAll(".fa-trash-can").forEach((e=>e.addEventListener("click",(e=>{var c;(c=t.findIndex((t=>t.name===e.composedPath()[2].innerText)))>-1&&t.splice(c,1)}))))})),document.querySelector("#submitProjectBtn").addEventListener("click",(function(){(()=>{const e=(e=>{const t=[];return{name:document.querySelector("#newProjectInput").value,taskList:t,taskNum:t.length}})();n.push(e),function(e){const t=document.querySelector("#taskProject"),c=document.createElement("option");c.setAttribute("value",`${e.name}`),c.innerText=e.name,t.appendChild(c)}(e),function(e){const t=document.querySelector("#projectGroup"),c=document.createElement("li");c.classList.add("list-group-item","border-0","sidebar-item","project-item"),c.innerHTML=`<i class="fa-regular fa-circle"></i>${e.name}`,t.appendChild(c)}(e)})(),document.querySelectorAll(".project-item").forEach((e=>e.addEventListener("click",(()=>{r(e.innerText),o();for(let t=0;t<s(e.innerText).length;t++)c(s(e.innerText)[t])})))),a();for(let e=0;e<s(document.querySelector(".active").innerText).length;e++)c(s(document.querySelector(".active").innerText)[e])})),document.querySelectorAll(".sidebar-item").forEach((e=>e.addEventListener("click",(()=>{r(e.innerText),o(),a()})))),document.querySelector("#inbox").addEventListener("click",(function(){for(let e=0;e<s("Inbox").length;e++)c(s("Inbox")[e])}))})();