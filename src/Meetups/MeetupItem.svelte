<script>
  import { createEventDispatcher } from "svelte";
  import meetups from "./meetups-store.js";
  import Badge from "./../UI/Badge.svelte";
  import Button from "./../UI/Button.svelte";

  export let id;
  export let title;
  export let subtitle;
  export let imageUrl;
  export let email;
  export let description;
  export let address;
  export let isFavorite;

  const dispatch = createEventDispatcher();

  const toggleFavorite = () => {
    meetups.toggleFavorite(id);
  };
</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }
  .content {
    height: 4rem;
  }
</style>

<article>
  <header>
    <h1>
      {title}
      {#if isFavorite}
        <Badge>FAVORITE</Badge>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button mode="outline" type="button" on:click={() => dispatch('edit', id)}>
      Edit
    </Button>
    <Button
      mode="outline"
      type="button"
      on:click={() => dispatch('showdetails', id)}>
      Show Details
    </Button>
    <Button
      on:click={toggleFavorite}
      type="button"
      color={isFavorite ? null : 'success'}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </Button>
  </footer>
</article>
