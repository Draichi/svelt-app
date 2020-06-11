<script>
  import Modal from "./../UI/Modal.svelte";
  import { createEventDispatcher } from "svelte";
  import Button from "./../UI/Button.svelte";
  import TextInput from "./../UI/TextInput.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let imageUrl = "";
  let description = "";

  const dispatch = createEventDispatcher();

  const submitForm = () => {
    dispatch("save", {
      title,
      subtitle,
      address,
      email,
      imageUrl,
      description
    });
  };

  const cancel = () => dispatch("cancel");
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
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="image"
      label="Image"
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      type="email"
      id="email"
      label="Email"
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      value={description}
      controlType="textarea"
      on:input={event => (description = event.target.value)} />
  </form>
  <div name="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm}>Save</Button>
  </div>
</Modal>
