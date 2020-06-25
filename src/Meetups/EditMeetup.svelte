<script>
  import meetups from "./meetups-store.js";
  import { isEmpty, isEmailValid } from "./../helpers/validation.js";
  import Modal from "./../UI/Modal.svelte";
  import { createEventDispatcher } from "svelte";
  import Button from "./../UI/Button.svelte";
  import TextInput from "./../UI/TextInput.svelte";

  export let id = null;

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let imageUrl = "";
  let description = "";

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: addressValid = !isEmpty(address);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: emailValid = isEmailValid(email);
  $: descriptionValid = !isEmpty(description);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    addressValid &&
    descriptionValid &&
    imageUrlValid &&
    emailValid &&
    descriptionValid;

  if (id) {
    const unsubscribe = meetups.subscribe(items => {
      const selectedMeetup = items.find(i => i.id === id);
      title = selectedMeetup.title;
      subtitle = selectedMeetup.subtitle;
      address = selectedMeetup.address;
      email = selectedMeetup.email;
      imageUrl = selectedMeetup.imageUrl;
      description = selectedMeetup.description;
    });
    unsubscribe();
  }

  const submitForm = () => {
    const newMeetup = {
      title,
      subtitle,
      description,
      imageUrl,
      email,
      address
    };
    if (id) {
      meetups.updateMeetup(id, newMeetup);
    } else {
      meetups.addMeetup(newMeetup);
    }
    dispatch("save");
  };

  const cancel = () => dispatch("cancel");

  const deleteMeetup = () => {
    meetups.deleteMeetup(id);
    dispatch("save");
  };
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit meetup" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      valid={titleValid}
      validityMessage="Please enter a valid title"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      valid={subtitleValid}
      validityMessage="Please enter a valid subtitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      valid={addressValid}
      validityMessage="Please enter a valid address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="image"
      label="Image"
      valid={imageUrlValid}
      validityMessage="Please enter a valid image url"
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      type="email"
      id="email"
      label="Email"
      valid={emailValid}
      validityMessage="Please enter a valid emaiç"
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      valid={descriptionValid}
      validityMessage="Please enter a valid description"
      controlType="textarea"
      bind:value={description} />
  </form>
  <div name="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
    {#if id}
      <Button type="button" on:click={deleteMeetup}>Delete</Button>
    {/if}
  </div>
</Modal>
