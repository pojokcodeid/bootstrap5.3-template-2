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
    if(theme==="dark"){
      llight.style.display="none";
      ldark.style.display="";
    }else{
      llight.style.display="";
      ldark.style.display="none";
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
    sidebar.style.display="none";
    sidebar.style.marginLeft="-50%";
    sidebar.classList.add("col-6");
    sidebar.setAttribute('inactive', 'inactive');
    main.classList.remove("col-8");
    main.classList.add("col-12");
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
    main.classList.remove("col-12");
    main.classList.add("col-10");
    sidebar.classList.remove("col-6");
    sidebar.classList.add("col-2");
    sidebar.style.display='';
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
    main.classList.remove("col-12");
    if(x.matches){
      main.classList.add("col-12");
      sidebar.classList.add("col-6");
    }else{
      main.classList.add("col-10");
      sidebar.classList.add("col-2");
    }
    sidebar.style.display='';
    sidebar.classList.add("active");
    sidebar.style.marginLeft="0";
    sidebar.removeAttribute('inactive');
    sidebar.style.transition= "all 0.3s";
  }else{
    sidebar.setAttribute('inactive', 'inactive');
    sidebar.style.transition= "all 0.3s";
    if(x.matches){
      sidebar.style.marginLeft="-50%";
      sidebar.classList.add("col-6");
      main.classList.remove("col-8");
    }else{
      sidebar.style.marginLeft="-16.67%";
      sidebar.classList.add("col-2");
      main.classList.remove("col-10");
    }
    main.classList.add("col-12");
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