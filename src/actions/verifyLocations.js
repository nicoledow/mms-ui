export default function verifyLocation(startingString, destinationString) {
  fetch(`${BASE_URL}distance`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      start: startingString,
      destination: destinationString,
    }),
  })
    .then((resp) => resp.json())
    .then((obj) => {
      if (obj["status"] === "VALID") {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      alert("An error occurred. Please try again.");
    });
}
