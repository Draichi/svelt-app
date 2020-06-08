<script>
	import EditMeetup from './Meetups/EditMeetup.svelte';
  import Header from './UI/Header.svelte';
	import TextInput from './UI/TextInput.svelte';
	import MeetupsGrid from './Meetups/MeetupsGrid.svelte';
	import Button from './UI/Button.svelte';


  let editMode = null
  let meetups = [
    {
      id: 'm1',
      title: 'Lucas draichi',
      subtitle: 'yeah boi',
      description: 'Lorem some ipsum',
      imageUrl: 'https://www.focus.jor.br/wp-content/uploads/2020/05/Corinthians-550x292.jpg',
      address: 'Rua 123',
      email: '123@gmail.com',
      isFavorite: false,
    },
    {
      id: 'm2',
      title: 'thiago',
      subtitle: 'yeahhh boi',
      description: 'Lorem ipsum',
      imageUrl: 'https://s2.glbimg.com/c-uOStgB8sWWAuaZpWXT0YsM7Pw=/0x129:1646x1309/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/11/06/rib2364_wnv683k.jpg',
      address: 'Av 123',
      email: '123@gmail.com',
      isFavorite: false,
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

  const toggleFavorite = (event) => {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<Header/>
<main>
	<Button caption="New meetup" on:click={() => editMode = 'add' } />
  {#if editMode === 'add'}
    <EditMeetup/>
  {/if}
  <MeetupsGrid {meetups} on:togglefavorite={toggleFavorite}/>
</main>

<style>
	main {
		margin-top: 5rem;
	}
</style>