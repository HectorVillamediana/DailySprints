const myCountainers = document.querySelectorAll(".containerImg")
console.log(myCountainers);
myCountainers.forEach(container => {
    container.addEventListener("click", () => {
        for (element of myCountainers) {
            if (element.classList.contains("fullSize")) {
                element.classList.remove("fullSize")
            }
        }
        container.classList.add("fullSize")
    })
})