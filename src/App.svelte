<script>
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Header from "./UI/Header.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import MeetupsGrid from "./Meetups/MeetupsGrid.svelte";
  import Button from "./UI/Button.svelte";
  import meetps from "./Meetups/meetups-store.js";

  let editMode = null;
  let page = "overview";
  let idToShow = null;

  const addMeetup = () => {
    editMode = null;
  };

  const cancelEdit = () => (editMode = null);

  const showDetails = event => {
    idToShow = event.detail;
    page = "details";
  };

  const closeDetails = () => {
    page = "overview";
    idToShow = null;
  };
</script>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />
<main>
  {#if page === 'overview'}
    <div class="meetup-controls">
      <Button on:click={() => (editMode = 'add')}>New meetup</Button>
    </div>
    {#if editMode === 'add'}
      <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    <MeetupsGrid meetups={$meetps} on:showdetails={showDetails} />
  {:else}
    <MeetupDetail id={idToShow} on:close={closeDetails} />
  {/if}
</main>
