<script>
  import Header from './UI/Header.svelte';
	
  import MeetupsGrid from './Meetups/MeetupsGrid.svelte';

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
      contactEmail: '123@gmail.com',
    },
    {
      id: 'm2',
      title: 'thiago',
      subtitle: 'yeahhh boi',
      description: 'Lorem ipsum',
      imageUrl: 'https://s2.glbimg.com/c-uOStgB8sWWAuaZpWXT0YsM7Pw=/0x129:1646x1309/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/11/06/rib2364_wnv683k.jpg',
      address: 'Av 123',
      contactEmail: '123@gmail.com',
    },
  ]

  function addMeetup() {
	  const newMeetup = {
		  id: Math.random().toString(),
		  title,
		  subtitle,
		  description,
		  imageUrl,
		  contactEmail: email,
		  address,
	  };
	  meetups = [newMeetup, ...meetups]
  }
</script>

<Header/>

<main>
<form on:submit|preventDefault={addMeetup}>
	<div class="form-control">
		<label for="title">Title</label>
		<input bind:value={title} type="text" id="title"/>
	</div>
	<div class="form-control">
		<label for="subtitle">Subtitle</label>
		<input bind:value={subtitle} type="text" id="subtitle"/>
	</div>
	<div class="form-control">
		<label for="address">Address</label>
		<input bind:value={address} type="text" id="address"/>
	</div>
	<div class="form-control">
		<label for="email">Email</label>
		<input bind:value={email} type="text" id="email"/>
	</div>
	<div class="form-control">
		<label for="image">Image</label>
		<input bind:value={imageUrl} type="text" id="image"/>
	</div>
	<div class="form-control">
		<label for="description">Description</label>
		<textarea bind:value={description} id="description"/>
	</div>
	<button type="submit">Add</button>
</form>
	<MeetupsGrid {meetups}/>
</main>