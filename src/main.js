function $(query) {
  return document.querySelector(query)
}

function getDateDifference(date, anotherDate = null) {
  if (anotherDate == null) anotherDate = Date.now()

  if (date == null) {
    throw new Error("You didn't indicate date")
  }

  return new Date(anotherDate).getFullYear() - new Date(date).getFullYear()
}

$("#years-development").innerText = getDateDifference(
  new Date("08-01-2018")
).toString()

$("#years-in-front-end").innerText = getDateDifference(
  new Date("12-01-2019")
).toString()
