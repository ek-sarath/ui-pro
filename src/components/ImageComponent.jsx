import React from "react";

function ImageComponent(props) {
  return (
    <figure>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7513938-50c3-4896-bd99-c9b1a83eb198?apiKey=c216725d6c47429c9cb6d03cf15dd870&"className="aspect-[1.9] object-cover object-center w-full overflow-hidden"
        alt="Description of the image"
      />
    </figure>
  );
}

export default ImageComponent;