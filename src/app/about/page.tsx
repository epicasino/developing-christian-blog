import Biography from '@/components/about/biography/Biography';
import Header from '@/components/about/Header';
import Quote from '@/components/about/Quote';
import ContentBreak from '@/components/utils/ContentBreak';
import Summary from '@/components/about/Summary';
import './styles.css';

export default function page() {
  return (
    <main className="flex flex-col items-center w-full">
      <Header />
      <ContentBreak />
      <Quote />
      <ContentBreak />
      <Biography />
      <Summary />
    </main>
  );
}
