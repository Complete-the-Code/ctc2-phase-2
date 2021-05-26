const t = (t) => {
  let e = null;
  return async (n) => {
    t.classList.add("is-loading");
    const o = (async (t) => {
      try {
        const e = await fetch("https://completethecodetwo.cards/pw", {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: t,
        });
        return [await e.text(), e.ok];
      } catch (t) {
        return ["Communication failed.", !1];
      }
    })(n);
    e = o;
    const [s, a] = await o;
    o === e &&
      (t.classList.remove("is-loading"),
      (t.textContent = s),
      t.classList.toggle("is-ok", a));
  };
};
document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("form"),
    n = document.querySelector(".result"),
    o = t(n);
  e.addEventListener("submit", (t) => {
    t.preventDefault(), o(e.elements.pw.value);
  });
});
export default {};
