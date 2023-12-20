import LayoutWrapper from './LayoutWrapper';

export default function YoutubeSnippet() {
  return (
    <div className="relative bg-black border h-auto">
      <LayoutWrapper>
        <div className="pb-1 md:pb-10 rounded-3xl flex flex-col text-center">
          <p className="text-2xl md:text-4xl mt-8 md:mt-16 font-bold">
            <span className="text-white font-poppins "> Our Latest from YouTube </span>
          </p>
        </div>
        <div className="mt-5 mb-[4rem] md:mb-[100px] w-full">
          <div>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/uFQSNwzH-bo?si=7WXHjwLT4sN19dV8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
