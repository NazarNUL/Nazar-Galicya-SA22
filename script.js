const burger = document.getElementById("burger");
const main__links = document.getElementById("links");

burger.addEventListener("click", () => {
	main__links.classList.toggle("active");
});
