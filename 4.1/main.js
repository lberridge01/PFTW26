const myEmptyDiv = document.querySelector("#myEmptyDiv");

//create a new element
const heading = document.createElement("h1");
heading.innerHTML = "Hello Everyone!";
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = "pink";
}