import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Landing from './Landing';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Landing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
