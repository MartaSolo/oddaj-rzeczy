const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

const postFormData = (data) => {
  fetch(`${API}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

export default postFormData;
