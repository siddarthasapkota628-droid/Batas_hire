import { pgClient } from 'pg';
const client = new pgClient({
    connectionString: "postgresql://postgres:reaper0833@localhost:5432/BHG"
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
