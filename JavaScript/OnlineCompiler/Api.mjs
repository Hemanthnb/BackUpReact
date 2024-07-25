const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'ac7cb68445mshe9cd704a5257875p1a1560jsn192b784c78ad',
		'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
	},
};
export default getOutPut=(inputCode)=>{

	let body= {
		language: 'python3',
		version: 'latest',
		code: inputCode,
		input: null
	}

	options['body']=JSON.stringify(body)
	fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
	
}