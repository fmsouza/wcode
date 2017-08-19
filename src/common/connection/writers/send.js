export default (ws) => (type, payload) => {
    const response = { type, payload };
    ws.send(JSON.stringify(response));
};