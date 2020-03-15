const validateUrl = (formURL) => {
    let pattern = /http|https:/;
    return pattern.test(formURL);
};

function handleSubmit(event) {
    event.preventDefault()

    //check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    console.log(validateUrl('http://localhost:8080/aylien'))
    retrieveKeys()
          .then(function(data){
            document.getElementById('results').innerHTML = data.text
          })
}

        //ASYNC GET
        const retrieveKeys = async () => {
            const request = await fetch('http://localhost:8080/aylien');
            try{
                const keys = await request.json();
                console.log("got keys")
                console.log(keys)
                return keys;
            }catch(error){
                console.log("error", error);
            }
        }

export { handleSubmit, validateUrl  }
