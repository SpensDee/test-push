export function submitToFB(options) {
  // if (!options.pixel || !options.event || !options.fbClickId) {
  //   console.log("Not Params!");
  //   return;
  // }

  var urlFB = `https://graph.facebook.com/v20.0/${options.pixel}/events?access_token=${options.event}`;
  var dataFB = [
    {
      action_source: "website",
      custom_data: {
        currency: "USD",
        value: 1.23,
      },
      event_name: "Lead",
      event_source_url: "",
      event_time: options.time,
      user_data: {
        client_ip_address: "121.196.193.12",
        client_user_agent: options.userAgent,
        external_id: options.externalID,

        fbc: `fb.1.${options.time}.${options.fbClickId}`,
        fbp: `fb.1.${options.time}.${options.randomNumber}`,
      },
    },
  ];

  console.log(dataFB);

  fetch(urlFB, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      data: dataFB,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Problem", error);
      if (error.response) {
        error.response
          .json()
          .then((data) => {
            console.error("Response data:", data);
          })
          .catch((jsonError) => {
            console.error("JSON parse error:", jsonError);
          });
      } else {
        console.error("No response object available.");
      }
    });
}
