// Serves public/ on a fixed port for a local look at the app: node tools/serve.mjs [port]. Add --fixture to load the test subject too.
// The tests use the same server on a free port.
import { startServer } from '../tests/static-server.mjs';
const { url } = await startServer({ port: Number(process.argv.find(a => /^\d+$/.test(a))) || 5601, fixture: process.argv.includes('--fixture') });
console.log(`serving public/ at ${url}`);
