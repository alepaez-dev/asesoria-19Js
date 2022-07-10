
fetch("http://localhost:8080/koders", {
  method:"POST",
  body: JSON.stringify({
    name: "alejandra",
    lastname: "hernandez"
  })
})
