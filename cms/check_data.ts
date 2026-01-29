import { Client } from 'pg';

// Use an environment variable, with a fallback for local dev if needed
const connectionString = process.env.DATABASE_URI || "postgresql://postgres:admin123@localhost:5432/Batas_cms";

const client = new Client({
    connectionString: connectionString
});

async function run() {
    try {
        await client.connect();
        const res = await client.query('SELECT count(*) FROM pages;');
        console.log('Count in pages table:', res.rows[0].count);
        const templates = await client.query('SELECT template, count(*) FROM pages GROUP BY template;');
        console.log('Templates:', templates.rows);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.end();
    }
}

run();
