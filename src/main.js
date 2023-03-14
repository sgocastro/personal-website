import { AppLink, AppLogo, Contact, ContactButton } from "./components"
import { $, getDateDifference } from "./utils"

window.customElements.define("app-logo", AppLogo)
window.customElements.define("app-link", AppLink)
window.customElements.define("contact-button", ContactButton)
window.customElements.define("contact-social-media", Contact)

$("#years-development").innerText = getDateDifference(
  new Date("08/01/2018")
).toString()

$("#years-in-front-end").innerText = getDateDifference(
  new Date("12/01/2019")
).toString()
