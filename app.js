const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck))
function handleCheck(e) {
    console.log(e)
    if (e.shiftKey && this.checked) {

    }
    lastChecked = this;
}
let lastChecked;