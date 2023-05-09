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

// custom sidebar
function openNav() {
  let sidebar=document.getElementById("mySidebar");
  let main=document.getElementById("main");
  sidebar.style.width = "250px";
  main.style.marginLeft = "250px";
}

function closeNav() {
  let sidebar=document.getElementById("mySidebar");
  let main=document.getElementById("main");
  let iconbar=document.getElementById("sidebarCollapse");
  var x = window.matchMedia("(max-width: 990px)")
  if(sidebar.hasAttribute('inactive')){
    main.style.transition= "all 0.3s";
    main.classList.remove("col-12");
    if(x.matches){
      main.classList.add("col-8");
      sidebar.classList.add("col-4");
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
      sidebar.style.marginLeft="-33.34%";
      main.classList.remove("col-8");
    }else{
      sidebar.style.marginLeft="-16.67%";
      main.classList.remove("col-10");
    }
    main.classList.add("col-12");
    main.style.transition= "all 0.3s";
  }
  console.log(iconbar.hasAttribute('inactive'));
  if(iconbar.hasAttribute('inactive')){   
    let iconbar=document.getElementById("sidebarCollapse");
    let btnClose=document.getElementById("btnClose");
    let icon=document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-bars");
    icon.setAttribute("id","btnBar");
    iconbar.appendChild(icon);
    iconbar.removeChild(btnClose);
    iconbar.removeAttribute('inactive');
  }else{
    iconbar.setAttribute('inactive', '');
    let btnBar=document.getElementById("btnBar");
    iconbar.removeChild(btnBar);
    let icon=document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-xmark");
    icon.setAttribute("id","btnClose");
    iconbar.appendChild(icon);
  }
}

// for responsive screen
function myFunction(x) {
  let sidebar=document.getElementById("mySidebar");
  let main=document.getElementById("main");
  let iconbar=document.getElementById("sidebarCollapse");
  if (x.matches) { // If media query matches
    // ini untuk screen
    sidebar.setAttribute('inactive', 'inactive');
    sidebar.style.marginLeft="-16.67%";
    sidebar.style.transition= "all 0.3s";
    main.classList.add("col-12");
    main.classList.remove("col-10");
    main.style.transition= "all 0.3s";
    // ini untuk button
    let iconbar=document.getElementById("sidebarCollapse");
    let btnClose=document.getElementById("btnClose");
    let icon=document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-bars");
    icon.setAttribute("id","btnBar");
    iconbar.appendChild(icon);
    iconbar.removeChild(btnClose);
    iconbar.removeAttribute('inactive');
  } else {
    //ini untuk screen
    main.style.transition= "all 0.3s";
    main.classList.add("col-10");
    main.classList.remove("col-12");
    sidebar.classList.add("active");
    sidebar.classList.remove("col-4");
    sidebar.classList.add("col-2");
    sidebar.style.marginLeft="0";
    sidebar.removeAttribute('inactive');
    sidebar.style.transition= "all 0.3s";
    // ini untuk button
    iconbar.setAttribute('inactive', '');
    let btnBar=document.getElementById("btnBar");
    iconbar.removeChild(btnBar);
    let icon=document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-xmark");
    icon.setAttribute("id","btnClose");
    iconbar.appendChild(icon);
  }
}

var x = window.matchMedia("(max-width: 990px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes