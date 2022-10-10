displaySearchBar = () => {
  document.querySelector(".search-form").classList.toggle("active");
}


closeSearchBar = () => {
  document.querySelector(".search-form").classList.remove("active");
}

document.querySelector("#search-icon").addEventListener("click",displaySearchBar);

document.querySelector("#close").addEventListener("click",closeSearchBar);
