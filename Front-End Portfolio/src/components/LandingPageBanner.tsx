function LandingPageBanner(props: {
  landingBannerRef: React.RefObject<HTMLDivElement>;
  heading1: string;
  heading2: string;
}) {
  return (
    <div ref={props.landingBannerRef}>
      <header className={'font-poppins flex flex-col justify-center h-screen text-center p-12'}>
        <h1 className={'text-5xl md:text-8xl font-bold'}>
          {props.heading1}
          <span className={'text-amber-400'}>.</span>
        </h1>
        <p className={'text-xl md:text-4xl pt-6'}>
          <span className={'text-amber-400 font-extrabold'}>&gt;</span> {props.heading2}
        </p>
      </header>
    </div>
  );
}

export default LandingPageBanner;
