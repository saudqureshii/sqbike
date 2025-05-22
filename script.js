// gallery
const galleryImages  = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightBoxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

galleryImages.forEach(img =>{
img.addEventListener("click", (e)=>{
  lightBoxImg.src = e.target.src;
  lightbox.style.display='flex';
  console.log("clicked");
  
})
})

lightboxClose.addEventListener("click", (e)=>{
lightbox.style.display='none';
})

lightbox.addEventListener("click", (e)=>{
if (e.target === lightbox) {
  lightbox.style.display = 'none';
}
})

// -----------
// -----------
const navbarToggler = document.querySelector(".navbar-toggler");
const offcanvas = document.querySelector(".offcanvas");
const btnClose = document.querySelector(".btn-close");
const navLink = document.querySelectorAll(".nav-link");

navbarToggler.addEventListener("click", () => {
    offcanvas.classList.toggle("d-none"); // Toggle the 'd-none' class when the navbar-toggler is clicked
    offcanvas.classList.remove("show")
});
navLink.forEach( link =>{
    link.addEventListener("click",()=>{
    const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
    offcanvas.classList.remove("show");
    offcanvasBackdrop.classList.remove("show");
    offcanvas.classList.add("d-none");    
})
})

// -----------
const scroller = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

// function addAnimation() {
//     scroller.forEach((scroller) => {
//         scroller.setAttribute("data-animated", true)
//         const scrollerInner = document.querySelectorAll(".scroller_inner");
//         const scrollerContent = Array.from(scrollerInner.children);
//         scrollerContent.forEach(item => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute('aria-hidded', true);
//             scrollerInner.appendChild(duplicatedItem);
//         })
//     })
// }
function addAnimation() {
    scroller.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        
        // Correctly target the .scroller_inner element inside each scroller
        const scrollerInner = scroller.querySelector(".scroller_inner");
        
        if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);
            
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', 'true'); // Corrected typo here
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    });
}
