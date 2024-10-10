const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {
    const { valor, descricao } = JSON.parse(event.body);

    try {
        const response = await fetch('https://api.pushinpay.com.br/v1/cobranca/pix', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 1539|4K1rHtLMG1WoYKOIm55wlNFbLmBoD8BgoQrDm1Uvfe13bba1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                valor: valor,
                descricao: descricao,
                expiracao: 3600 // 1 hora
            })
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao criar o Pix', error: error.message })
        };
    }
};
