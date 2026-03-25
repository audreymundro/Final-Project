import { Carousel, Typography } from "@material-tailwind/react";

export function HomeCarouselCardA({ articleOneTitle, articleOneDescription }) {

    return (
      <div className="m-4 font-serif border-2 border-black rounded-lg p-4">
        <h1 className="font-serif py-4 text-xl">New Articles</h1>
        {/*<Carousel className="rounded-xl">
          <div className="relative h-full w-full">
            <img src="./images/f1academyphoto1.jpeg" alt="Article 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bottom-0 grid h-full w-full place-items-center">
                <div className="w-3/4 text-center md:w-1/2">
                  <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                    {articleOneTitle}
                  </Typography>
                  <Typography variant="lead" color="white" className="mb-12">
                    {articleOneDescription}
                  </Typography>
                </div>
              </div>
            </div>
        </Carousel>*/}
      </div>
  );
}
