<script>
    import MeetupItem from './MeetupItem.svelte';

    export let meetups;
</script>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      title={meetup.title}
      description={meetup.description}
      subtitle={meetup.subtitle}
      address={meetup.address}
      email={meetup.email}
      imageUrl={meetup.imageUrl}
    />
  {/each}

</section>

<style>
#meetups {
    margin-top: 5rem;
  }
section {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

@media (min-width: 768px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>