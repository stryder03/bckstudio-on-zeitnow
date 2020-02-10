import rp from 'request-promise-native';

export default function submitForm(formData) {

    const options = {
        method: 'POST',
        uri: 'https://us-central1-bckapp-84b75.cloudfunctions.net/c1e1dc4562aa425cb765ae56c92e937d',
        body: formData,
        json: true,
    };

    return rp(options).then((body) => {
        console.log(body);
        return true
    }).catch((err) => {
        console.error(err);
        return false
    })
}
