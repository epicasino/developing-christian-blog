import React from 'react';

export default function HeaderBio() {
  return (
    <div className="w-[80vw] lg:grid lg:grid-cols-3 gap-10">
      <header className="flex flex-col items-start gap-5">
        <h1 className="text-6xl border-b-2 pb-4 w-full">Biography</h1>
        <h5 className="xl:text-3xl font-normal">
          {`Usually a bio would consist of a person's accolades and talents. We
            want to showcase ourselves to the world that we are exceptional.`}
        </h5>
        <h2 className="xl:text-4xl border-b-2 pb-4">
          However, I must be honest.
        </h2>
      </header>
      <section className="lg:col-span-2 flex flex-col justify-between lg:text-[.95rem] xl:text-2xl border-l-2 pl-4">
        <p>
          {`I was exposed to Christ at a young age. I went to weekly Sunday
          services at the local church, half-heartedly listening to the Gospel,
          falling asleep midway, and barely remembering what the sermon was
          about by the end. I participated in vacation Bible schools and a
          weekly Christian boy scouts-esque club called Awana. I was surrounded
          by the Word and Body of Christ; however, I didn't fully accept it.
          Despite having the Word of God in the Bible and the Church, I couldn't
          understand it. I simply wasn't interested in it more than my
          electronics, my friends, and my video games.`}
        </p>
        <p>
          {`The older I became, the less attached I was to the Lord. Prayers made
          before meals became a robotic and emotionless event, where I treated
          the prayer like a list of things that needed to be checked off (bless
          the food, bless my family, etc.). I never read any Scripture, and I
          used Christianity as a means of identification, not as a way of
          living.`}
        </p>
      </section>
      <br />
    </div>
  );
}
