export default function () {
  if (localStorage.getItem("searchLists")) {
    this.$store.state.searchLists = JSON.parse(localStorage.getItem("searchLists"));
  }
  if (localStorage.getItem("favorites")) {
    this.$store.state.favorites = JSON.parse(localStorage.getItem("favorites"));
  }
}