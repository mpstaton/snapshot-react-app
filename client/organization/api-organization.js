const create = (organization) => {
    console.log("We are in the api-organization.js create function")
    console.log(organization)
      return fetch('/api/organizations/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(organization)
        })
        .then((response) => {
          console.log(`The response is:`)
          console.log(response)
          // console.log(response.json())
          return response.json()
        }).catch((err) => console.log(err))
    }

    const list = () => {
      return fetch('/api/organizations/', {
        method: 'GET',
      }).then(response => {
        return response.json()
      }).catch((err) => console.log(err))
    }

    export {
        create,
        list
      }