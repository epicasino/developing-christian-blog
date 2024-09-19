'use server';
import { getVerseOfTheDay } from '@glowstudent/youversion';

export default async function VerseOfTheDay() {
  const verse = await getVerseOfTheDay();
  return (
    <header className="lg:pt-[10vh] h-screen lg:h-[50vh] flex flex-col justify-center items-center text-center gap-2">
      <p className="font-light">{verse?.citation}</p>
      <h1 className="w-[50vw] font-semibold">{verse?.passage}</h1>
    </header>
  );
}
