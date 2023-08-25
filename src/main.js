import { AppLink, AppLogo } from "./components"
import { Ok, Error } from "./icons"

customElements.define("app-logo", AppLogo)
customElements.define("app-link", AppLink)
customElements.define("icon-ok", Ok)
customElements.define("icon-error", Error)

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("form#contact-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault()

      const submitButton = document.querySelector("button#submit-button")

      submitButton.setAttribute("disabled", true)

      const formData = new FormData(e.target)

      const API_URL = "https://api.emailjs.com/api/v1.0/email/send"

      const body = JSON.stringify({
        service_id: "service_xhgygt7",
        template_id: "template_qwjp05q",
        user_id: "BuRXUJ2vyU3Bp1m64",
        template_params: {
          interested_person_name: formData.get("interested-person-name"),
          interested_person_email: formData.get("interested-person-email"),
          interested_person_enterprise: formData.get(
            "interested-person-enterprise"
          ),
          interested_person_message: formData.get("interested-person-message"),
        },
      })

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })

      if (response.status === 200) {
      }
    })
})
