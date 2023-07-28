const search = document.querySelector(".input-group input");
function searchTable() {
  table_rows.forEach((e, t) => {
    let o = e.textContent.toLowerCase(),
      a = search.value.toLowerCase();
    e.classList.toggle("hide", o.indexOf(a) < 0),
      e.style.setProperty("--delay", t / 25 + "s");
  }),
    document.querySelectorAll("tbody tr:not(.hide)").forEach((e, t) => {
      e.style.backgroundColor = t % 2 == 0 ? "transparent" : "#0000000b";
    });
}
function sortTable(o, a) {
  [...table_rows]
    .sort((e, t) => {
      (e = e.querySelectorAll("td")[o].textContent.toLowerCase()),
        (t = t.querySelectorAll("td")[o].textContent.toLowerCase());
      return a ? (e < t ? 1 : -1) : e < t ? -1 : 1;
    })
    .map((e) => document.querySelector("tbody").appendChild(e));
}
(table_rows = document.querySelectorAll("tbody tr")),
  (table_headings = document.querySelectorAll("thead th")),
  search.addEventListener("input", searchTable),
  table_headings.forEach((e, t) => {
    let o = !0;
    e.onclick = () => {
      table_headings.forEach((e) => e.classList.remove("active")),
        e.classList.add("active"),
        document
          .querySelectorAll("td")
          .forEach((e) => e.classList.remove("active")),
        table_rows.forEach((e) => {
          e.querySelectorAll("td")[t].classList.add("active");
        }),
        e.classList.toggle("asc", o),
        (o = !e.classList.contains("asc")),
        sortTable(t, o);
    };
  });
