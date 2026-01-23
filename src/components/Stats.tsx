function Stats() {
  return (
    <section className="flex flex-row justify-center md:justify-start gap-16 text-primary mt-16">
      <div className="flex flex-col whitespace-pre-wrap">
        <span className="text-6xl font-black">+ 1</span>
        <span>
          YEARS <br />
          OF <span className="text-secondary">EXPERIENCE</span>
        </span>
      </div>
      <div className="flex flex-col whitespace-pre-wrap">
        <span className="text-6xl font-black">+ 2</span>
        <span>
          PROJECTS <br />
          <span className="text-secondary">COMPLETED</span>
        </span>
      </div>
    </section>
  );
}

export default Stats;
