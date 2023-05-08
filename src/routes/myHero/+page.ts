import { fetchMarvelData } from "$lib/marvel-api";

export async function load({ fetch, params }) {
    try {
        const data = await fetchMarvelData('characters', {
            limit: 50,
        });

        return {
            body: data,
            characters: data.results.map(char => ({...char, favorted: false}))
        };

    } catch (error) {
        return {
          status: 500,
          body: { error: error.message },
        };
    }
}