const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
    console.log("Grandparent Capture")
}, { capture: true })

parent.addEventListener("click", e => {
    console.log("Parent Capture")
}, { capture: true }
)

child.addEventListener("click", e => {
    console.log("Child 1")
})

document.addEventListener("click", e => {
    console.log("Document 1")
})