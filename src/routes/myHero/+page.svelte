<script lang="ts">
    import Hero from "./Hero.svelte";
    import { fetchMarvelData } from "$lib/marvel-api";

    export let data;
    let { characters } = data;

    let search = "";

    async function getByChar() {
        try {
            const data = await fetchMarvelData('characters', {
                limit: 50,
                nameStartsWith: search
            });
            console.log({data});
            characters = data.results.map(char => ({...char, favorited: false}))
            
            
        }catch (error){
            console.log(error)
        }
    }
</script>

<svelte:head>
	<title>My Hero</title>
	<meta name="description" content="Marvel Heroes" />
</svelte:head>

<form on:submit={getByChar}>
    <input bind:value={search} class="heroSearch" type="text" />
    <button type="submit">Search</button>
</form>

<div class="myHero">
    {#each characters as character}
        <div class="list-item">
            <Hero 
                name={character?.name} 
                favorited={character.favorited}
                imageSrc={character.thumbnail.path + "." + character.thumbnail.extension}
            />
        </div>
    {/each}
</div>

<style>
    form {
        display: flex;
        height: 25px;
        justify-content: center;
        margin: 20px 0px;
        gap: 4px;
    }
    .myHero {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-item {
        flex: 0 0 calc(33.33% - 200px);
        margin-bottom: 20px;
    }
    .heroSearch {
        display: flex;
        align-self: center;
        width: 50%;
        margin: 20px 0px;
    }
</style>