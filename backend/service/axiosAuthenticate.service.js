const axios = require('axios');
let TOKEN = null;

exports.authenticate = async () => {
    try {
        if(TOKEN){
            return TOKEN;
        }

        const response = await axios.post('https://lookerforniveus.cloud.looker.com/api/4.0/login', null, {
            params: {
                client_id: 'QsYXsgBScGscGhnGr4m9',
                client_secret: 'TmpPxgydvTn73Hm94RkZ2yvt'
            }
        });

        if (response.status === 200) {
            const token = response.data.access_token;
            console.log('Access Token:', token);
            TOKEN = token; // Cache the token for reuse
            return token;
        } else {
            throw new Error(`Authentication failed with status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during authentication:', error.message);
        throw error;
    }
}