const h2 = document.createElement("h2");
h2.textContent = "Since this text is out of place, i'm gonna make it do something cool"
document.querySelector("body").appendChild(h2);
const h22 = document.querySelector("h2");
h22.addEventListener('mouseover', function handleMouseOver () {
    h22.style.color = 'green';
});
h22.addEventListener('mouseout', function handleMouseOut() {
    h22.style.color = 'black';
});