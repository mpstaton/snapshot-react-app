const create = (contactCard) => {
    console.log("We are in the api-contact-card.js create function")
    console.log(contactCard)
      return fetch('/api/contact-cards/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactCard)
        })
        .then((response) => {
          console.log(`The response is:`)
          console.log(response)
          // console.log(response.json())
          return response.json()
        }).catch((err) => console.log(err))
    }

const list = () => {
  console.log("We are in the api-contact-card.js list function")
      return fetch('/api/contact-cards/', {
        method: 'GET',
      }).then(response => {
        return response.json()
      }).catch((err) => console.log(err))
    }

    export {
        create,
        list
      }