export const fanSignUp = (data) => {
  fetch("https://admin.fanconvo.com/api/v3/sign-up/fan", { body: JSON.stringify(data) })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((data) => {
      return "Error in API";
    });
};

export const talentSignUp = (data) => {
  fetch("https://admin.fanconvo.com/api/v3/sign-up/talent", { body: JSON.stringify(data) })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((data) => {
      return "Error in API";
    });
};
