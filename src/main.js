const input = document.getElementById("filterInput");
const list = document.getElementById("itemsList");
const items = list.getElementsByTagName("li");

input.addEventListener("input", filerItems);

function filerItems() {
    const inputValue = input.value.toLowerCase();

    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemText = item.textContent

        if (itemText.toLowerCase().indexOf(inputValue) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
