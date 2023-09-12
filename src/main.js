import { AppLink, AppLogo } from "./components"
import { Ok, Error } from "./icons"

customElements.define("app-logo", AppLogo)
customElements.define("app-link", AppLink)
customElements.define("icon-ok", Ok)
customElements.define("icon-error", Error)

document.addEventListener("DOMContentLoaded", () => {
  const formInputs = {
    interested_person_name: {
      element: document.getElementById("interested-person-name"),
    },
    interested_person_email: {
      element: document.getElementById("interested-person-email"),
    },
    interested_person_enterprise: {
      element: document.getElementById("interested-person-enterprise"),
    },
    interested_person_message: {
      element: document.getElementById("interested-person-message"),
    },
  }

  const contactFormErrorMessage = document.getElementById(
    "contact-form-error-message"
  )
  const contactFormSuccessMessage = document.getElementById(
    "contact-form-success-message"
  )
  const submitButton = document.getElementById("contact-article-submit-button")

  document.getElementById("years-development").innerText =
    getDifferencesInYears("01/09/2018")

  document
    .querySelector("form#contact-form")
    .addEventListener("submit", async (e) => {
      try {
        e.preventDefault()

        const formData = new FormData(e.target)

        const body = JSON.stringify({
          service_id: import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAIL_JS_USER_ID,
          template_params: {
            interested_person_name: formData.get("interested-person-name"),
            interested_person_email: formData.get("interested-person-email"),
            interested_person_enterprise: formData.get(
              "interested-person-enterprise"
            ),
            interested_person_message: formData.get(
              "interested-person-message"
            ),
          },
        })

        submitButton.setAttribute("disabled", true)
        handleDisabledInContactFormInputs({ disabled: true })

        const response = await fetch(import.meta.env.VITE_EMAIL_JS_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        })

        if (response.status >= 400 && response.status <= 600)
          throw new Error(response.statusText)

        contactFormSuccessMessage.classList.toggle("show")
        contactFormSuccessMessage.scrollIntoView({ behavior: "smooth" })

        if (contactFormErrorMessage.classList.contains("show"))
          contactFormErrorMessage.classList.remove("show")
      } catch (error) {
        contactFormErrorMessage.classList.toggle("show")

        if (contactFormSuccessMessage.classList.contains("show"))
          contactFormSuccessMessage.classList.remove("show")

        contactFormErrorMessage.scrollIntoView({ behavior: "smooth" })
        handleDisabledInContactFormInputs({ disabled: false })
        submitButton.removeAttribute("disabled")
      }
    })

  function handleDisabledInContactFormInputs({ disabled }) {
    Object.keys(formInputs).map((input) => {
      disabled
        ? formInputs[input].element.setAttribute("disabled", true)
        : formInputs[input].element.removeAttribute("disabled")
    })
  }
})

function getDifferencesInYears(date) {
  const year = new Date(date).getFullYear()
  const todayYear = new Date(Date.now()).getFullYear()
  return todayYear - year
}
