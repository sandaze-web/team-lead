$('a[href^="#"]').on("click",(function(t){let e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},1e3),t.preventDefault()})),document.addEventListener("DOMContentLoaded",(function(){null!==document.querySelector(".feedback")&&$(".feedback-slider").slick({prevArrow:"#left",nextArrow:"#right"});let e=document.querySelectorAll(".timer-minutes"),n=document.querySelectorAll(".timer-seconds");t(null,null,e,n,30,59,"deadline")}));let t=function(){let t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:59,u=arguments.length>6?arguments[6]:void 0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,i=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,g=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,d=null,f=null;function s(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}function v(){if(!o)return!1;let t=a;f||(f=setInterval((()=>{t<0&&(t=a),o.forEach((e=>{e.textContent=t<10?"0"+t:t})),t-=1}),1e3))}function m(){const r=t-new Date;r<=0&&(clearInterval(d),v());const a=r>0?Math.floor(r/1e3/60)%60:0,u=r>0?Math.floor(r/1e3)%60:0,f=r>0?Math.floor(r/1e3/60/60)%24:0,m=r>0?Math.floor(r/1e3/60/60/24):0;e&&e.forEach((t=>{t.textContent=m<10?"0"+m:m})),n&&n.forEach((t=>{t.textContent=f<10?"0"+f:f})),l&&l.forEach((t=>{t.textContent=a<10?"0"+a:a})),o&&o.forEach((t=>{t.textContent=u<10?"0"+u:u})),c&&(c.textContent=s(m,["день","дня","дней"])),i&&(i.textContent=s(m,["час","часа","часов"])),g&&(g.textContent=s(m,["минута","минуты","минут"])),h&&(h.textContent=s(m,["секунда","секунды","секунд"]))}((new Date).getDate()>new Date(localStorage.getItem(u)).getDate()||(new Date).getMonth()>new Date(localStorage.getItem(u)).getMonth())&&(clearInterval(f),f=null,localStorage.removeItem(u)),localStorage.getItem(u)?t=new Date(localStorage.getItem(u)):(t=new Date,t.setMinutes(t.getMinutes()+r),t.getMinutes()>59&&t.setMinutes(t.getMinutes()-59),localStorage.setItem(u,t)),m(),d=setInterval(m,1e3)};