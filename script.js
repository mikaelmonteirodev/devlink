function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Mikael Monteiro de óculos escuros com a cidade ao fundo"
    )
  } else {
    // se não tiver com light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Mikael Monteiro sorrindo com fundo azul"
    )
  }
}
