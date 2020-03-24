const crypto = require('crypto'); // criptografia
const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // sera usado pra gerar strings aleatórias
        
        await connection('ongs').insert({ // await faz a aplicação esperar este techo de código terminar para depois contiuar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};