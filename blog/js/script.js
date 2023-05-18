(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    let ldark=document.getElementById("logodark");
    let llight=document.getElementById("logolight");
    let codestyle=document.getElementById("codeStyle");
    if(theme==="dark"){
      llight.style.display="none";
      ldark.style.display="";
      codestyle.href="https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/styles/base16/onedark.css";
    }else{
      llight.style.display="";
      ldark.style.display="none";
      codestyle.href="https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/styles/base16/one-light.css";
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()

function myFunction2(x) {
  if (x.matches) { //
    //clone child
    let menu = document.querySelector('#user1');
    let menu2 = document.querySelector('#user2');
    let clonedMenu = menu.cloneNode(true);
    clonedMenu.id = 'x2';
    menu2.appendChild(clonedMenu);
    menu2.style.display="";
    //remove child
    menu.innerHTML="";
    menu.style.display="none";

    //for responsive sidebar
    let sidebar=document.getElementById("mySidebar");
    let main=document.getElementById("main");
    sidebar.style.transition= "all 0.3s";
    sidebar.removeAttribute('inactive');
    sidebar.style.marginLeft="-300px";
    sidebar.style.top="0";
    sidebar.style.left="0";
    sidebar.style.bottom="0";
    sidebar.style.height="auto";
    sidebar.style.paddingBottom="65px";
    sidebar.setAttribute('inactive', 'inactive');
    main.style.marginLeft="0";
    //iconbar
    let iconbar2=document.getElementById("btsColapse");
    iconbar2.setAttribute('inactive', '');
    let icon2=document.createElement("i");
    icon2.classList.add("fa-solid");
    icon2.classList.add("fa-arrow-right");
    icon2.setAttribute("id","btnClose");
    iconbar2.appendChild(icon2);
    let btnBar=document.getElementById("btnLeft");
    iconbar2.removeChild(btnBar);
  }else{
    //clone child
    let menu = document.querySelector('#user1');
    let menu2 = document.querySelector('#user2');
    let clonedMenu = menu2.cloneNode(true);
    clonedMenu.id = 'x1';
    menu.appendChild(clonedMenu);
    //remove child
    menu2.innerHTML="";
    menu2.style.display="none";
    menu.style.display="";

    //for sidebar
    let sidebar=document.getElementById("mySidebar");
    let main=document.getElementById("main");
    main.style.transition= "all 0.3s";
    main.style.marginLeft="305px";
    sidebar.style.left="0";
    sidebar.style.marginLeft="0";
    sidebar.style.width="300px";
    sidebar.classList.add("active");
    sidebar.style.marginLeft="0";
    sidebar.removeAttribute('inactive');
    sidebar.style.transition= "all 0.3s";
    
    //buttin diubah
    let iconbar=document.getElementById("btsColapse");
    let btnClose=document.getElementById("btnClose");
    let icon=document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-arrow-left");
    icon.setAttribute("id","btnLeft");
    iconbar.appendChild(icon);
    if(btnClose){
      iconbar.removeChild(btnClose);
    }else{
      let btnClose=document.getElementById("btnLeft");
      iconbar.removeChild(btnClose);
    }
    iconbar.removeAttribute('inactive');
  }
}

var x = window.matchMedia("(max-width: 990px)")
myFunction2(x) // Call listener function at run time
x.addListener(myFunction2) // Attach listener function on state changes


function closeNav() {
  let sidebar=document.getElementById("mySidebar");
  let main=document.getElementById("main");
  let iconbar=document.getElementById("btsColapse");
  var x = window.matchMedia("(max-width: 990px)")
  if(sidebar.hasAttribute('inactive')){
    main.style.transition= "all 0.3s";
    if(x.matches){
      main.style.marginLeft="0";
    }else{
      main.style.marginLeft="305px";
    }
    sidebar.classList.add("active");
    sidebar.style.marginLeft="0";
    sidebar.style.top="0";
    sidebar.style.bottom="0";
    sidebar.style.left="0";
    sidebar.removeAttribute('inactive');
    sidebar.style.transition= "all 0.3s";
  }else{
    sidebar.setAttribute('inactive', 'inactive');
    sidebar.style.transition= "all 0.3s";
    sidebar.style.marginLeft="-300px";
    if(x.matches){
      sidebar.style.marginLeft="-300px";
    }
    main.style.marginLeft="0";
    main.style.transition= "all 0.3s";
  }

  if(iconbar.hasAttribute('inactive')){  
    let iconbar=document.getElementById("btsColapse");
    let btnClose=document.getElementById("btnClose");
    let icon=document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-arrow-left");
    icon.setAttribute("id","btnLeft");
    iconbar.appendChild(icon);
    iconbar.removeChild(btnClose);
    iconbar.removeAttribute('inactive');
  }else{
    let iconbar2=document.getElementById("btsColapse");
    iconbar2.setAttribute('inactive', '');
    let icon2=document.createElement("i");
    icon2.classList.add("fa-solid");
    icon2.classList.add("fa-arrow-right");
    icon2.setAttribute("id","btnClose");
    iconbar2.appendChild(icon2);
    let btnBar=document.getElementById("btnLeft");
    iconbar2.removeChild(btnBar);
  }
}
