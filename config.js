const PORT = process.env.PORT || 3000;
const RPC_HOST = process.env.RPC_HOST || 'localhost';
const RPC_PROTOCOL = process.env.RPC_PROTOCOL || 'http';
const RPC_PORT = process.env.RPC_PORT || '5001';

module.exports = {
    PORT,
    RPC_HOST,
    RPC_PORT,
    RPC_PROTOCOL,
}