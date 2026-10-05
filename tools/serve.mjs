// Serves public/ on a fixed port for a local look at the app: node tools/serve.mjs [port]. The tests use the same server on a free port.
import { startServer } from '../tests/static-server.mjs';
const { url } = await startServer(Number(process.argv[2]) || 5601);
console.log(`serving public/ at ${url}`);
