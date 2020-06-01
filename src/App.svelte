<script>
  import Header from './UI/Header.svelte';
	import TextInput from './UI/TextInput.svelte';
	import MeetupsGrid from './Meetups/MeetupsGrid.svelte';
	import Button from './UI/Button.svelte';

	let title = '';
	let subtitle = '';
	let address = '';
	let email = '';
	let imageUrl = '';
	let description = '';
  let meetups = [
    {
      id: 'm1',
      title: 'Lucas draichi',
      subtitle: 'yeah boi',
      description: 'Lorem some ipsum',
      imageUrl: 'https://www.focus.jor.br/wp-content/uploads/2020/05/Corinthians-550x292.jpg',
      address: 'Rua 123',
      email: '123@gmail.com',
    },
    {
      id: 'm2',
      title: 'thiago',
      subtitle: 'yeahhh boi',
      description: 'Lorem ipsum',
      imageUrl: 'https://s2.glbimg.com/c-uOStgB8sWWAuaZpWXT0YsM7Pw=/0x129:1646x1309/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/11/06/rib2364_wnv683k.jpg',
      address: 'Av 123',
      email: '123@gmail.com',
    },
  ]

  const addMeetup = () => {
	  const newMeetup = {
		  id: Math.random().toString(),
		  title,
		  subtitle,
		  description,
		  imageUrl,
		  email,
		  address,
	  };
	  meetups = [newMeetup, ...meetups]
  }
</script>

<Header/>
<main>
	<form on:submit|preventDefault={addMeetup}>
		<TextInput
			type="text"
			id="title"
			label="Title"
			value={title}
			on:input={event => title = event.target.value}
		/>
		<TextInput
			type="text"
			id="subtitle"
			label="Subtitle"
			value={subtitle}
			on:input={event => subtitle = event.target.value}
		/>
		<TextInput
			type="text"
			id="address"
			label="Address"
			value={address}
			on:input={event => address = event.target.value}
		/>
		<TextInput
			type="text"
			id="image"
			label="Image"
			value={imageUrl}
			on:input={event => imageUrl = event.target.value}
		/>
		<TextInput
			type="email"
			id="email"
			label="Email"
			value={email}
			on:input={event => email = event.target.value}
		/>
		<TextInput
			id="description"
			label="Description"
			value={description}
			controlType="textarea"
			on:input={event => description = event.target.value}
		/>
		<Button type="submit" caption="Save"/>
	</form>
	<MeetupsGrid {meetups}/>
</main>

<style>
	main {
		margin-top: 5rem;
	}
	form {
		width: 30rem;
		max-width: 90%;
		margin: auto;
	}
</style>