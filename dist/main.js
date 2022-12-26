(()=>{"use strict";function e(e){localStorage.setItem("taskList",JSON.stringify(e))}function t(){return JSON.parse(localStorage.getItem("taskList"))}function n(e){localStorage.setItem("projectList",JSON.stringify(e))}function c(){const e=document.querySelectorAll(".sidebar-item");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){let e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}const a=()=>{document.querySelector("#taskListSection").innerHTML=""},o=e=>{document.querySelector("#projectTitle").innerText=e},r=e=>t().length<0?m.filter((t=>t.projectSelected===e)):t().filter((t=>t.projectSelected===e));let s=[];s=JSON.parse(localStorage.getItem("projectList"));const i=()=>{const e={name:document.querySelector("#newProjectInput").value,tasks:[],taskNum:m.length};s.push(e),n(s),d(e),l(e)};function l(t){const s=document.querySelector("#projectGroup"),i=document.createElement("li");i.classList.add("list-group-item","border-0","sidebar-item","project-item"),i.innerHTML=`<div><i class="fa-regular fa-circle"></i>${t.name}</div><i id="deleteProject"\n    class="fa-solid fa-trash-can"></i>`,i.addEventListener("click",(()=>{o(`${t.name}`),a(),c();for(let e=0;e<r(`${t.name}`).length;e++)p(r(`${t.name}`)[e])})),i.querySelector("#deleteProject").addEventListener("click",(t=>{t.stopPropagation();const c=t.target.parentNode.innerText;s.innerHTML="",function(t){const c=JSON.parse(localStorage.getItem("projectList")).filter((e=>e.name!==t));n(c),e(m.filter((e=>e.projectSelected!==t))),c.forEach((e=>d(e))),c.forEach((e=>l(e)))}(c)}),{once:!0}),s.appendChild(i)}function d(e){const t=document.querySelector("#taskProject"),n=document.createElement("option");n.setAttribute("value",`${e.name}`),n.innerText=e.name,t.appendChild(n)}let u=0,m=[];function p(t){u++;const n=document.querySelector("#taskListSection"),c=document.createElement("li");c.classList.add("list-group-item","taskItem"),c.setAttribute("id",`task${u}`);const a=document.createElement("div");a.classList.add("taskName");const o=document.createElement("input");o.classList.add("form-check-input","me-1"),o.setAttribute("type","checkbox"),o.setAttribute("id",`todo${u}`);const r=document.createElement("label");r.classList.add("form-check-label"),r.setAttribute("data-bs-toggle","collapse"),r.setAttribute("data-bs-target",`#collapseDetails${u}`),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls",`collapseDetails${u}`),r.setAttribute("type","button"),r.textContent=` ${t.name}`;const s=document.createElement("div");s.classList.add("taskAction"),document.createElement("div").classList.add("card"),document.createElement("div").classList.add("card-body");const i=document.createElement("div");i.classList.add("collapse"),i.setAttribute("id",`collapseDetails${u}`);const l=document.createElement("div");l.classList.add("card","card-body");const d=document.createElement("span");d.classList.add("list-group-item"),d.innerHTML=`<b>Due Date:</b> ${t.date} ${t.time}`;const b=document.createElement("span");b.classList.add("list-group-item"),b.innerHTML=`<b>Description:</b> ${t.description}`;const S=document.createElement("span");S.classList.add("list-group-item"),S.innerHTML=`<b>Priority:</b> ${t.priority}`;const g=document.createElement("i");g.classList.add("fa-regular","fa-pen-to-square","tt"),g.setAttribute("data-bs-placement","bottom"),g.setAttribute("title","edit");const L=document.createElement("i");L.classList.add("fa-solid","fa-flag","tt"),L.setAttribute("data-bs-placement","bottom"),L.setAttribute("title","Change Priority");const v=document.createElement("i");v.classList.add("fa-solid","fa-circle-arrow-right","tt"),v.setAttribute("data-bs-placement","bottom"),v.setAttribute("title","Move To Project");const y=document.createElement("i");y.classList.add("fa-regular","fa-trash-can","tt"),y.setAttribute("data-bs-placement","bottom"),y.setAttribute("data-task-id",t.taskId),y.addEventListener("click",(t=>{const c=t.target.dataset.taskId;console.log(c);const a=m.findIndex((e=>e.taskId===parseInt(c)));n.innerHTML="",function(t){console.log(t);let n=JSON.parse(localStorage.getItem("taskList"));n.splice(t,1),m.splice(t,1),e(n),n.forEach((e=>p(e))),function(){document.querySelector("#taskListSection").innerHTML="";let e=document.getElementsByClassName("active")[0].innerText;for(let t=0;t<f(`${e}`).length;t++)p(f(`${e}`)[t])}()}(a)})),y.setAttribute("title","Delete"),a.append(o,r),s.append(g,L,v,y),c.append(a,s),n.appendChild(c),l.append(d,b,S),i.appendChild(l),n.appendChild(i)}m=t();const f=e=>t().length<0?m.filter((t=>t.projectSelected===e)):t().filter((t=>t.projectSelected===e));(function(){const e=document.querySelectorAll(".sidebar-item");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){let e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))})(),window.addEventListener("load",(()=>{for(let e=0;e<r("Inbox").length;e++)p(r("Inbox")[e]);s.forEach((e=>{l(e),d(e)}))})),document.querySelector("#submitTaskBtn").addEventListener("click",(function(){!function(){const e=(t=document.querySelector("#taskNameInput").value,n=document.querySelector("#taskDescription").value,c=document.querySelector("#taskDueDate").value,a=document.querySelector("#todoTime").value,o=document.querySelector("#taskPriority").value,r=document.querySelector("#taskProject").value,u++,{name:t,description:n,date:c,time:a,priority:o,projectSelected:r,taskId:u});var t,n,c,a,o,r;m.push(e),p(e)}(),e(m),document.querySelector("#taskNameInput").value="",document.querySelector("#taskDescription").value="",document.querySelector("#taskDueDate").value="",document.querySelector("#todoTime").value="",function(){document.querySelector("#taskListSection").innerHTML="";let e=document.getElementsByClassName("active")[0].innerText;for(let t=0;t<r(`${e}`).length;t++)p(r(`${e}`)[t])}()})),document.querySelector("#submitProjectBtn").addEventListener("click",(function(){i(),document.querySelector("#newProjectInput").value="",document.querySelectorAll(".project-item").forEach((e=>e.addEventListener("click",(()=>{o(e.innerText),a();for(let t=0;t<r(e.innerText).length;t++)p(r(e.innerText)[t])})))),c()})),document.querySelectorAll(".sidebar-item").forEach((e=>e.addEventListener("click",(()=>{o(e.innerText),a(),c();for(let t=0;t<r(`${e.innerText}`).length;t++)p(r(`${e.innerText}`)[t])})))),document.querySelector("#inbox").addEventListener("click",(()=>{o("Inbox"),a(),c();for(let e=0;e<r("Inbox").length;e++)p(r("Inbox")[e])}))})();