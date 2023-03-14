export default class ContactSocialMedia extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
    this.render()
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        aside {
          position: fixed;
          width: fit-content;
          height: 6rem;
          background-color: var(--secondary-color);
          left: 0rem;
          top: 50%;
          display: flex;
          flex-flow: row nowrap;
          flex-basis: 3.5rem;
          justify-content: flex-end;
          align-items: center;
          gap: .5rem;
          padding-left: 1.5rem;
        }
      </style>
      <aside>
          <app-link app-name="github"></app-link>
          <app-link app-name="linkedin"></app-link>
          <app-link app-name="twitter"></app-link>
          <contact-button />
      </aside>
      <script>
        
      </script>
    `
  }
}
