<script lang="ts">
    import HeartEmpty from 'svelte-icons/io/IoMdHeartEmpty.svelte'
    
    export let imageSrc: string;
    export let name: string;
    export let favorited: boolean;

    let isFavorited = favorited;
    function toggleFavorited() {
        isFavorited = !isFavorited;
    }
</script>

<div class="hero">
    <img class="image" src={imageSrc} />
    <div class={isFavorited ? "info-fav" : "info"}>
        <h1 class="text">{name}</h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={toggleFavorited} class="heart">
            <div class="icon">
                <HeartEmpty />
            </div>
        </div>
    </div>
</div>

<style>
    .hero{
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 200px;
        align-items: flex-start;
        background-color: black;

    }
    .info {
        display: flex;
        box-sizing: border-box;
        border-top: 5px;
        border-top-color: red;
        padding: 20px;
        flex-direction: column;
        background-color: black;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    .info-fav {
        display: flex;
        box-sizing: border-box;
        border-top: 5px;
        border-top-color: red;
        padding: 20px;
        flex-direction: column;
        background-color: red;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }
    
    .image {
        height: 200px;
        width: 200px;
    }
    .text {
        color: aliceblue;
        font-size: 14px;
        text-align: start;
    }
    .heart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        align-self: flex-end;
    }

    .icon {
        color: white;
        width: 25px;
        height: 25px;
    }

</style>