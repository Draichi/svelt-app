<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './../UI/Button.svelte';
	import MeetupFilter from './MeetupFilter.svelte';
  import MeetupItem from "./MeetupItem.svelte";

  const dispatch = createEventDispatcher()
  export let meetups;
  let favsOnly = false;

  $: filteredMeetups = favsOnly ? meetups.filter(meetup => meetup.isFavorite) : meetups;

  const setFilter = event => {
    favsOnly = event.detail === 1;
  }
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section id="meetup-controls">
  <MeetupFilter on:select={setFilter}/>
  <Button on:click={() => dispatch('add')}>New meetup</Button>
</section>
<section id="meetups">
  {#each filteredMeetups as meetup}
    <MeetupItem {...meetup} on:showdetails on:edit />
  {/each}

</section>
