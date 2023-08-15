console.log('hiiiiiiiiiii')

const dogImageDiv = document.getElementById('dogImage')
// htts://dog.ceo/api/breed/image/random

fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(json => {
		console.log(json.message)
		dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
	}) 

