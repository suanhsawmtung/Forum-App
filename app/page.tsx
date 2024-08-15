import DiscussionCard from "@/components/DiscussionCard";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-12 pb-12">
      {Array(8).fill(null).map((item, indx) => (<DiscussionCard key={indx} />))}
    </main>
  );
}

export default Home;
