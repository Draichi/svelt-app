<script>
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Header from "./UI/Header.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import MeetupsGrid from "./Meetups/MeetupsGrid.svelte";
  import meetps from "./Meetups/meetups-store.js";

  let editMode = null;
  let page = "overview";
  let editedId = null;
  let idToShow = null;

  const saveMeetup = () => {
    editMode = null;
    editedId = null;
  };

  const cancelEdit = () => {
    editMode = null;
    editedId = null;
  };

  const showDetails = event => {
    idToShow = event.detail;
    page = "details";
  };

  const closeDetails = () => {
    page = "overview";
    idToShow = null;
  };

  const startEdit = event => {
    editMode = "edit";
    editedId = event.detail;
  };
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />
<main>
  {#if page === 'overview'}
    {#if editMode === 'edit'}
      <EditMeetup id={editedId} on:save={saveMeetup} on:cancel={cancelEdit} />
    {/if}
    <MeetupsGrid
      meetups={$meetps}
      on:showdetails={showDetails}
      on:edit={startEdit}
      on:add={() => (editMode = 'edit')} />
  {:else}
    <MeetupDetail id={idToShow} on:close={closeDetails} />
  {/if}
</main>
