const params = new URLSearchParams(window.location.search);
const specialParam = params.get("beta");

if (specialParam === "active") {
  sessionStorage.setItem("specialParam", "active")
}