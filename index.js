const server = require("./api/server")

const PORT = process.env.PORT || 999;

server.listen(PORT, () => console.log(`API is running on port ${PORT}`));