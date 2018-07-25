const create = (person) => {
  console.log("We are in the api-person.js create function")
  console.log(person)
    return fetch('/api/persons/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
      })
      .then((response) => {
        console.log(`The response is:`)
        console.log(response)
        // console.log(response.json())
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const listPersons = () => {
    return fetch('/api/persons/', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const read = (params, credentials) => {
    return fetch('/api/persons/' + params.personId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const update = (params, credentials, person) => {
    return fetch('/api/persons/' + params.personId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: person
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
  }
  
  const remove = (params, credentials) => {
    return fetch('/api/persons/' + params.personId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  
  const findPerson = (params, credentials) => {
    return fetch('/api/persons/find-person/' + params.personId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  export {
    create,
    listPersons,
    read,
    update,
    remove,
    findPerson
  }
  