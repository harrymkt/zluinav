//Js script that allows you to have the ability to copy code blocks.
document.querySelectorAll("pre").forEach(pre =>
{
// Create a container to hold the language label, button, and pre tag
const container = document.createElement("div");
// Create the language label
const language = pre.getAttribute("data-lang");
if (language)
{
const langLabel = document.createElement("span");
langLabel.textContent = `${language} `;
container.appendChild(langLabel); // Add language label before the button
}
// Create the copy button
const copyButton = document.createElement("button");
const copy_text = "Copy "+(language?language+" ":"")+"code to clipboard";
copyButton.textContent = copy_text;
container.appendChild(copyButton); // Add the button to the container
// Insert the container before the <pre> tag
pre.parentNode.insertBefore(container, pre);
container.appendChild(pre); // Add the pre inside the container
// Copy functionality
copyButton.addEventListener("click", () =>
{
const text = pre.textContent;
navigator.clipboard.writeText(text)
.then(() =>
{
copyButton.textContent = "Copied!";
setTimeout(() =>
{
copyButton.textContent = copy_text;
}, 1500);
})
.catch(err =>
{
console.error("Failed to copy: ", err);
});
});
});