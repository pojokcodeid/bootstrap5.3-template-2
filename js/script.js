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
  if(sidebar.hasAttribute('inactive')){
    sidebar.style.width = "300px";
    sidebar.classList.add("active");
    sidebar.classList.add("col-2");
    sidebar.classList.remove("active2");
    sidebar.removeAttribute('inactive');
    main.classList.add("col-10");
    main.classList.remove("col-12");
    main.style.marginLeft= "300px";
    main.style.transition= "all 0.3s";
  }else{
    sidebar.style.width = "0";
    sidebar.setAttribute('inactive', 'inactive');
    sidebar.classList.add("active2");
    sidebar.classList.remove("col-2");
    main.classList.add("col-12");
    main.classList.remove("col-10");
    main.style.marginLeft= "0";
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