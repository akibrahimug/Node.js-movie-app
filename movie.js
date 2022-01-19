
const https = require('https');

const printMessage = (search, desc) => {
    const message = `${search} is a great show and this is it desc: ${desc}`
    console.log(message);
}

const get = (search) => {
    const request = https.get(`https://api.tvmaze.com/singlesearch/shows?q=${search}`, res => {
        if(res.statusCode === 200){
            let body = '';
            res.on('data', data => {
                body += data.toString();
            })

            try{
                res.on('end', () => {
                    const profile = JSON.parse(body)
                    printMessage(profile.name, profile.summary.replace(/<\/?[^>]+>/gi, ''))
                })
            }catch(e){
                console.log(e)
            }
            
        }else{
            console.error();
        }
    })
    request.on('error', e => {
        console.error(e)
    })
}

module.exports.get = get