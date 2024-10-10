exports.handler = async function(event, context) {
    const webhookData = JSON.parse(event.body);

    if (webhookData.status === 'paid') {
        // Call your `pago()` function here or perform some other action.
        await pago(webhookData.valor);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Webhook received' }),
    };
};

async function pago(valor) {
    console.log(`Pagamento de R$ ${valor} confirmado!`);
}