<script>
  import Header from './UI/Header.svelte';
  import MeetupItem from './Meetups/MeetupItem.svelte';

  const meetups = [
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
</script>

<Header/>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      title={meetup.title}
      description={meetup.description}
      subtitle={meetup.subtitle}
      address={meetup.address}
      imageUrl={meetup.imageUrl}
    />
  {/each}

</section>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>
