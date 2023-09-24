import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "12314 Kenya ",
    Description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "12314 Kenya ",
    Description: "This is a second meetup",
  },
];
function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}

export default HomePage;
