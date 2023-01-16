// Dynamically adding anchors in the navbar, for each existing section!

//manipulating the DOM
const navbarList = document.getElementById("navbar__list")
const sections = document.querySelectorAll("section")

//creating an instance of anchor for each section
Array.from(sections).forEach((x) => {
  const listItem = document.createElement("li")
  listItem.innerHTML = `<li><a href='#${x.id}' class='menu__link'>${x.dataset.nav}</a></li>`
  navbarList.appendChild(listItem)
})

// .........................................

// Adding smooth scrolling

//manipulating the DOM
const listOfAnchors = document.querySelectorAll("a")

//adding event listener to each anchor, to stop default behavior, and add the desired smooth scrolling!
Array.from(listOfAnchors).forEach((x) => {
  x.addEventListener("click", function (e) {
    e.preventDefault()
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" })
  })
})

// .........................................

//Styling for the active state of a scrolled section
Array.from(sections).forEach((x) => {
  window.addEventListener("scroll", function (e) {
    if (x.getBoundingClientRect().top > -200 && x.getBoundingClientRect().top < 400) {
      x.classList.add("your-active-class")
    } else {
      x.classList.remove("your-active-class")
    }
  })
})
