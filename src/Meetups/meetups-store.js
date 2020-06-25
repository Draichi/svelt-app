import { writable } from "svelte/store";

const meetups = writable([
  {
    id: "m1",
    title: "Lucas draichi",
    subtitle: "yeah boi",
    description: "Lorem some ipsum",
    imageUrl:
      "https://www.focus.jor.br/wp-content/uploads/2020/05/Corinthians-550x292.jpg",
    address: "Rua 123",
    email: "123@gmail.com",
    isFavorite: false
  },
  {
    id: "m2",
    title: "thiago",
    subtitle: "yeahhh boi",
    description: "Lorem ipsum",
    imageUrl:
      "https://s2.glbimg.com/c-uOStgB8sWWAuaZpWXT0YsM7Pw=/0x129:1646x1309/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/11/06/rib2364_wnv683k.jpg",
    address: "Av 123",
    email: "123@gmail.com",
    isFavorite: false
  }
])

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false
    }
    meetups.update(items => [newMeetup, ...items])
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updatedMeetup = { ...items.find(m => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    })
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id)
      const updatedMeetup = { ...items[meetupIndex], ...meetupData }
      console.log(updatedMeetup)
      const updatedMeetups = [...items]
      updatedMeetups[meetupIndex] = updatedMeetup
      return updatedMeetups
    })
  },
  deleteMeetup: id => {
    meetups.update(items => {
      const uptedMeetups = items.filter(i => i.id !== id)
      return uptedMeetups
    })
  }
}

export default customMeetupsStore;
