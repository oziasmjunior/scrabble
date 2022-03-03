import fetch from 'cross-fetch';

describe('search words', () => {
    test('search words with a regular expression', async () => {
        const response = await fetch('http://localhost:3333', {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reg: ".*r.*d"
            }),
        });

        const responseBody = await response.json()

        expect(response.status).toBe(200);
    })
})