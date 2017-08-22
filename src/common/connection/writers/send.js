const send = (ws, type, payload) => {
    const response = { type, payload };
    if (ws.readyState !== ws.OPEN) return setTimeout(() => send(ws, type, payload), 0);
    ws.send(JSON.stringify(response));
};

export default (ws) => (type, payload) => {
    send(ws, type, payload);
};