const chevronLeft = `<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>`
const chevronRight = `<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>`

export default class ContactButton extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
    this.render()
  }

  render() {
    this.shadow.innerHTML = `<style>
        button {
          background-color: transparent;
          outline: none;
          border: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <button type="button" id="contact-btn">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36px" 
          height="60px" 
          fill="#FFF" 
          viewBox="0 0 16 16">
            ${chevronRight}
          </svg>
      </button>
      <script>
        document.getElementById("contact-btn").addEventListener("click", (e) => {
          e.preventDefault()
          const $contactSocialMedia = $("aside")
        
          if (
            $contactSocialMedia.classList.contains("open") ||
            $contactSocialMedia.classList.contains("close")
          ) {
            $contactSocialMedia.classList.add("open")
          }
        })
      </script>`
  }
}
