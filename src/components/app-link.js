const APP_INFO = {
  github: {
    name: "GitHub",
    link: "https://github.com/sgocastro",
  },
  twitter: {
    name: "Twitter",
    link: "https://www.twitter.com/Santicastro_dev",
  },
  linkedin: {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/santiago-matias-castro/",
  },
}

export default class AppLink extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
    this.render()
  }

  render() {
    const appName = this.getAttribute("app-name")

    this.shadow.innerHTML = `
      <style>
        a {
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        a:visited {
          color: inherit;
        }
      </style>
      <a 
        href="${APP_INFO[appName].link}"
        target="_blank"
        title="${APP_INFO[appName].name}"
      >
        <app-logo app-name="${appName}" />
      </a>`
  }
}
