const send = (ws, type, payload) => {
    const response = { type, payload };
    if (ws.readyState !== ws.OPEN) return setImmediate(() => send(ws, type, payload));
    ws.send(JSON.stringify(response));
};

export default (ws) => (type, payload) => {
    send(ws, type, payload);
};